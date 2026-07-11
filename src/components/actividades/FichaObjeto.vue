// Ejercicio 6

<template>
  <div class="ficha-objeto">
    <h2>Ficha del personaje</h2>

    <ul>
      <li
        v-for="(valor, clave) in personaje"
        :key="clave"
      >
        {{ clave }}: {{ valor }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const personaje = ref({
  nombre: 'Gandalf',
  raza: 'Maiar',
  poder: 'Magia blanca',
  planeta: 'Tierra Media',
  nivel: 'Legendario',
  arma: 'Bastón',
  alineacion: 'Buena'
})
</script>

<style scoped>
.ficha-objeto {
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #238644;
  color: #e5e7eb;
}

ul {
  margin-top: 0.5rem;
}

li {
  margin-bottom: 0.25rem;
}
</style>