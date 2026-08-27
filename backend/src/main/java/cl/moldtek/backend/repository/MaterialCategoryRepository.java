package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.MaterialCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MaterialCategoryRepository extends JpaRepository<MaterialCategory, Long> {
    List<MaterialCategory> findByCompanyIdAndActiveTrueOrderByName(Long companyId);
    List<MaterialCategory> findByCompanyIdAndParentIsNullAndActiveTrueOrderByName(Long companyId);
    boolean existsByNameAndCompanyId(String name, Long companyId);
}
