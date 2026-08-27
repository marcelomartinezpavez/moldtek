package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.material.CreateMaterialRequest;
import cl.moldtek.backend.dto.material.MaterialCategoryDto;
import cl.moldtek.backend.dto.material.MaterialDto;
import cl.moldtek.backend.model.Company;
import cl.moldtek.backend.model.Material;
import cl.moldtek.backend.model.MaterialCategory;
import cl.moldtek.backend.repository.CompanyRepository;
import cl.moldtek.backend.repository.MaterialCategoryRepository;
import cl.moldtek.backend.repository.MaterialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MaterialService {

    private final MaterialRepository materialRepository;
    private final MaterialCategoryRepository categoryRepository;
    private final CompanyRepository companyRepository;

    public PageResponse<MaterialDto> findAll(Long companyId, String search, Long categoryId, int page, int size) {
        Page<Material> result = materialRepository.findByFilters(
            companyId,
            search == null || search.isBlank() ? "" : search,
            categoryId,
            PageRequest.of(page, size)
        );
        return PageResponse.of(result.map(this::toDto));
    }

    public List<MaterialDto> findAllActive(Long companyId) {
        return materialRepository.findByCompanyIdAndActiveTrueOrderByName(companyId)
            .stream().map(this::toDto).collect(Collectors.toList());
    }

    public MaterialDto findById(Long id) {
        return materialRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new RuntimeException("Material no encontrado"));
    }

    @Transactional
    public MaterialDto create(Long companyId, CreateMaterialRequest request) {
        if (materialRepository.existsByCodeAndCompanyId(request.getCode(), companyId)) {
            throw new RuntimeException("El código '" + request.getCode() + "' ya existe");
        }

        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        Material material = new Material();
        material.setCompany(company);
        material.setCode(request.getCode().toUpperCase().trim());
        material.setName(request.getName());
        material.setDescription(request.getDescription());
        material.setUnitOfMeasure(request.getUnitOfMeasure());
        material.setUnitPrice(request.getUnitPrice());
        material.setSupplier(request.getSupplier());
        material.setNotes(request.getNotes());

        if (request.getCategoryId() != null) {
            categoryRepository.findById(request.getCategoryId()).ifPresent(material::setCategory);
        }

        return toDto(materialRepository.save(material));
    }

    @Transactional
    public MaterialDto update(Long id, CreateMaterialRequest request) {
        Material material = materialRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Material no encontrado"));

        String newCode = request.getCode().toUpperCase().trim();
        if (!newCode.equals(material.getCode())) {
            if (materialRepository.existsByCodeAndCompanyId(newCode, material.getCompany().getId())) {
                throw new RuntimeException("El código '" + newCode + "' ya existe");
            }
            material.setCode(newCode);
        }

        material.setName(request.getName());
        material.setDescription(request.getDescription());
        material.setUnitOfMeasure(request.getUnitOfMeasure());
        material.setUnitPrice(request.getUnitPrice());
        material.setSupplier(request.getSupplier());
        material.setNotes(request.getNotes());

        if (request.getCategoryId() != null) {
            categoryRepository.findById(request.getCategoryId()).ifPresent(material::setCategory);
        } else {
            material.setCategory(null);
        }

        return toDto(materialRepository.save(material));
    }

    @Transactional
    public void delete(Long id) {
        Material material = materialRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Material no encontrado"));
        material.setActive(false);
        materialRepository.save(material);
    }

    // Categories
    public List<MaterialCategoryDto> findCategories(Long companyId) {
        return categoryRepository.findByCompanyIdAndActiveTrueOrderByName(companyId)
            .stream().map(this::toCategoryDto).collect(Collectors.toList());
    }

    @Transactional
    public MaterialCategoryDto createCategory(Long companyId, String name, String description, Long parentId) {
        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        MaterialCategory cat = new MaterialCategory();
        cat.setCompany(company);
        cat.setName(name);
        cat.setDescription(description);
        if (parentId != null) {
            categoryRepository.findById(parentId).ifPresent(cat::setParent);
        }
        return toCategoryDto(categoryRepository.save(cat));
    }

    @Transactional
    public void deleteCategory(Long id) {
        MaterialCategory cat = categoryRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
        cat.setActive(false);
        categoryRepository.save(cat);
    }

    public MaterialDto toDto(Material m) {
        MaterialDto dto = new MaterialDto();
        dto.setId(m.getId());
        dto.setCode(m.getCode());
        dto.setName(m.getName());
        dto.setDescription(m.getDescription());
        dto.setUnitOfMeasure(m.getUnitOfMeasure());
        dto.setUnitPrice(m.getUnitPrice());
        dto.setSupplier(m.getSupplier());
        dto.setNotes(m.getNotes());
        dto.setImageUrl(m.getImageUrl());
        dto.setActive(m.isActive());
        dto.setCreatedAt(m.getCreatedAt());
        dto.setUpdatedAt(m.getUpdatedAt());
        if (m.getCategory() != null) {
            dto.setCategoryId(m.getCategory().getId());
            dto.setCategoryName(m.getCategory().getName());
        }
        return dto;
    }

    private MaterialCategoryDto toCategoryDto(MaterialCategory c) {
        MaterialCategoryDto dto = new MaterialCategoryDto();
        dto.setId(c.getId());
        dto.setName(c.getName());
        dto.setDescription(c.getDescription());
        dto.setActive(c.isActive());
        if (c.getParent() != null) {
            dto.setParentId(c.getParent().getId());
            dto.setParentName(c.getParent().getName());
        }
        return dto;
    }
}
