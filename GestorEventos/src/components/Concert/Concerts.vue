<template>
    <div>
      <!-- Renderiza los datos de los conciertos -->
      <div v-for="concert in concerts" :key="concert.id">
        {{ concert.title }} - {{ concert.artist }} - {{ concert.location }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Define concerts como una referencia reactiva
  const concerts = ref([]);
  
  // Método para cargar los conciertos al montar el componente
  const loadConcerts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/concerts');
      if (!response.ok) {
        throw new Error('Error al cargar los conciertos');
      }
      // Actualiza el valor de concerts con los datos de la respuesta
      concerts.value = await response.json();
      concerts.value = concerts.value.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  // Llama al método loadConcerts cuando el componente se monta
  onMounted(loadConcerts);
  </script>
  