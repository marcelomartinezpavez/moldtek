package cl.moldtek.backend.dto.user;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class UserDto {
    private Long id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String fullName;
    private String phone;
    private boolean active;
    private Long companyId;
    private String companyName;
    private Long branchId;
    private String branchName;
    private Set<String> roles;
    private LocalDateTime createdAt;
}
