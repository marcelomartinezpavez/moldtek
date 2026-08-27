package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
    Optional<Company> findByRut(String rut);
    boolean existsByRut(String rut);
}
