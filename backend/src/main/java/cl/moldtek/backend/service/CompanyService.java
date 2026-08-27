package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.company.CompanyDto;
import cl.moldtek.backend.dto.company.CreateCompanyRequest;
import cl.moldtek.backend.model.Company;
import cl.moldtek.backend.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository companyRepository;

    public List<CompanyDto> findAll() {
        return companyRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
    }

    public CompanyDto findById(Long id) {
        return companyRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));
    }

    @Transactional
    public CompanyDto create(CreateCompanyRequest request) {
        if (request.getRut() != null && companyRepository.existsByRut(request.getRut())) {
            throw new RuntimeException("El RUT ya está registrado");
        }
        Company company = new Company();
        company.setName(request.getName());
        company.setRut(request.getRut());
        company.setAddress(request.getAddress());
        company.setPhone(request.getPhone());
        company.setEmail(request.getEmail());
        company.setWebsite(request.getWebsite());
        return toDto(companyRepository.save(company));
    }

    @Transactional
    public CompanyDto update(Long id, CreateCompanyRequest request) {
        Company company = companyRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));
        company.setName(request.getName());
        if (request.getRut() != null) company.setRut(request.getRut());
        if (request.getAddress() != null) company.setAddress(request.getAddress());
        if (request.getPhone() != null) company.setPhone(request.getPhone());
        if (request.getEmail() != null) company.setEmail(request.getEmail());
        if (request.getWebsite() != null) company.setWebsite(request.getWebsite());
        return toDto(companyRepository.save(company));
    }

    public CompanyDto toDto(Company c) {
        CompanyDto dto = new CompanyDto();
        dto.setId(c.getId());
        dto.setName(c.getName());
        dto.setRut(c.getRut());
        dto.setAddress(c.getAddress());
        dto.setPhone(c.getPhone());
        dto.setEmail(c.getEmail());
        dto.setWebsite(c.getWebsite());
        dto.setLogoUrl(c.getLogoUrl());
        dto.setActive(c.isActive());
        dto.setBranchCount(c.getBranches().size());
        dto.setCreatedAt(c.getCreatedAt());
        return dto;
    }
}
