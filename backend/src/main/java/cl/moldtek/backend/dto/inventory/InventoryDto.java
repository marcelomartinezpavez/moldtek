package cl.moldtek.backend.dto.inventory;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class InventoryDto {
    private Long id;
    private Long branchId;
    private String branchName;
    private Long materialId;
    private String materialCode;
    private String materialName;
    private String materialUnit;
    private BigDecimal quantity;
    private BigDecimal minimumStock;
    private boolean belowMinimum;
    private LocalDateTime updatedAt;
}
