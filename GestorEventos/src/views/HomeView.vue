<script setup>
import TicketPurchase from '@/components/TicketPurchase/TicketPurchase.vue';
import ConcertsList from '@/components/Concert/ConcertList.vue';
import Users from '@/components/Users/Users.vue';
import NavBar from '@/components/Gadgets/NavBar.vue';
</script>

<template>
  <main>
    <NavBar/>
    <ConcertsList/>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}


</style>
