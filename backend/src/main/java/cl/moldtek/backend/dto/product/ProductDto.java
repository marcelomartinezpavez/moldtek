package cl.moldtek.backend.dto.product;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class ProductDto {
    private Long id;
    private String code;
    private String name;
    private String description;
    private Long categoryId;
    private String categoryName;
    private String subcategory;
    private String modelName;
    private Integer heightMin;
    private Integer heightMax;
    private Integer widthMin;
    private Integer widthMax;
    private Integer thicknessStandard;
    private Integer thicknessSpecial;
    private String fillType;
    private String finishType;
    private String veneerOptions;
    private String colorOptions;
    private String norm;
    private String warranty;
    private String certification;
    private BigDecimal price;
    private String imageUrl;
    private String dataSheetUrl;
    private boolean active;
    private LocalDateTime createdAt;
}
