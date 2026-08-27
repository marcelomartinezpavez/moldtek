package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.template.CreateTemplateRequest;
import cl.moldtek.backend.dto.template.TemplateDto;
import cl.moldtek.backend.dto.template.TemplateMaterialDto;
import cl.moldtek.backend.model.*;
import cl.moldtek.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TemplateService {

    private final TemplateRepository templateRepository;
    private final TemplateMaterialRepository templateMaterialRepository;
    private final MaterialRepository materialRepository;
    private final ProductRepository productRepository;
    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;

    public PageResponse<TemplateDto> findAll(Long companyId, String search, Long productId, int page, int size) {
        Page<Template> result = templateRepository.findByFilters(
            companyId,
            search == null || search.isBlank() ? "" : search,
            productId,
            PageRequest.of(page, size)
        );
        return PageResponse.of(result.map(t -> toDto(t, false)));
    }

    public TemplateDto findById(Long id) {
        Template template = templateRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Plantilla no encontrada"));
        return toDto(template, true);
    }

    @Transactional
    public TemplateDto create(Long companyId, Long userId, CreateTemplateRequest request) {
        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        String code = resolveCode(request.getCode(), companyId);

        Template template = new Template();
        template.setCompany(company);
        template.setCode(code);
        template.setName(request.getName());
        template.setDescription(request.getDescription());

        if (request.getProductId() != null) {
            productRepository.findById(request.getProductId()).ifPresent(template::setProduct);
        }

        userRepository.findById(userId).ifPresent(template::setCreatedBy);

        Template saved = templateRepository.save(template);

        if (request.getMaterials() != null) {
            saveMaterials(saved, request.getMaterials());
        }

        return toDto(templateRepository.findById(saved.getId()).orElseThrow(), true);
    }

    @Transactional
    public TemplateDto update(Long id, CreateTemplateRequest request) {
        Template template = templateRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Plantilla no encontrada"));

        template.setName(request.getName());
        if (request.getDescription() != null) template.setDescription(request.getDescription());

        if (request.getProductId() != null) {
            productRepository.findById(request.getProductId()).ifPresent(template::setProduct);
        }

        templateMaterialRepository.deleteByTemplateId(template.getId());
        template.getMaterials().clear();

        if (request.getMaterials() != null) {
            saveMaterials(template, request.getMaterials());
        }

        return toDto(templateRepository.save(template), true);
    }

    @Transactional
    public void delete(Long id) {
        Template template = templateRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Plantilla no encontrada"));
        template.setActive(false);
        templateRepository.save(template);
    }

    private String resolveCode(String requested, Long companyId) {
        if (requested != null && !requested.isBlank()) {
            String code = requested.toUpperCase().trim();
            if (templateRepository.existsByCodeAndCompanyId(code, companyId)) {
                throw new RuntimeException("El código '" + code + "' ya existe");
            }
            return code;
        }
        // Auto-generate
        long count = templateRepository.countActiveByCompany(companyId);
        String candidate;
        do {
            count++;
            candidate = "TPL-" + String.format("%04d", count);
        } while (templateRepository.existsByCodeAndCompanyId(candidate, companyId));
        return candidate;
    }

    private void saveMaterials(Template template, List<TemplateMaterialDto> dtos) {
        AtomicInteger idx = new AtomicInteger(0);
        List<TemplateMaterial> items = new ArrayList<>();
        for (TemplateMaterialDto dto : dtos) {
            Material material = materialRepository.findById(dto.getMaterialId())
                .orElseThrow(() -> new RuntimeException("Material " + dto.getMaterialId() + " no encontrado"));

            TemplateMaterial tm = new TemplateMaterial();
            tm.setTemplate(template);
            tm.setMaterial(material);
            tm.setQuantity(dto.getQuantity());
            tm.setUnit(dto.getUnit() != null ? dto.getUnit() : material.getUnitOfMeasure());
            tm.setNotes(dto.getNotes());
            tm.setOrderIndex(dto.getOrderIndex() != null ? dto.getOrderIndex() : idx.getAndIncrement());
            items.add(tm);
        }
        templateMaterialRepository.saveAll(items);
    }

    public TemplateDto toDto(Template t, boolean includeMaterials) {
        TemplateDto dto = new TemplateDto();
        dto.setId(t.getId());
        dto.setCode(t.getCode());
        dto.setName(t.getName());
        dto.setDescription(t.getDescription());
        dto.setImageUrl(t.getImageUrl());
        dto.setProgramFileUrl(t.getProgramFileUrl());
        dto.setProgramFileName(t.getProgramFileName());
        dto.setActive(t.isActive());
        dto.setCreatedAt(t.getCreatedAt());
        dto.setUpdatedAt(t.getUpdatedAt());
        if (t.getProduct() != null) {
            dto.setProductId(t.getProduct().getId());
            dto.setProductName(t.getProduct().getName());
            dto.setProductCode(t.getProduct().getCode());
        }
        if (t.getCreatedBy() != null) {
            dto.setCreatedByName(t.getCreatedBy().getFullName());
        }
        if (includeMaterials) {
            List<TemplateMaterial> materials = templateMaterialRepository.findByTemplateIdOrderByOrderIndex(t.getId());
            dto.setMaterials(materials.stream().map(this::toMaterialDto).collect(Collectors.toList()));
        }
        return dto;
    }

    private TemplateMaterialDto toMaterialDto(TemplateMaterial tm) {
        TemplateMaterialDto dto = new TemplateMaterialDto();
        dto.setId(tm.getId());
        dto.setMaterialId(tm.getMaterial().getId());
        dto.setMaterialCode(tm.getMaterial().getCode());
        dto.setMaterialName(tm.getMaterial().getName());
        dto.setMaterialUnit(tm.getMaterial().getUnitOfMeasure());
        dto.setQuantity(tm.getQuantity());
        dto.setUnit(tm.getUnit());
        dto.setNotes(tm.getNotes());
        dto.setOrderIndex(tm.getOrderIndex());
        return dto;
    }
}
