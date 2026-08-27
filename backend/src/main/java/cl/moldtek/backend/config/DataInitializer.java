package cl.moldtek.backend.config;

import cl.moldtek.backend.model.*;
import cl.moldtek.backend.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements ApplicationRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final CompanyRepository companyRepository;
    private final BranchRepository branchRepository;
    private final MaterialCategoryRepository materialCategoryRepository;
    private final ProductCategoryRepository productCategoryRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        initRoles();
        initDefaultCompany();
    }

    private void initRoles() {
        createRoleIfAbsent(Role.ADMIN, "Administrador del sistema con acceso total");
        createRoleIfAbsent(Role.MANAGER, "Gerente con acceso a reportes y gestión");
        createRoleIfAbsent(Role.WAREHOUSE, "Encargado de bodega e inventario");
        createRoleIfAbsent(Role.SALES, "Vendedor con acceso a catálogo y cotizaciones");
        createRoleIfAbsent(Role.VIEWER, "Solo visualización");
        log.info("Roles initialized");
    }

    private void initDefaultCompany() {
        if (companyRepository.count() > 0) return;

        Company company = new Company();
        company.setName("Moldtek");
        company.setRut("76.123.456-7");
        company.setAddress("Chillán, XVI Región de Ñuble, Chile");
        company.setPhone("+56 42 000 0000");
        company.setEmail("ventas@moldtek.cl");
        company.setWebsite("www.mold-tek.cl");
        company = companyRepository.save(company);

        Branch mainBranch = new Branch();
        mainBranch.setCompany(company);
        mainBranch.setName("Casa Matriz - Chillán");
        mainBranch.setAddress("Chillán, Región de Ñuble");
        mainBranch = branchRepository.save(mainBranch);

        Role adminRole = roleRepository.findByName(Role.ADMIN).orElseThrow();
        User admin = new User();
        admin.setCompany(company);
        admin.setUsername("admin");
        admin.setEmail("admin@moldtek.cl");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setFirstName("Administrador");
        admin.setLastName("Moldtek");
        admin.setRoles(Set.of(adminRole));
        userRepository.save(admin);

        initMaterialCategories(company);
        initProductCategories(company);

        log.info("Default company, branch and admin user created (user: admin / pass: admin123)");
    }

    private void initMaterialCategories(Company company) {
        createMatCat("Tableros MDF/HDF", "Tableros de fibra de densidad media y alta", null, company);
        createMatCat("Tableros OSB", "Tableros de virutas orientadas", null, company);
        createMatCat("Tableros Terciado", "Madera contrachapada", null, company);
        createMatCat("Chapas de Madera", "Chapas naturales: Cedro, Mara, Eucaliptus, Wengue", null, company);
        createMatCat("Marcos y Batientes", "Marcos de puertas, batientes Pino Finger Joint", null, company);
        createMatCat("Rellenos", "Honey Comb, Poliestireno Expandido, Aglomerado", null, company);
        createMatCat("Herrajes", "Bisagras, cerraduras, manillas, topes", null, company);
        createMatCat("Adhesivos y Sellantes", "Colas, PU, sellantes", null, company);
        createMatCat("Molduras MDF", "Guardapolvos, pilastras, cornisas, cuartos de rodón", null, company);
        createMatCat("Accesorios Paneles SIP", "Soleras, tornillos, tablillas, pie derecho", null, company);
        createMatCat("Pintura y Acabados", "Pinturas, barnices, lacas", null, company);
        createMatCat("Poliestireno EPS", "Paneles de Poliestireno Expandido Alta Densidad", null, company);
    }

    private void initProductCategories(Company company) {
        createProdCat("Puertas Interiores", "Puertas para uso interior NCH354", null, company);
        createProdCat("Puertas Exteriores MDF-HR", "Puertas resistentes a humedad para exterior/cocina/baño", null, company);
        createProdCat("Puertas Cortafuego", "Puertas F-30 y F-60 certificadas DICTUC", null, company);
        createProdCat("Molduras", "Líneas de molduras decorativas para interiores", null, company);
        createProdCat("Paneles SIP", "Paneles estructurales aislantes OSB+EPS", null, company);
        createProdCat("Marcos de Puertas", "Marcos Pino Finger Joint, MDF, Enchapado, Rauli", null, company);
    }

    private void createRoleIfAbsent(String name, String description) {
        if (!roleRepository.existsByName(name)) {
            roleRepository.save(new Role(name, description));
        }
    }

    private void createMatCat(String name, String description, MaterialCategory parent, Company company) {
        if (!materialCategoryRepository.existsByNameAndCompanyId(name, company.getId())) {
            MaterialCategory cat = new MaterialCategory();
            cat.setName(name);
            cat.setDescription(description);
            cat.setParent(parent);
            cat.setCompany(company);
            materialCategoryRepository.save(cat);
        }
    }

    private void createProdCat(String name, String description, ProductCategory parent, Company company) {
        ProductCategory cat = new ProductCategory();
        cat.setName(name);
        cat.setDescription(description);
        cat.setParent(parent);
        cat.setCompany(company);
        productCategoryRepository.save(cat);
    }
}
