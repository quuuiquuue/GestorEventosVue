<template>
  <div v-if="concert">
    <h2>{{ concert.title }}</h2>
    <p><strong>Artista:</strong> {{ concert.artist }}</p>
    <p><strong>Fecha:</strong> {{ concert.date }}</p>
    <p><strong>Ubicación:</strong> {{ concert.location }}</p>
    <p><strong>Precio de la entrada:</strong> {{ concert.ticketPrice }}</p>
    <p><strong>Entradas disponibles:</strong> {{ concert.ticketsAvailable }}</p>
    <button @click="buyTicket" :disabled="ticketPurchased">Comprar Entrada</button>
    <p v-if="ticketPurchased">¡Entrada comprada con éxito!</p>
    <p v-if="error">{{ error }}</p>
  </div>
  <p v-else>Cargando detalles del concierto...</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const concertId = ref(router.currentRoute.value.params.id);
const concert = ref(null);
const error = ref('');
const ticketPurchased = ref(false);

const loadConcertDetail = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/concerts/${concertId.value}`);
    if (!response.ok) {
      throw new Error('Error al cargar los detalles del concierto');
    }
    const data = await response.json();
    concert.value = data.data; // Accedemos a los datos dentro del objeto 'data'
  } catch (error) {
    console.error(error);
    error.value = 'No se pudieron cargar los detalles del concierto';
  }
};

onMounted(loadConcertDetail);

  
const buyTicket = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/ticket-purchases`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Añade cualquier otra cabecera necesaria, como el token de autenticación si es necesario
        },
        body: JSON.stringify({
          concertId: concertId.value,
          // Puedes enviar más datos si es necesario, como el ID del usuario
        }),
      });
      if (!response.ok) {
        throw new Error('Error al comprar el ticket');
      }
      ticketPurchased.value = true;
    } catch (error) {
      console.error(error);
      error.value = 'No se pudo comprar el ticket';
    }
  };
</script>
