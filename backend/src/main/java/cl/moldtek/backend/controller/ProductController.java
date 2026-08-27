package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.product.CreateProductRequest;
import cl.moldtek.backend.dto.product.ProductCategoryDto;
import cl.moldtek.backend.dto.product.ProductDto;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    ResponseEntity<ApiResponse<PageResponse<ProductDto>>> list(
        @AuthenticationPrincipal User user,
        @RequestParam(required = false) String search,
        @RequestParam(required = false) Long categoryId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            productService.findAll(user.getCompany().getId(), search, categoryId, page, size)
        ));
    }

    @GetMapping("/{id}")
    ResponseEntity<ApiResponse<ProductDto>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(productService.findById(id)));
    }

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<ProductDto>> create(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody CreateProductRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Producto creado exitosamente",
            productService.create(user.getCompany().getId(), request)
        ));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<ProductDto>> update(
        @PathVariable Long id,
        @Valid @RequestBody CreateProductRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(productService.update(id, request)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.ok(ApiResponse.ok("Producto eliminado", null));
    }

    @GetMapping("/categories")
    ResponseEntity<ApiResponse<List<ProductCategoryDto>>> listCategories(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(productService.findCategories(user.getCompany().getId())));
    }

    @PostMapping("/categories")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<ProductCategoryDto>> createCategory(
        @AuthenticationPrincipal User user,
        @RequestBody Map<String, Object> body
    ) {
        String name = (String) body.get("name");
        String description = (String) body.get("description");
        Long parentId = body.get("parentId") != null ? Long.valueOf(body.get("parentId").toString()) : null;
        return ResponseEntity.ok(ApiResponse.ok(
            productService.createCategory(user.getCompany().getId(), name, description, parentId)
        ));
    }
}
