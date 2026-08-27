package cl.moldtek.backend.dto.template;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class TemplateMaterialDto {
    private Long id;

    @NotNull
    private Long materialId;

    private String materialCode;
    private String materialName;
    private String materialUnit;

    @NotNull
    @Positive
    private BigDecimal quantity;

    private String unit;
    private String notes;
    private Integer orderIndex;
}
