package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.template.CreateTemplateRequest;
import cl.moldtek.backend.dto.template.TemplateDto;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.TemplateService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/templates")
@RequiredArgsConstructor
public class TemplateController {

    private final TemplateService templateService;

    @GetMapping
    ResponseEntity<ApiResponse<PageResponse<TemplateDto>>> list(
        @AuthenticationPrincipal User user,
        @RequestParam(required = false) String search,
        @RequestParam(required = false) Long productId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            templateService.findAll(user.getCompany().getId(), search, productId, page, size)
        ));
    }

    @GetMapping("/{id}")
    ResponseEntity<ApiResponse<TemplateDto>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(templateService.findById(id)));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<TemplateDto>> create(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody CreateTemplateRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Plantilla creada exitosamente",
            templateService.create(user.getCompany().getId(), user.getId(), request)
        ));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<TemplateDto>> update(
        @PathVariable Long id,
        @Valid @RequestBody CreateTemplateRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(templateService.update(id, request)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        templateService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Plantilla eliminada", null));
    }
}
