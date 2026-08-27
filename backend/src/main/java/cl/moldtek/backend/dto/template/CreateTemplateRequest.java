package cl.moldtek.backend.dto.template;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.List;

@Data
public class CreateTemplateRequest {
    private String code; // if null, auto-generated

    @NotBlank
    private String name;

    private String description;
    private Long productId;
    private List<TemplateMaterialDto> materials;
}
