// Ejercicio 4

<template>
  <div class="demo-toggle">
    <button @click="alternar">
      {{ visible ? 'Ocultar bloques' : 'Mostrar bloques' }}
    </button>

    <p v-if="visible">
      Este párrafo usa v-if: se crea y se destruye en el DOM según el estado.
    </p>

    <p v-show="visible">
      Este párrafo usa v-show: siempre está en el DOM, solo cambia display: none.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(true)

function alternar() {
  visible.value = !visible.value
}

/*
Reflexión:
- El párrafo con v-if desaparece del DOM cuando visible es false (Vue lo elimina y lo vuelve a crear).
- El párrafo con v-show se mantiene en el DOM y solo se le aplica display: none.
Usaría v-if para contenido que se muestra rara vez (por ejemplo, un modal pesado),
y v-show para cosas que se muestran/ocultan muy seguido (por ejemplo, tabs o dropdowns).
*/
</script>