package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.StockTransfer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockTransferRepository extends JpaRepository<StockTransfer, Long> {

    List<StockTransfer> findByFromBranchIdOrToBranchIdOrderByCreatedAtDesc(Long fromBranchId, Long toBranchId);

    @Query("SELECT st FROM StockTransfer st WHERE st.fromBranch.company.id = :companyId ORDER BY st.createdAt DESC")
    List<StockTransfer> findByCompanyId(@Param("companyId") Long companyId);

    List<StockTransfer> findByStatusAndFromBranchCompanyIdOrderByCreatedAtDesc(
        StockTransfer.Status status, Long companyId);
}
