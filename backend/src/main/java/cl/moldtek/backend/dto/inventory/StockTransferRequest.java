package cl.moldtek.backend.dto.inventory;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class StockTransferRequest {
    @NotNull
    private Long fromBranchId;

    @NotNull
    private Long toBranchId;

    @NotNull
    private Long materialId;

    @NotNull
    @Positive
    private BigDecimal quantity;

    private String notes;
}
