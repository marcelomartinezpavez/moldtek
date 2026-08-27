package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.inventory.InventoryDto;
import cl.moldtek.backend.dto.inventory.StockTransferRequest;
import cl.moldtek.backend.model.*;
import cl.moldtek.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final BranchInventoryRepository inventoryRepository;
    private final StockTransferRepository transferRepository;
    private final BranchRepository branchRepository;
    private final MaterialRepository materialRepository;
    private final UserRepository userRepository;

    public List<InventoryDto> findByBranch(Long branchId, String search) {
        return inventoryRepository.findByBranchIdWithSearch(branchId, search)
            .stream().map(this::toDto).collect(Collectors.toList());
    }

    public List<InventoryDto> findLowStock(Long companyId) {
        return inventoryRepository.findLowStockByCompany(companyId)
            .stream().map(this::toDto).collect(Collectors.toList());
    }

    @Transactional
    public InventoryDto updateStock(Long branchId, Long materialId, java.math.BigDecimal quantity, java.math.BigDecimal minimumStock) {
        BranchInventory inv = inventoryRepository.findByBranchIdAndMaterialId(branchId, materialId)
            .orElseGet(() -> {
                Branch branch = branchRepository.findById(branchId)
                    .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
                Material material = materialRepository.findById(materialId)
                    .orElseThrow(() -> new RuntimeException("Material no encontrado"));
                BranchInventory newInv = new BranchInventory();
                newInv.setBranch(branch);
                newInv.setMaterial(material);
                return newInv;
            });

        if (quantity != null) inv.setQuantity(quantity);
        if (minimumStock != null) inv.setMinimumStock(minimumStock);
        return toDto(inventoryRepository.save(inv));
    }

    @Transactional
    public StockTransfer requestTransfer(Long requestingUserId, StockTransferRequest request) {
        Branch from = branchRepository.findById(request.getFromBranchId())
            .orElseThrow(() -> new RuntimeException("Sucursal origen no encontrada"));
        Branch to = branchRepository.findById(request.getToBranchId())
            .orElseThrow(() -> new RuntimeException("Sucursal destino no encontrada"));
        Material material = materialRepository.findById(request.getMaterialId())
            .orElseThrow(() -> new RuntimeException("Material no encontrado"));

        BranchInventory sourceInv = inventoryRepository.findByBranchIdAndMaterialId(from.getId(), material.getId())
            .orElseThrow(() -> new RuntimeException("Material no disponible en sucursal origen"));

        if (sourceInv.getQuantity().compareTo(request.getQuantity()) < 0) {
            throw new RuntimeException("Stock insuficiente. Disponible: " + sourceInv.getQuantity());
        }

        StockTransfer transfer = new StockTransfer();
        transfer.setFromBranch(from);
        transfer.setToBranch(to);
        transfer.setMaterial(material);
        transfer.setQuantity(request.getQuantity());
        transfer.setNotes(request.getNotes());
        transfer.setStatus(StockTransfer.Status.PENDING);
        userRepository.findById(requestingUserId).ifPresent(transfer::setRequestedBy);

        return transferRepository.save(transfer);
    }

    @Transactional
    public StockTransfer approveTransfer(Long transferId, Long approvingUserId) {
        StockTransfer transfer = transferRepository.findById(transferId)
            .orElseThrow(() -> new RuntimeException("Transferencia no encontrada"));

        if (transfer.getStatus() != StockTransfer.Status.PENDING) {
            throw new RuntimeException("La transferencia no está en estado PENDIENTE");
        }

        // Deduct from source
        BranchInventory sourceInv = inventoryRepository
            .findByBranchIdAndMaterialId(transfer.getFromBranch().getId(), transfer.getMaterial().getId())
            .orElseThrow(() -> new RuntimeException("Stock origen no encontrado"));
        sourceInv.setQuantity(sourceInv.getQuantity().subtract(transfer.getQuantity()));
        inventoryRepository.save(sourceInv);

        // Add to destination
        BranchInventory destInv = inventoryRepository
            .findByBranchIdAndMaterialId(transfer.getToBranch().getId(), transfer.getMaterial().getId())
            .orElseGet(() -> {
                BranchInventory inv = new BranchInventory();
                inv.setBranch(transfer.getToBranch());
                inv.setMaterial(transfer.getMaterial());
                return inv;
            });
        destInv.setQuantity(destInv.getQuantity().add(transfer.getQuantity()));
        inventoryRepository.save(destInv);

        transfer.setStatus(StockTransfer.Status.COMPLETED);
        transfer.setApprovedAt(LocalDateTime.now());
        transfer.setCompletedAt(LocalDateTime.now());
        userRepository.findById(approvingUserId).ifPresent(transfer::setApprovedBy);

        return transferRepository.save(transfer);
    }

    @Transactional
    public StockTransfer rejectTransfer(Long transferId, Long userId) {
        StockTransfer transfer = transferRepository.findById(transferId)
            .orElseThrow(() -> new RuntimeException("Transferencia no encontrada"));
        transfer.setStatus(StockTransfer.Status.REJECTED);
        userRepository.findById(userId).ifPresent(transfer::setApprovedBy);
        return transferRepository.save(transfer);
    }

    public InventoryDto toDto(BranchInventory inv) {
        InventoryDto dto = new InventoryDto();
        dto.setId(inv.getId());
        dto.setQuantity(inv.getQuantity());
        dto.setMinimumStock(inv.getMinimumStock());
        dto.setBelowMinimum(inv.isBelowMinimum());
        dto.setUpdatedAt(inv.getUpdatedAt());
        if (inv.getBranch() != null) {
            dto.setBranchId(inv.getBranch().getId());
            dto.setBranchName(inv.getBranch().getName());
        }
        if (inv.getMaterial() != null) {
            dto.setMaterialId(inv.getMaterial().getId());
            dto.setMaterialCode(inv.getMaterial().getCode());
            dto.setMaterialName(inv.getMaterial().getName());
            dto.setMaterialUnit(inv.getMaterial().getUnitOfMeasure());
        }
        return dto;
    }
}
