package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByCodeAndCompanyId(String code, Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);

    @Query("""
        SELECT p FROM Product p
        WHERE p.company.id = :companyId
          AND p.active = true
          AND (:search = '' OR LOWER(p.name) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(p.code) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(p.modelName) LIKE LOWER(CONCAT('%', :search, '%')))
          AND (:categoryId IS NULL OR p.category.id = :categoryId)
        ORDER BY p.name
        """)
    Page<Product> findByFilters(
        @Param("companyId") Long companyId,
        @Param("search") String search,
        @Param("categoryId") Long categoryId,
        Pageable pageable
    );
}
