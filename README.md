# Moldtek — Sistema de Inventario y Procesos

Sistema web para la gestión de inventario, catálogo de materiales, plantillas de fabricación y procesos internos de **Moldtek** (fabricante chileno de puertas, molduras y paneles SIP).

## Tecnologías

| Capa | Stack |
|------|-------|
| Frontend | Angular 22, Angular Material, TypeScript |
| Backend | Java 21, Spring Boot 3.4.1, Spring Security, JPA/Hibernate |
| Base de datos | PostgreSQL 16 |
| Auth | JWT (jjwt 0.12.6) + BCrypt |
| Contenedores | Docker + Docker Compose |

---

## Instalación rápida (Docker)

### Requisitos
- Docker Desktop instalado y corriendo
- Puertos disponibles: `4200` (frontend), `8080` (backend), `5432` (PostgreSQL)

### Pasos

```bash
# 1. Clonar o descomprimir el proyecto
cd c:\Proyectos\moldtek

# 2. Levantar todos los servicios
docker-compose up --build -d

# 3. Verificar que todo está corriendo
docker-compose ps

# 4. Abrir el navegador
# http://localhost:4200
```

### Credenciales por defecto

| Campo | Valor |
|-------|-------|
| Usuario | `admin` |
| Contraseña | `admin123` |

> El sistema crea automáticamente la empresa "Moldtek", la sucursal "Casa Matriz - Chillán" y el usuario administrador al primer inicio.

### Detener el sistema
```bash
docker-compose down
# Para borrar también los datos persistentes:
docker-compose down -v
```

---

## Instalación para desarrollo

### Requisitos
- Java 21 (OpenJDK o Eclipse Temurin)
- Node.js 22 y npm
- PostgreSQL 16 corriendo localmente
- Maven 3.9+

### 1. Base de datos

```sql
-- Conectarse a PostgreSQL como superusuario
CREATE DATABASE moldtek_db;
CREATE USER moldtek_user WITH PASSWORD 'moldtek_pass';
GRANT ALL PRIVILEGES ON DATABASE moldtek_db TO moldtek_user;
```

### 2. Backend

```bash
cd backend
# Verificar configuración en src/main/resources/application.yml
mvn spring-boot:run
# El servidor inicia en http://localhost:8080
# Hiberna crea las tablas automáticamente (ddl-auto: update)
```

### 3. Frontend

```bash
cd frontend
npm install
ng serve
# La app inicia en http://localhost:4200
# El proxy reenvía /api → http://localhost:8080
```

---

## Estructura del proyecto

```
moldtek/
├── backend/                    # Spring Boot API
│   ├── src/main/java/cl/moldtek/backend/
│   │   ├── config/             # Security, CORS, DataInitializer
│   │   ├── controller/         # REST endpoints
│   │   ├── dto/                # Request/Response DTOs
│   │   ├── model/              # Entidades JPA
│   │   ├── repository/         # Spring Data JPA
│   │   └── service/            # Lógica de negocio
│   └── src/main/resources/
│       └── application.yml     # Configuración
├── frontend/                   # Angular 22
│   └── src/app/
│       ├── core/               # Services, models, guards, interceptors
│       ├── layout/             # Sidenav, header, sidebar
│       └── modules/            # Módulos de la app
│           ├── auth/           # Login
│           ├── dashboard/      # Panel principal
│           ├── materials/      # Catálogo de materiales
│           ├── products/       # Catálogo de productos
│           ├── templates/      # Plantillas de fabricación
│           │   └── template-designer/  # Diseñador paso a paso
│           ├── inventory/      # Inventario por sucursal + transferencias
│           ├── company/        # Configuración empresa + sucursales
│           └── users/          # Gestión de usuarios
├── docker-compose.yml
└── README.md
```

---

## Módulos del sistema

### Catálogo de Materiales
- CRUD completo de materiales (código, nombre, categoría, unidad de medida, precio, proveedor)
- 12 categorías predefinidas (tableros MDF, HDF, herrajes, pinturas, etc.)
- Búsqueda y filtro por categoría con paginación

### Catálogo de Productos
- Registro de modelos de puertas, molduras y paneles SIP
- Dimensiones min/max, tipo de relleno, terminación, certificaciones
- Categorías: Puertas Interiores, Exteriores MDF-HR, Cortafuego, Molduras, Paneles SIP, Marcos

