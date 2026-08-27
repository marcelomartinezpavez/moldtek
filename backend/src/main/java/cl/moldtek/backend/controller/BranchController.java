package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.branch.BranchDto;
import cl.moldtek.backend.dto.branch.CreateBranchRequest;
import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.BranchService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/branches")
@RequiredArgsConstructor
public class BranchController {

    private final BranchService branchService;

    @GetMapping
    ResponseEntity<ApiResponse<List<BranchDto>>> list(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(branchService.findByCompany(user.getCompany().getId())));
    }

    @GetMapping("/{id}")
    ResponseEntity<ApiResponse<BranchDto>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(branchService.findById(id)));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<BranchDto>> create(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody CreateBranchRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Sucursal creada exitosamente",
            branchService.create(user.getCompany().getId(), request)
        ));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<BranchDto>> update(
        @PathVariable Long id,
        @Valid @RequestBody CreateBranchRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(branchService.update(id, request)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<Void>> deactivate(@PathVariable Long id) {
        branchService.deactivate(id);
        return ResponseEntity.ok(ApiResponse.ok("Sucursal desactivada", null));
    }
}
