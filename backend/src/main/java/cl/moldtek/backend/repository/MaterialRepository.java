package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.Material;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MaterialRepository extends JpaRepository<Material, Long> {

    Optional<Material> findByCodeAndCompanyId(String code, Long companyId);
    boolean existsByCodeAndCompanyId(String code, Long companyId);

    List<Material> findByCompanyIdAndActiveTrueOrderByName(Long companyId);

    @Query("""
        SELECT m FROM Material m
        WHERE m.company.id = :companyId
          AND m.active = true
          AND (:search = '' OR LOWER(m.name) LIKE LOWER(CONCAT('%', :search, '%'))
               OR LOWER(m.code) LIKE LOWER(CONCAT('%', :search, '%')))
          AND (:categoryId IS NULL OR m.category.id = :categoryId)
        ORDER BY m.name
        """)
    Page<Material> findByFilters(
        @Param("companyId") Long companyId,
        @Param("search") String search,
        @Param("categoryId") Long categoryId,
        Pageable pageable
    );
}
