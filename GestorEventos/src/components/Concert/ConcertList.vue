<template>
  <div>
    <h2>Conciertos Disponibles</h2>
    <carousel :perPageCustom="[[320, 1], [480, 2], [640, 3], [768, 4], [1024, 5], [1280, 6]]" :autoplay="true" :autoplayTimeout="5000">
      <slide v-for="concert in concerts" :key="concert.id" class="concert-card" @click="goToConcertDetail(concert)">
        <h3>{{ concert.title }}</h3>
        <img :src="concert.poster " alt="poster_concert">
        <p><strong>Artista:</strong> {{ concert.artist }}</p>
        <p><strong>Fecha:</strong> {{ concert.date }}</p>
        <p><strong>Ubicación:</strong> {{ concert.location }}</p>
        <p><strong>Precio de la entrada:</strong> {{ concert.ticketPrice }}</p>
        <p><strong>Entradas disponibles:</strong> {{ concert.ticketsAvailable }}</p>
      </slide>
    </carousel>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import carousel from 'vue-carousel';
  
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
  
<style>
img{
  width: 190px;
  height: 220px;
}

.concert-card {
  width: auto;
  border: 1px solid #ccc; /* Borde delgado */
  border-radius: 10px; /* Bordes redondeados */
  padding: 10px; /* Espaciado interno */
  margin-bottom: 20px; /* Espaciado entre las cartas */
  text-align: center;
}

.concert-card p {
  margin: 5px 0; /* Ajusta el espacio entre los párrafos */
  font-size: 14px; /* Ajusta el tamaño del texto */
}

</style>