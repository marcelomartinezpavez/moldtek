package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.auth.ChangePasswordRequest;
import cl.moldtek.backend.dto.auth.LoginRequest;
import cl.moldtek.backend.dto.auth.LoginResponse;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    public LoginResponse login(LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        User user = userRepository.findByUsername(request.getUsername())
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        String token = jwtService.generateToken(user);

        return LoginResponse.builder()
            .token(token)
            .userId(user.getId())
            .username(user.getUsername())
            .email(user.getEmail())
            .fullName(user.getFullName())
            .companyId(user.getCompany() != null ? user.getCompany().getId() : null)
            .companyName(user.getCompany() != null ? user.getCompany().getName() : null)
            .branchId(user.getBranch() != null ? user.getBranch().getId() : null)
            .branchName(user.getBranch() != null ? user.getBranch().getName() : null)
            .roles(user.getRoles().stream().map(r -> r.getName()).collect(Collectors.toList()))
            .build();
    }

    public void changePassword(Long userId, ChangePasswordRequest request) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new RuntimeException("Contraseña actual incorrecta");
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }
}
