package cl.moldtek.backend.dto.template;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class TemplateDto {
    private Long id;
    private String code;
    private String name;
    private String description;
    private Long productId;
    private String productName;
    private String productCode;
    private String imageUrl;
    private String programFileUrl;
    private String programFileName;
    private boolean active;
    private String createdByName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<TemplateMaterialDto> materials;
}
