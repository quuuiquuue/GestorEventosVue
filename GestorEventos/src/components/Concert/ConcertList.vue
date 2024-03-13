<template>
    <div>
      <h2>Conciertos Disponibles</h2>
      <div v-for="concert in concerts" :key="concert.id" @click="goToConcertDetail(concert)">
        <h3>{{ concert.title }}</h3>
        <p><strong>Artista:</strong> {{ concert.artist }}</p>
        <p><strong>Fecha:</strong> {{ concert.date }}</p>
        <p><strong>Ubicación:</strong> {{ concert.location }}</p>
        <p><strong>Precio de la entrada:</strong> {{ concert.ticketPrice }}</p>
        <p><strong>Entradas disponibles:</strong> {{ concert.ticketsAvailable }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const concerts = ref([]);
  
  const loadConcerts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/concerts');
      if (!response.ok) {
        throw new Error('Error al cargar los conciertos');
      }
      const data = await response.json();
      concerts.value = data.data; // Aquí accedemos a data.data
    } catch (error) {
      console.error(error);
    }
  };
  
  const goToConcertDetail = (concert) => {
    router.push(`/concerts/${concert.id}`);
  };
  
  onMounted(loadConcerts);
  </script>
  