### Plantillas de Fabricación (Template Designer)
- Código automático en formato `TPL-XXXX` o manual
- Vinculación con producto del catálogo
- Subida de imagen de referencia
- Subida de archivo de programa CNC/maquinaria
- Lista de materiales dinámica: buscar → agregar → cantidad → reordenar → quitar
- Sirve como "receta" para fabricar una unidad del modelo

### Inventario
- Stock por sucursal con búsqueda
- Alerta visual cuando el stock cae bajo el mínimo configurado
- Actualización directa de cantidad y stock mínimo
- Solicitud de transferencia entre sucursales con notas

### Empresa y Sucursales
- Datos de la empresa (nombre, RUT, contacto, sitio web)
- CRUD de sucursales (cada sucursal tiene su propio inventario)

### Gestión de Usuarios
- El administrador crea y edita usuarios
- Roles disponibles: Administrador, Gerente, Bodega, Ventas, Solo lectura
- Asignación de sucursal por defecto (o acceso a todas)
- Activación/desactivación de usuarios

---

## Roles y permisos

| Rol | Dashboard | Materiales | Productos | Plantillas | Inventario | Empresa | Usuarios |
|-----|-----------|-----------|-----------|-----------|-----------|---------|---------|
| ADMIN | ✓ | ✓ editar | ✓ editar | ✓ editar | ✓ editar | ✓ editar | ✓ |
| MANAGER | ✓ | ✓ editar | ✓ editar | ✓ editar | ✓ editar | ver | — |
| WAREHOUSE | ✓ | ver | ver | ver | ✓ editar | — | — |
| SALES | ✓ | ver | ver | ver | ver | — | — |
| VIEWER | ✓ | ver | ver | ver | ver | — | — |

---

## Variables de entorno (producción)

Configurar en `docker-compose.yml` o en el entorno del servidor:

| Variable | Descripción | Por defecto |
|----------|-------------|-------------|
| `SPRING_DATASOURCE_URL` | JDBC URL de PostgreSQL | `jdbc:postgresql://postgres:5432/moldtek_db` |
| `SPRING_DATASOURCE_USERNAME` | Usuario de BD | `moldtek_user` |
| `SPRING_DATASOURCE_PASSWORD` | Contraseña de BD | `moldtek_pass` |
| `MOLDTEK_JWT_SECRET` | Secreto para firmar JWT (mínimo 32 chars) | ver `application.yml` |
| `MOLDTEK_JWT_EXPIRATION` | Expiración del token en ms | `86400000` (24h) |
| `MOLDTEK_CORS_ALLOWED_ORIGINS` | Origen permitido para CORS | `http://localhost:4200` |

---

## API REST

Base URL: `http://localhost:8080/api`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/auth/login` | Autenticación, retorna JWT |
| GET/POST | `/materials` | Listar / crear materiales |
| PUT/DELETE | `/materials/{id}` | Editar / eliminar material |
| GET/POST | `/products` | Listar / crear productos |
| GET/POST | `/templates` | Listar / crear plantillas |
| GET/PUT | `/templates/{id}` | Obtener / actualizar plantilla |
| GET | `/inventory/branch/{id}` | Stock de una sucursal |
| PUT | `/inventory/branch/{branchId}/material/{materialId}` | Actualizar stock |
| POST | `/inventory/transfers` | Solicitar transferencia |
| GET/PUT | `/company` | Ver / actualizar empresa |
| GET/POST | `/branches` | Listar / crear sucursales |
| GET/POST | `/users` | Listar / crear usuarios |
| GET | `/files/**` | Servir archivos subidos (imágenes, programas) |

---

## Solución de problemas

### El backend no conecta a la base de datos
Verificar que PostgreSQL esté corriendo y que las credenciales en `application.yml` sean correctas.

### Error 401 al usar la API
El token JWT expiró. Cerrar sesión y volver a iniciar sesión.

### Las imágenes no se cargan
El directorio `./uploads` debe existir y tener permisos de escritura. En Docker, se usa el volumen `upload_data`.

### Puerto 4200 ocupado en desarrollo
Cambiar el puerto: `ng serve --port 4201` y actualizar `proxy.conf.json` si es necesario.
