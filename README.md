# Generador-Alumnos-BD
Proyecto perteneciente a la materia de Base de datos II
Herramienta visual para generar archivos para diferentes manejadores de BD con la finalidad de llenar una tabla de 
estudiantes con el siguiente formato:

* Expediente
* Apellido
* Nombre
* Correo

## Interfaz Visual

<img width="1360" height="777" alt="image" src="https://github.com/user-attachments/assets/74cb4123-06fd-4273-9b99-a421d1e1f42e" />

##  Características

* Interfaz interactiva (`generadorAlumnos.html`).
* Estilos en CSS y lógica de frontend en JavaScript.
* Scripts SQL configurados para para:
  * **MySQL / MariaDB** (`sistema_escolar.sql`)
  * **PostgreSQL** (`sistema_escolarPostgres.sql`)

## Estructura del Proyecto

```text
├── css/                     # Archivos de estilos
├── js/                      # Lógica de generación y scripts
├── generadorAlumnos.html    # Interfaz principal de la aplicación
├── sistema_escolar.sql      # Script de base de datos para MySQL
└── sistema_escolarPostgres.sql # Script de base de datos para PostgreSQL
