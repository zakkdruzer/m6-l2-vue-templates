// Ejercicio 3

<template>
  <div class="formulario-saludo">
    <form @submit.prevent="enviarSaludo">
      <label>
        Escribe tu nombre:
        <input
          type="text"
          v-model.trim="nombre"
        >
      </label>

      <button type="submit">
        Enviar
      </button>
    </form>

    <div class="formulario-saludo__mensaje">
      <p v-if="nombre.length === 0">
        Escribe tu nombre para ver el saludo
      </p>
      <p v-else>
        Hola, {{ nombre }} 👋
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('')

function enviarSaludo() {
  if (nombre.value.length === 0) {
    alert('Por favor, escribe tu nombre antes de enviar.')
    return
  }

  alert(`Hola, ${nombre.value} 👋`)
}
</script>

<style scoped>
.formulario-saludo {
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #020617;
  color: #e5e7eb;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  margin-top: 0.25rem;
  padding: 0.3rem 0.5rem;
}

button {
  align-self: flex-start;
  padding: 0.3rem 0.8rem;
}
</style>