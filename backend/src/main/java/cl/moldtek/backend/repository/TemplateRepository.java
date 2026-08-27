package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.Template;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface TemplateRepository extends JpaRepository<Template, Long> {

    Optional<Template> findByCodeAndCompanyId(String code, Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);

    @Query("""
        SELECT t FROM Template t
        WHERE t.company.id = :companyId
          AND t.active = true
          AND (:search = '' OR LOWER(t.name) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(t.code) LIKE LOWER(CONCAT('%', :search, '%')))
          AND (:productId IS NULL OR t.product.id = :productId)
        ORDER BY t.name
        """)
    Page<Template> findByFilters(
        @Param("companyId") Long companyId,
        @Param("search") String search,
        @Param("productId") Long productId,
        Pageable pageable
    );

    @Query("SELECT COUNT(t) FROM Template t WHERE t.company.id = :companyId AND t.active = true")
    long countActiveByCompany(@Param("companyId") Long companyId);
}
