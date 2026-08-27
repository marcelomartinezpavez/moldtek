package cl.moldtek.backend.controller;

import cl.moldtek.backend.dto.common.ApiResponse;
import cl.moldtek.backend.dto.inventory.InventoryDto;
import cl.moldtek.backend.dto.inventory.StockTransferRequest;
import cl.moldtek.backend.model.StockTransfer;
import cl.moldtek.backend.model.User;
import cl.moldtek.backend.service.InventoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping("/branch/{branchId}")
    ResponseEntity<ApiResponse<List<InventoryDto>>> listByBranch(
        @PathVariable Long branchId,
        @RequestParam(required = false) String search
    ) {
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.findByBranch(branchId, search)));
    }

    @GetMapping("/low-stock")
    ResponseEntity<ApiResponse<List<InventoryDto>>> lowStock(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.findLowStock(user.getCompany().getId())));
    }

    @PutMapping("/branch/{branchId}/material/{materialId}")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER','WAREHOUSE')")
    ResponseEntity<ApiResponse<InventoryDto>> updateStock(
        @PathVariable Long branchId,
        @PathVariable Long materialId,
        @RequestBody Map<String, Object> body
    ) {
        BigDecimal quantity = body.get("quantity") != null ? new BigDecimal(body.get("quantity").toString()) : null;
        BigDecimal minimumStock = body.get("minimumStock") != null ? new BigDecimal(body.get("minimumStock").toString()) : null;
        return ResponseEntity.ok(ApiResponse.ok(inventoryService.updateStock(branchId, materialId, quantity, minimumStock)));
    }

    @PostMapping("/transfers")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER','WAREHOUSE')")
    ResponseEntity<ApiResponse<StockTransfer>> requestTransfer(
        @AuthenticationPrincipal User user,
        @Valid @RequestBody StockTransferRequest request
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Transferencia solicitada",
            inventoryService.requestTransfer(user.getId(), request)
        ));
    }

    @PostMapping("/transfers/{id}/approve")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<StockTransfer>> approveTransfer(
        @PathVariable Long id,
        @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Transferencia aprobada y completada",
            inventoryService.approveTransfer(id, user.getId())
        ));
    }

    @PostMapping("/transfers/{id}/reject")
    @PreAuthorize("hasAnyRole('ADMIN','MANAGER')")
    ResponseEntity<ApiResponse<StockTransfer>> rejectTransfer(
        @PathVariable Long id,
        @AuthenticationPrincipal User user
    ) {
        return ResponseEntity.ok(ApiResponse.ok(
            "Transferencia rechazada",
            inventoryService.rejectTransfer(id, user.getId())
        ));
    }
}
