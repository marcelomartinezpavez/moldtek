package cl.moldtek.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "branch_inventory",
    uniqueConstraints = @UniqueConstraint(columnNames = {"branch_id", "material_id"}))
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class BranchInventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id", nullable = false)
    private Branch branch;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "material_id", nullable = false)
    private Material material;

    @Column(precision = 12, scale = 4, nullable = false)
    private BigDecimal quantity = BigDecimal.ZERO;

    @Column(precision = 12, scale = 4, nullable = false)
    private BigDecimal minimumStock = BigDecimal.ZERO;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    public boolean isBelowMinimum() {
        return quantity.compareTo(minimumStock) < 0;
    }
}
