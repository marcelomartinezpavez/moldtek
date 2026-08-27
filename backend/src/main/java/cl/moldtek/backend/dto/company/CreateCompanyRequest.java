package cl.moldtek.backend.dto.company;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateCompanyRequest {
    @NotBlank
    private String name;
    private String rut;
    private String address;
    private String phone;
    private String email;
    private String website;
}
