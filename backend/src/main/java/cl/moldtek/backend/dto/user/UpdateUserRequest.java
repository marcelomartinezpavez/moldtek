package cl.moldtek.backend.dto.user;

import jakarta.validation.constraints.Email;
import lombok.Data;

import java.util.Set;

@Data
public class UpdateUserRequest {
    @Email
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private Long branchId;
    private Boolean active;
    private Set<String> roles;
}
