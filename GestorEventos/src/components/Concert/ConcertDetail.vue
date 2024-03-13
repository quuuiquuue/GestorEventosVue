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

</script>
