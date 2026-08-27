package cl.moldtek.backend.dto.material;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class MaterialDto {
    private Long id;
    private String code;
    private String name;
    private String description;
    private Long categoryId;
    private String categoryName;
    private String unitOfMeasure;
    private BigDecimal unitPrice;
    private String supplier;
    private String notes;
    private String imageUrl;
    private boolean active;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
