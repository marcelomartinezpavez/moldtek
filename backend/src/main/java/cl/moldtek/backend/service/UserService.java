package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.user.CreateUserRequest;
import cl.moldtek.backend.dto.user.UpdateUserRequest;
import cl.moldtek.backend.dto.user.UserDto;
import cl.moldtek.backend.model.Branch;
import cl.moldtek.backend.model.Company;
import cl.moldtek.backend.model.Role;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.repository.BranchRepository;
import cl.moldtek.backend.repository.CompanyRepository;
import cl.moldtek.backend.repository.RoleRepository;
import cl.moldtek.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final BranchRepository branchRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public List<UserDto> findByCompany(Long companyId) {
        return userRepository.findByCompanyId(companyId).stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }

    public UserDto findById(Long id) {
        return userRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    @Transactional
    public UserDto create(Long companyId, CreateUserRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("El nombre de usuario ya existe");
        }
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("El email ya está registrado");
        }

        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        User user = new User();
        user.setCompany(company);
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());

        if (request.getBranchId() != null) {
            Branch branch = branchRepository.findById(request.getBranchId())
                .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
            user.setBranch(branch);
        }

        Set<Role> roles = resolveRoles(request.getRoles());
        user.setRoles(roles);

        return toDto(userRepository.save(user));
    }

    @Transactional
    public UserDto update(Long id, UpdateUserRequest request) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (request.getEmail() != null) user.setEmail(request.getEmail());
        if (request.getFirstName() != null) user.setFirstName(request.getFirstName());
        if (request.getLastName() != null) user.setLastName(request.getLastName());
        if (request.getPhone() != null) user.setPhone(request.getPhone());
        if (request.getActive() != null) user.setActive(request.getActive());

        if (request.getBranchId() != null) {
            Branch branch = branchRepository.findById(request.getBranchId())
                .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
            user.setBranch(branch);
        }

        if (request.getRoles() != null && !request.getRoles().isEmpty()) {
            user.setRoles(resolveRoles(request.getRoles()));
        }

        return toDto(userRepository.save(user));
    }

    @Transactional
    public void deactivate(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        user.setActive(false);
        userRepository.save(user);
    }

    private Set<Role> resolveRoles(Set<String> roleNames) {
        Set<Role> roles = new HashSet<>();
        if (roleNames == null || roleNames.isEmpty()) {
            roleRepository.findByName(Role.VIEWER).ifPresent(roles::add);
        } else {
            for (String name : roleNames) {
                roleRepository.findByName(name).ifPresent(roles::add);
            }
        }
        return roles;
    }

    public UserDto toDto(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setFullName(user.getFullName());
        dto.setPhone(user.getPhone());
        dto.setActive(user.isActive());
        dto.setCreatedAt(user.getCreatedAt());
        if (user.getCompany() != null) {
            dto.setCompanyId(user.getCompany().getId());
            dto.setCompanyName(user.getCompany().getName());
        }
        if (user.getBranch() != null) {
            dto.setBranchId(user.getBranch().getId());
            dto.setBranchName(user.getBranch().getName());
        }
        dto.setRoles(user.getRoles().stream().map(Role::getName).collect(Collectors.toSet()));
        return dto;
    }
}
