package cl.moldtek.backend.repository;

import cl.moldtek.backend.model.TemplateMaterial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TemplateMaterialRepository extends JpaRepository<TemplateMaterial, Long> {
    List<TemplateMaterial> findByTemplateIdOrderByOrderIndex(Long templateId);
    void deleteByTemplateId(Long templateId);
}
