package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.BranchInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BranchInventoryRepository extends JpaRepository<BranchInventory, Long> {

    Optional<BranchInventory> findByBranchIdAndMaterialId(Long branchId, Long materialId);

    List<BranchInventory> findByBranchId(Long branchId);

    @Query("""
        SELECT bi FROM BranchInventory bi
        WHERE bi.branch.id = :branchId
          AND bi.material.active = true
          AND (:search IS NULL OR LOWER(bi.material.name) LIKE LOWER(CONCAT('%', :search, '%')))
        ORDER BY bi.material.name
        """)
    List<BranchInventory> findByBranchIdWithSearch(@Param("branchId") Long branchId, @Param("search") String search);

    @Query("SELECT bi FROM BranchInventory bi WHERE bi.branch.id = :branchId AND bi.quantity < bi.minimumStock")
    List<BranchInventory> findLowStockByBranch(@Param("branchId") Long branchId);

    @Query("SELECT bi FROM BranchInventory bi WHERE bi.branch.company.id = :companyId AND bi.quantity < bi.minimumStock")
    List<BranchInventory> findLowStockByCompany(@Param("companyId") Long companyId);
}
