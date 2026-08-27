package cl.moldtek.backend.dto.product;

import lombok.Data;

@Data
public class ProductCategoryDto {
    private Long id;
    private String name;
    private String description;
    private String icon;
    private Long parentId;
    private String parentName;
    private boolean active;
}
