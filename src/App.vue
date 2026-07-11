<script setup>
import EncabezadoRecetario from './components/recetario/EncabezadoRecetario.vue';
import RecetaEnsalada from './components/recetario/RecetaEnsalada.vue';
import RecetaGalletas from './components/recetario/RecetaGalletas.vue';
import RecetaPanqueques from './components/recetario/RecetaPanqueques.vue';
import RecetaSmoothie from './components/recetario/RecetaSmoothie.vue';

</script>

<template>
  <EncabezadoRecetario />
  <RecetaEnsalada />
  <RecetaGalletas />
  <RecetaPanqueques />
  <RecetaSmoothie />
</template>

<style scoped>
.contenedor {
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background-color: #fafafa;
}
</style>