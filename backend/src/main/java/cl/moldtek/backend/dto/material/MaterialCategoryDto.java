package cl.moldtek.backend.dto.material;

import lombok.Data;

@Data
public class MaterialCategoryDto {
    private Long id;
    private String name;
    private String description;
    private Long parentId;
    private String parentName;
    private boolean active;
}
