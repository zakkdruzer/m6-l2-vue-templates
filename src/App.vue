<script setup>
import TarjetaPerfil from './components/actividades/TarjetaPerfil.vue';
import ContadorReglas from './components/actividades/ContadorReglas.vue';
import FormularioSaludo from './components/actividades/FormularioSaludo.vue';
import DemoToggle from './components/actividades/DemoToggle.vue';
import ListaProductos from './components/actividades/ListaProductos.vue';
import FichaObjeto from './components/actividades/FichaObjeto.vue';

</script>

<template>
  <TarjetaPerfil />
  <ContadorReglas />
  <FormularioSaludo />
  <DemoToggle />
  <ListaProductos />
  <FichaObjeto />
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