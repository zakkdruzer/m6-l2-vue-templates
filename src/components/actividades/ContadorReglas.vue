// Ejercicio 2

<template>
  <div class="contador-reglas">
    <p>Valor actual: {{ contador }}</p>

    <p v-if="contador === 0">
      En cero
    </p>
    <p v-else-if="contador >= 1 && contador <= 9">
      Vas bien
    </p>
    <p v-else>
      ¡Nivel experto!
    </p>

    <div class="contador-reglas__botones">
      <button @click="sumar">+1</button>
      <button @click="restar">−1</button>
      <button @click="resetear">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)

function sumar() {
  contador.value++
}

function restar() {
  if (contador.value > 0) {
    contador.value--
  }
}

function resetear() {
  contador.value = 0
}
</script>

<style scoped>
.contador-reglas {
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #0f172a;
  color: #e5e7eb;
  text-align: center;
}

.contador-reglas__botones {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
}

button {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>