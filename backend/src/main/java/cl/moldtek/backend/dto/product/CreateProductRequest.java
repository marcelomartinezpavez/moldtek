package cl.moldtek.backend.dto.product;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreateProductRequest {
    @NotBlank
    private String code;

    @NotBlank
    private String name;

    private String description;
    private Long categoryId;
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
}
