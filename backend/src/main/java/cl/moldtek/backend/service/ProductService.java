package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.common.PageResponse;
import cl.moldtek.backend.dto.product.CreateProductRequest;
import cl.moldtek.backend.dto.product.ProductCategoryDto;
import cl.moldtek.backend.dto.product.ProductDto;
import cl.moldtek.backend.model.Company;
import cl.moldtek.backend.model.Product;
import cl.moldtek.backend.model.ProductCategory;
import cl.moldtek.backend.repository.CompanyRepository;
import cl.moldtek.backend.repository.ProductCategoryRepository;
import cl.moldtek.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductCategoryRepository categoryRepository;
    private final CompanyRepository companyRepository;

    public PageResponse<ProductDto> findAll(Long companyId, String search, Long categoryId, int page, int size) {
        Page<Product> result = productRepository.findByFilters(
            companyId,
            search == null || search.isBlank() ? "" : search,
            categoryId,
            PageRequest.of(page, size)
        );
        return PageResponse.of(result.map(this::toDto));
    }

    public ProductDto findById(Long id) {
        return productRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    @Transactional
    public ProductDto create(Long companyId, CreateProductRequest request) {
        if (productRepository.existsByCodeAndCompanyId(request.getCode(), companyId)) {
            throw new RuntimeException("El código '" + request.getCode() + "' ya existe");
        }

        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        Product product = new Product();
        product.setCompany(company);
        mapFromRequest(product, request);
        return toDto(productRepository.save(product));
    }

    @Transactional
    public ProductDto update(Long id, CreateProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));

        String newCode = request.getCode().toUpperCase().trim();
        if (!newCode.equals(product.getCode())) {
            if (productRepository.existsByCodeAndCompanyId(newCode, product.getCompany().getId())) {
                throw new RuntimeException("El código '" + newCode + "' ya existe");
            }
        }
        mapFromRequest(product, request);
        return toDto(productRepository.save(product));
    }

    @Transactional
    public void delete(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        product.setActive(false);
        productRepository.save(product);
    }

    public List<ProductCategoryDto> findCategories(Long companyId) {
        return categoryRepository.findByCompanyIdAndActiveTrueOrderByName(companyId)
            .stream().map(this::toCategoryDto).collect(Collectors.toList());
    }

    @Transactional
    public ProductCategoryDto createCategory(Long companyId, String name, String description, Long parentId) {
        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        ProductCategory cat = new ProductCategory();
        cat.setCompany(company);
        cat.setName(name);
        cat.setDescription(description);
        if (parentId != null) {
            categoryRepository.findById(parentId).ifPresent(cat::setParent);
        }
        return toCategoryDto(categoryRepository.save(cat));
    }

    private void mapFromRequest(Product p, CreateProductRequest r) {
        p.setCode(r.getCode().toUpperCase().trim());
        p.setName(r.getName());
        p.setDescription(r.getDescription());
        p.setSubcategory(r.getSubcategory());
        p.setModelName(r.getModelName());
        p.setHeightMin(r.getHeightMin());
        p.setHeightMax(r.getHeightMax());
        p.setWidthMin(r.getWidthMin());
        p.setWidthMax(r.getWidthMax());
        p.setThicknessStandard(r.getThicknessStandard());
        p.setThicknessSpecial(r.getThicknessSpecial());
        p.setFillType(r.getFillType());
        p.setFinishType(r.getFinishType());
        p.setVeneerOptions(r.getVeneerOptions());
        p.setColorOptions(r.getColorOptions());
        p.setNorm(r.getNorm());
        p.setWarranty(r.getWarranty());
        p.setCertification(r.getCertification());
        p.setPrice(r.getPrice());
        if (r.getCategoryId() != null) {
            categoryRepository.findById(r.getCategoryId()).ifPresent(p::setCategory);
        }
    }

    public ProductDto toDto(Product p) {
        ProductDto dto = new ProductDto();
        dto.setId(p.getId());
        dto.setCode(p.getCode());
        dto.setName(p.getName());
        dto.setDescription(p.getDescription());
        dto.setSubcategory(p.getSubcategory());
        dto.setModelName(p.getModelName());
        dto.setHeightMin(p.getHeightMin());
        dto.setHeightMax(p.getHeightMax());
        dto.setWidthMin(p.getWidthMin());
        dto.setWidthMax(p.getWidthMax());
        dto.setThicknessStandard(p.getThicknessStandard());
        dto.setThicknessSpecial(p.getThicknessSpecial());
        dto.setFillType(p.getFillType());
        dto.setFinishType(p.getFinishType());
        dto.setVeneerOptions(p.getVeneerOptions());
        dto.setColorOptions(p.getColorOptions());
        dto.setNorm(p.getNorm());
        dto.setWarranty(p.getWarranty());
        dto.setCertification(p.getCertification());
        dto.setPrice(p.getPrice());
        dto.setImageUrl(p.getImageUrl());
        dto.setDataSheetUrl(p.getDataSheetUrl());
        dto.setActive(p.isActive());
        dto.setCreatedAt(p.getCreatedAt());
        if (p.getCategory() != null) {
            dto.setCategoryId(p.getCategory().getId());
            dto.setCategoryName(p.getCategory().getName());
        }
        return dto;
    }

    private ProductCategoryDto toCategoryDto(ProductCategory c) {
        ProductCategoryDto dto = new ProductCategoryDto();
        dto.setId(c.getId());
        dto.setName(c.getName());
        dto.setDescription(c.getDescription());
        dto.setIcon(c.getIcon());
        dto.setActive(c.isActive());
        if (c.getParent() != null) {
            dto.setParentId(c.getParent().getId());
            dto.setParentName(c.getParent().getName());
        }
        return dto;
    }
}
