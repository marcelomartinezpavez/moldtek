package cl.moldtek.backend.service;

import cl.moldtek.backend.dto.branch.BranchDto;
import cl.moldtek.backend.dto.branch.CreateBranchRequest;
import cl.moldtek.backend.model.Branch;
import cl.moldtek.backend.model.Company;
import cl.moldtek.backend.repository.BranchRepository;
import cl.moldtek.backend.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BranchService {

    private final BranchRepository branchRepository;
    private final CompanyRepository companyRepository;

    public List<BranchDto> findByCompany(Long companyId) {
        return branchRepository.findByCompanyId(companyId).stream()
            .map(this::toDto)
            .collect(Collectors.toList());
    }

    public BranchDto findById(Long id) {
        return branchRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
    }

    @Transactional
    public BranchDto create(Long companyId, CreateBranchRequest request) {
        Company company = companyRepository.findById(companyId)
            .orElseThrow(() -> new RuntimeException("Empresa no encontrada"));

        Branch branch = new Branch();
        branch.setCompany(company);
        branch.setName(request.getName());
        branch.setAddress(request.getAddress());
        branch.setPhone(request.getPhone());
        branch.setEmail(request.getEmail());
        branch.setDescription(request.getDescription());
        return toDto(branchRepository.save(branch));
    }

    @Transactional
    public BranchDto update(Long id, CreateBranchRequest request) {
        Branch branch = branchRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
        branch.setName(request.getName());
        if (request.getAddress() != null) branch.setAddress(request.getAddress());
        if (request.getPhone() != null) branch.setPhone(request.getPhone());
        if (request.getEmail() != null) branch.setEmail(request.getEmail());
        if (request.getDescription() != null) branch.setDescription(request.getDescription());
        return toDto(branchRepository.save(branch));
    }

    @Transactional
    public void deactivate(Long id) {
        Branch branch = branchRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Sucursal no encontrada"));
        branch.setActive(false);
        branchRepository.save(branch);
    }

    public BranchDto toDto(Branch b) {
        BranchDto dto = new BranchDto();
        dto.setId(b.getId());
        dto.setName(b.getName());
        dto.setAddress(b.getAddress());
        dto.setPhone(b.getPhone());
        dto.setEmail(b.getEmail());
        dto.setDescription(b.getDescription());
        dto.setActive(b.isActive());
        dto.setCreatedAt(b.getCreatedAt());
        if (b.getCompany() != null) {
            dto.setCompanyId(b.getCompany().getId());
            dto.setCompanyName(b.getCompany().getName());
        }
        return dto;
    }
}
