package cl.moldtek.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products",
    uniqueConstraints = @UniqueConstraint(columnNames = {"code", "company_id"}))
@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String code;

    @Column(nullable = false)
    private String name;

    @Column(length = 2000)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private ProductCategory category;

    private String subcategory; // enchapada, terciado, prepintada, etc.
    private String modelName;  // Milano, Capri, Capri II, Capri III, etc.

    // Dimensions (mm)
    private Integer heightMin;
    private Integer heightMax;
    private Integer widthMin;
    private Integer widthMax;
    private Integer thicknessStandard;
    private Integer thicknessSpecial;

    // Product characteristics
    private String fillType;         // HONEY_COMB, POLIESTIRENO, SOLIDO, NA
    private String finishType;       // ENCHAPADO, PREPINTADO, MELAMÍNICO, NA
    private String veneerOptions;    // comma-separated: CEDRO,MARA,EUCALIPTUS,WENGUE
    private String colorOptions;     // for prepintadas

    // Regulatory
    private String norm;             // NCH354, NCH354/723, NCH935/2
    private String warranty;         // "1 año"
    private String certification;    // DICTUC, etc.

    // Commercial
    @Column(precision = 12, scale = 2)
    private BigDecimal price = BigDecimal.ZERO;

    private String imageUrl;
    private String dataSheetUrl;

    @Column(nullable = false)
    private boolean active = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id", nullable = false)
    private Company company;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}
