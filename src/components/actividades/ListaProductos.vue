// Ejercicio 5

<template>
  <div class="lista-productos">
    <p v-if="productos.length === 0">
      No hay productos
    </p>

    <ul v-else>
  <li
    v-for="(prod, i) in productos"
    :key="prod.id"
  >
    {{ i }} - {{ prod.nombre }} - ${{ prod.precio }}
    <span v-if="prod.precio > 10000">
      ⭐ Premium
    </span>
  </li>
</ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productos = ref([
  { id: 1, nombre: 'Mouse gamer', precio: 8990 },
  { id: 2, nombre: 'Teclado mecánico', precio: 12990 },
  { id: 3, nombre: 'Monitor 24"', precio: 109990 },
  { id: 4, nombre: 'Auriculares', precio: 15990 }
])
</script>

<style scoped>
.lista-productos {
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #415199;
  color: #e5e7eb;
}

ul {
  margin-top: 0.5rem;
}

li {
  margin-bottom: 0.25rem;
}
</style>