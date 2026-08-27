package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.material.CreateMaterialRequest;
import cl.moldtek.backend.dto.material.MaterialCategoryDto;
import cl.moldtek.backend.dto.material.MaterialDto;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.MaterialService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/materials")
@RequiredArgsConstructor
public class MaterialController {

    private final MaterialService materialService;

    @GetMapping
    ResponseEntity<ApiResponse<PageResponse<MaterialDto>>> list(
        @AuthenticationPrincipal User user,
        @RequestParam(required = false) String search,
        @RequestParam(required = false) Long categoryId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            materialService.findAll(user.getCompany().getId(), search, categoryId, page, size)
        ));
    }

    @GetMapping("/all")
    ResponseEntity<ApiResponse<List<MaterialDto>>> listAll(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(
            materialService.findAllActive(user.getCompany().getId())
        ));
    }

    @GetMapping("/{id}")
    ResponseEntity<ApiResponse<MaterialDto>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(materialService.findById(id)));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER','WAREHOUSE')")
    ResponseEntity<ApiResponse<MaterialDto>> create(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody CreateMaterialRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Material creado exitosamente",
            materialService.create(user.getCompany().getId(), request)
        ));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER','WAREHOUSE')")
    ResponseEntity<ApiResponse<MaterialDto>> update(
        @PathVariable Long id,
        @Valid @RequestBody CreateMaterialRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(materialService.update(id, request)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        materialService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Material eliminado", null));
    }

    // Categories
    @GetMapping("/categories")
    ResponseEntity<ApiResponse<List<MaterialCategoryDto>>> listCategories(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(materialService.findCategories(user.getCompany().getId())));
    }

    @PostMapping("/categories")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<MaterialCategoryDto>> createCategory(
        @AuthenticationPrincipal User user,
        @RequestBody Map<String, Object> body
    ) {
        String name = (String) body.get("name");
        String description = (String) body.get("description");
        Long parentId = body.get("parentId") != null ? Long.valueOf(body.get("parentId").toString()) : null;
        return ResponseEntity.ok(ApiResponse.ok(
            materialService.createCategory(user.getCompany().getId(), name, description, parentId)
        ));
    }

    @DeleteMapping("/categories/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<Void>> deleteCategory(@PathVariable Long id) {
        materialService.deleteCategory(id);
        return ResponseEntity.ok(ApiResponse.ok("Categoría eliminada", null));
    }
}
