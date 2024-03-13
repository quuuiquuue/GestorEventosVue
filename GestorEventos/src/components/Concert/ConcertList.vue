<template>
  <div>
    <h2>Conciertos Disponibles</h2>
    <div class="concert-list">
      <div v-for="concert in concerts" :key="concert.id" class="concert-card" @click="goToConcertDetail(concert)">
        <img :src="concert.poster" alt="poster_concert" class="concert-image">
        <p><strong>Artista:</strong> {{ concert.artist }}</p>
        <p><strong>Fecha:</strong> {{ concert.date }}</p>
        <p><strong>Ubicación:</strong> {{ concert.location }}</p>
        <p><strong>Precio de la entrada:</strong> {{ concert.ticketPrice }}</p>
        <p><strong>Entradas disponibles:</strong> {{ concert.ticketsAvailable }}</p>
      </div>
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
    concerts.value = data.data;
  } catch (error) {
    console.error(error);
  }
};

const goToConcertDetail = (concert) => {
  router.push(`/concerts/${concert.id}`);
};

onMounted(loadConcerts);
</script>

<style scoped>

</style>
