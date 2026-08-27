package cl.moldtek.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "template_materials")
@Data
@NoArgsConstructor
public class TemplateMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "template_id", nullable = false)
    private Template template;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "material_id", nullable = false)
    private Material material;

    @Column(precision = 12, scale = 4, nullable = false)
    private BigDecimal quantity;

    private String unit; // overrides material unit if specified

    @Column(length = 500)
    private String notes;

    private Integer orderIndex = 0;
}
