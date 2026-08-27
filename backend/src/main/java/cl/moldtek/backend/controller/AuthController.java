package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.auth.ChangePasswordRequest;
import cl.moldtek.backend.dto.auth.LoginRequest;
import cl.moldtek.backend.dto.auth.LoginResponse;
import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    ResponseEntity<ApiResponse<LoginResponse>> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(ApiResponse.ok(authService.login(request)));
    }

    @PostMapping("/change-password")
    ResponseEntity<ApiResponse<Void>> changePassword(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody ChangePasswordRequest request
    ) {
        authService.changePassword(user.getId(), request);
        return ResponseEntity.ok(ApiResponse.ok("Contraseña actualizada", null));
    }

    @GetMapping("/me")
    ResponseEntity<ApiResponse<Object>> me(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(user));
    }
}
