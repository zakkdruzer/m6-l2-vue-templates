// Ejercicio 1
<template>
    <div class="tarjeta-perfil">
        <img :src="urlFoto" alt="Foto de perfil" class="tarjeta-perfil__foto">
        <h2>{{ nombre }}</h2>
        <p>Profesión: {{ profesion }}</p>
        <p>Edad: {{ edad }} años</p>
        <p>
            Mayor de edad:
            {{ edad >= 18 ? 'SÍ' : 'NO' }}
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('Carlos Oyaneder')
const profesion = ref('Desarrollador Frontend en formación')
const edad = ref(23)
const urlFoto = ref('https://i.pravatar.cc/150')
</script>

<style scoped>
.tarjeta-perfil {
  max-width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  background-color: #687c9b;
  color: #e5e7eb;
  text-align: center;
}

.tarjeta-perfil__foto {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}
</style>