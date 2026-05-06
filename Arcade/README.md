# Arcade

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



------------------------------------------------------------------

Arcade Project - Technical Documentation
1. Overview
Este ecosistema de juegos web ha sido diseñado como el proyecto central de la cátedra Programación III. El sistema se concibe como una Single Page Application (SPA) de alto rendimiento, orientada a la gestión de usuarios, interactividad en tiempo real y persistencia de datos mediante arquitecturas modernas en Angular 19.

2. Planificación del Desarrollo (Ciclo de Sprints)
Sprint #1: Infraestructura y Perfiles (Completado)
Core: Configuración de entorno Angular 19 y despliegue inicial en hosting.

Componentes: Desarrollo de Login, Registro, Home y Quién Soy.

Integración: Consumo de la API de GitHub para la carga dinámica de datos del desarrollador (nombre, avatar, bio).

Navegación: Implementación de ruteo dinámico con Bootstrap 5.

Sprint #2: Autenticación y Comunicación Social (En curso)
Gestión de Accesos: Servicios de autenticación mediante proveedores externos (Supabase/Firebase).

Auditoría (Logs): Registro automático de ingresos de usuarios (User ID y Timestamp) en base de datos.

Social: Desarrollo de un Chat global interactivo con persistencia de mensajes para usuarios autenticados.

Sprint #3: Lógica de Juegos y Persistencia
Sudoku: Implementación de la lógica de juego (grillas 9x9), validaciones en tiempo real y niveles de dificultad.

API Juegos: Consumo de APIs externas para juegos complementarios (ej. preguntas/respuestas o ahorcado).

Ranking: Sistema de persistencia de puntajes y récords vinculados a cada cuenta de usuario.

Sprint #4: Experiencia de Usuario y Cierre
Dashboard: Vista de estadísticas personales y comparativa de logros.

Optimización: Refactorización final, manejo avanzado de errores y pulido de la UI/UX con Bootstrap.

Finalización: Documentación completa del sistema y preparación para la defensa del proyecto.

3. Stack Tecnológico y Estándares de Cátedra
Para cumplir con los criterios de evaluación, el código debe alinearse con:

Framework: Angular 19 con Standalone Components.

Reactividad: Uso prioritario de Signals (signal, computed, effect).

Control Flow: Nueva sintaxis de Angular (@if, @for, @switch).

Patrones: Inyección de dependencias mediante la función inject().

Maquetación: Diseño responsivo basado exclusivamente en Bootstrap 5.

4. Metodología de Implementación
Dada la naturaleza académica, se requiere un análisis conceptual previo a la codificación. El sistema debe priorizar la legibilidad y la escalabilidad, utilizando servicios desacoplados para la comunicación con el backend (Supabase/Firebase).