<script setup>
import TarjetaPerfil from './components/actividades/TarjetaPerfil.vue';
import ContadorReglas from './components/actividades/ContadorReglas.vue';
import FormularioSaludo from './components/actividades/FormularioSaludo.vue';

</script>

<template>
  <TarjetaPerfil />
  <ContadorReglas />
  <FormularioSaludo />
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