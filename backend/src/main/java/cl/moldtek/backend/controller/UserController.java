package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.user.CreateUserRequest;
import cl.moldtek.backend.dto.user.UpdateUserRequest;
import cl.moldtek.backend.dto.user.UserDto;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<List<UserDto>>> list(@AuthenticationPrincipal User currentUser) {
        return ResponseEntity.ok(ApiResponse.ok(userService.findByCompany(currentUser.getCompany().getId())));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<UserDto>> get(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(userService.findById(id)));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<UserDto>> create(
        @AuthenticationPrincipal User currentUser,
        @Valid @RequestBody CreateUserRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Usuario creado exitosamente",
            userService.create(currentUser.getCompany().getId(), request)
        ));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<UserDto>> update(
        @PathVariable Long id,
        @RequestBody UpdateUserRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(userService.update(id, request)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    ResponseEntity<ApiResponse<Void>> deactivate(@PathVariable Long id) {
        userService.deactivate(id);
        return ResponseEntity.ok(ApiResponse.ok("Usuario desactivado", null));
    }
}
