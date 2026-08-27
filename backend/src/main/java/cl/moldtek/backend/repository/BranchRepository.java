package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BranchRepository extends JpaRepository<Branch, Long> {
    List<Branch> findByCompanyIdAndActiveTrue(Long companyId);
    List<Branch> findByCompanyId(Long companyId);
}
