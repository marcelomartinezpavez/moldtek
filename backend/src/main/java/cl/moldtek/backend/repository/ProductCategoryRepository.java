package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    List<ProductCategory> findByCompanyIdAndActiveTrueOrderByName(Long companyId);
    List<ProductCategory> findByCompanyIdAndParentIsNullAndActiveTrueOrderByName(Long companyId);
}
