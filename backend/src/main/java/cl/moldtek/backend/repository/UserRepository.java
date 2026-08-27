package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findByCompanyId(Long companyId);
    List<User> findByCompanyIdAndActiveTrue(Long companyId);

    @Query("SELECT u FROM User u WHERE u.company.id = :companyId AND (u.branch.id = :branchId OR u.branch IS NULL)")
    List<User> findByCompanyIdAndBranchIdOrNoBranch(Long companyId, Long branchId);
}
