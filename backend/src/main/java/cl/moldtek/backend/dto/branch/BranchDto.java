package cl.moldtek.backend.dto.branch;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BranchDto {
    private Long id;
    private Long companyId;
    private String companyName;
    private String name;
    private String address;
    private String phone;
    private String email;
    private String description;
    private boolean active;
    private LocalDateTime createdAt;
}
