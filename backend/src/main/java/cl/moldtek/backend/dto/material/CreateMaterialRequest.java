package cl.moldtek.backend.dto.material;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class CreateMaterialRequest {
    @NotBlank
    private String code;

    @NotBlank
    private String name;

    private String description;
    private Long categoryId;

    @NotBlank
    private String unitOfMeasure;

    @NotNull
    @PositiveOrZero
    private BigDecimal unitPrice;

    private String supplier;
    private String notes;
}
