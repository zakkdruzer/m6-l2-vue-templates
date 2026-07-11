# Vue 3 · Templates y Rendering (Composition API, `<script setup>`)

Este proyecto contiene las actividades del **Módulo 6 · Lección 2** orientadas a practicar templates y rendering en Vue 3 usando **Composition API** y la sintaxis **`<script setup>`**.

## Actividades incluidas

Cada actividad está implementada como un componente dentro de `src/components/actividades/`:

1. **TarjetaPerfil.vue**  
   - Uso de `ref`, interpolación `{{ }}`, `v-bind` (`:src`) y expresiones en el template.

2. **ContadorReglas.vue**  
   - Eventos con `@click`, funciones manejadoras en `<script setup>`, y renderizado condicional con `v-if / v-else-if / v-else`.

3. **FormularioSaludo.vue**  
   - Formularios reactivos con `v-model.trim`, manejo de envío con `@submit.prevent` y mensajes condicionales según el estado del input.

4. **DemoToggle.vue**  
   - Comparación práctica entre `v-if` y `v-show`, observando la diferencia real en el DOM con DevTools.

5. **ListaProductos.vue**  
   - Renderizado de listas con `v-for`, uso correcto de `:key`, alias de índice y empty state cuando el arreglo está vacío.

6. **FichaObjeto.vue**  
   - Iteración de las propiedades de un objeto con `v-for (valor, clave)`, generando una ficha dinámica que se adapta cuando se agregan nuevas propiedades.

7. **GestorTareas.vue** (Actividad integradora)  
   - Mini gestor de tareas que junta todo lo anterior:
     - Arreglo de tareas como estado principal (`ref` con objetos `{ id, texto, completada }`).
     - Agregar tareas con `v-model.trim` y `@submit.prevent`.
     - Listar tareas con `v-for` + `:key`.
     - Marcar tareas como completadas con `@click` y estilos/clases dinámicas (`:class`).
     - Eliminar tareas con un botón por ítem.
     - Empty state cuando no hay tareas.
     - Contador de tareas pendientes usando `filter` directamente en el template.

## Tecnologías utilizadas

- **Vue 3** con Composition API y sintaxis `<script setup>`.
- **Vite** como bundler y servidor de desarrollo.
- **Node.js + npm** para la gestión de dependencias y scripts de desarrollo.

## Cómo ejecutar el proyecto

Para visualizar el proyecto en local:

1. Clonar el repositorio:

   ```bash
   git clone <URL_DE_TU_REPO>
   cd <CARPETA_DEL_PROYECTO>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Levantar el servidor de desarrollo (Vite):

   ```bash
   npm run dev
   ```

4. Abrir el navegador en la URL que muestre Vite (normalmente `http://localhost:5173/`).

## Checklist de la lección

- Todos los componentes usan `<script setup>` (Composition API).  
- No hay ningún `.value` dentro de los `<template>`.  
- Cada `v-for` tiene su `:key` único y no usa el índice.  
- Directivas usadas correctamente: `v-for`, `v-if/v-else-if/v-else`, `v-show`, `v-model`, `v-bind`, eventos `@` (`@click`, `@submit.prevent`).  
- Código sin `console.log` ni comentarios de debug olvidados.
- Nombres de variables y funciones claros y consistentes.
