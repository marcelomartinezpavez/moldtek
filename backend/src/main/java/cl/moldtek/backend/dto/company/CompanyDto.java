package cl.moldtek.backend.dto.company;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CompanyDto {
    private Long id;
    private String name;
    private String rut;
    private String address;
    private String phone;
    private String email;
    private String website;
    private String logoUrl;
    private boolean active;
    private int branchCount;
    private LocalDateTime createdAt;
}
