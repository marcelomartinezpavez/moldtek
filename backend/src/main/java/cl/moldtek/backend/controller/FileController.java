package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.repository.MaterialRepository;
import cl.moldtek.backend.repository.TemplateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
@Slf4j
public class FileController {

    @Value("${moldtek.upload.dir}")
    private String uploadDir;

    private final TemplateRepository templateRepository;
    private final MaterialRepository materialRepository;

    @PostMapping("/template/{templateId}/image")
    ResponseEntity<ApiResponse<Map<String, String>>> uploadTemplateImage(
        @PathVariable Long templateId,
        @RequestParam("file") MultipartFile file
    ) throws IOException {
        String filename = storeFile(file, "images");
        templateRepository.findById(templateId).ifPresent(t -> {
            t.setImageUrl("/files/images/" + filename);
            templateRepository.save(t);
        });
        return ResponseEntity.ok(ApiResponse.ok(Map.of("url", "/files/images/" + filename)));
    }

    @PostMapping("/template/{templateId}/program")
    ResponseEntity<ApiResponse<Map<String, String>>> uploadTemplateProgram(
        @PathVariable Long templateId,
        @RequestParam("file") MultipartFile file
    ) throws IOException {
        String filename = storeFile(file, "programs");
        String originalName = file.getOriginalFilename();
        templateRepository.findById(templateId).ifPresent(t -> {
            t.setProgramFileUrl("/files/programs/" + filename);
            t.setProgramFileName(originalName);
            templateRepository.save(t);
        });
        return ResponseEntity.ok(ApiResponse.ok(Map.of("url", "/files/programs/" + filename, "name", originalName)));
    }

    @PostMapping("/material/{materialId}/image")
    ResponseEntity<ApiResponse<Map<String, String>>> uploadMaterialImage(
        @PathVariable Long materialId,
        @RequestParam("file") MultipartFile file
    ) throws IOException {
        String filename = storeFile(file, "images");
        materialRepository.findById(materialId).ifPresent(m -> {
            m.setImageUrl("/files/images/" + filename);
            materialRepository.save(m);
        });
        return ResponseEntity.ok(ApiResponse.ok(Map.of("url", "/files/images/" + filename)));
    }

    @GetMapping("/images/{filename:.+}")
    ResponseEntity<Resource> serveImage(@PathVariable String filename) throws MalformedURLException {
        return serveFile("images", filename);
    }

    @GetMapping("/programs/{filename:.+}")
    ResponseEntity<Resource> serveProgram(@PathVariable String filename) throws MalformedURLException {
        return serveFile("programs", filename);
    }

    private String storeFile(MultipartFile file, String subDir) throws IOException {
        Path dir = Paths.get(uploadDir, subDir);
        Files.createDirectories(dir);
        String ext = "";
        String original = file.getOriginalFilename();
        if (original != null && original.contains(".")) {
            ext = original.substring(original.lastIndexOf('.'));
        }
        String filename = UUID.randomUUID() + ext;
        Files.copy(file.getInputStream(), dir.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return filename;
    }

    private ResponseEntity<Resource> serveFile(String subDir, String filename) throws MalformedURLException {
        Path file = Paths.get(uploadDir, subDir, filename);
        Resource resource = new UrlResource(file.toUri());
        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + filename + "\"")
            .contentType(MediaType.APPLICATION_OCTET_STREAM)
            .body(resource);
    }
}
