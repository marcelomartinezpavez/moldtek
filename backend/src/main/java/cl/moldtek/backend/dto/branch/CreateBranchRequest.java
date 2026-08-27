package cl.moldtek.backend.dto.branch;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateBranchRequest {
    @NotBlank
    private String name;
    private String address;
    private String phone;
    private String email;
    private String description;
}
