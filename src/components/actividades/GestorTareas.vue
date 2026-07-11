// Ejercicio Final

<template>
  <div class="gestor-tareas">
    <form @submit.prevent="agregarTarea">
      <input
        type="text"
        v-model.trim="nuevaTarea"
        placeholder="Escribe una tarea..."
      >
      <button type="submit">Agregar</button>
    </form>

    <p class="gestor-tareas__contador">
      Tareas pendientes:
      {{
        tareas.filter(t => !t.completada).length
      }}
    </p>

    <div class="gestor-tareas__lista">
      <p v-if="tareas.length === 0">
        No hay tareas todavía. ¡Agrega la primera!
      </p>

      <ul v-else>
        <li
          v-for="tarea in tareas"
          :key="tarea.id"
          @click="toggleCompletada(tarea.id)"
          :class="{ 'tarea-completada': tarea.completada }"
        >
          {{ tarea.texto }}
          <button
            class="tarea__eliminar"
            @click.stop="eliminarTarea(tarea.id)"
          >
            ✕
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nuevaTarea = ref('')
const tareas = ref([])
const ultimoId = ref(0)

function agregarTarea() {
  if (nuevaTarea.value.length === 0) {
    return
  }

  ultimoId.value++

  tareas.value.push({
    id: ultimoId.value,
    texto: nuevaTarea.value,
    completada: false,
  })

  nuevaTarea.value = ''
}

function toggleCompletada(id) {
  const tarea = tareas.value.find(t => t.id === id)
  if (!tarea) return

  tarea.completada = !tarea.completada
}

function eliminarTarea(id) {
  tareas.value = tareas.value.filter(t => t.id !== id)
}
</script>

<style scoped>
.gestor-tareas {
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #020617;
  color: #e5e7eb;
}

form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

input {
  flex: 1;
  padding: 0.3rem 0.5rem;
}

button {
  padding: 0.3rem 0.8rem;
}

.gestor-tareas__lista ul {
  margin-top: 0.5rem;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
  cursor: pointer;
}

.tarea-completada {
  text-decoration: line-through;
  color: #9ca3af;
}

.tarea__eliminar {
  background: transparent;
  border: none;
  color: #ef4444;
  cursor: pointer;
}
</style>