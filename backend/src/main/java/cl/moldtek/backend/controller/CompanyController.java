package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.company.CompanyDto;
import cl.moldtek.backend.dto.company.CreateCompanyRequest;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.CompanyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping
    ResponseEntity<ApiResponse<CompanyDto>> get(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(companyService.findById(user.getCompany().getId())));
    }

    @PutMapping
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<CompanyDto>> update(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody CreateCompanyRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(companyService.update(user.getCompany().getId(), request)));
    }
}
