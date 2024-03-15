<template>
  <div>
    <!-- Navbar -->
    <nav >
      <div class="wrapper">
        <div class="logo"><a href="/"><img src="/logo-web.png" alt="logo_image" style="width: 30%; padding-top:3%;"></a></div>
        <input type="radio" name="slider" id="menu-btn">
        <input type="radio" name="slider" id="close-btn">
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
          <li><a href="/">Home</a></li>
          <li><a href="#">Explorar Eventos</a></li>
          <li><a href="#">Iniciar Sesion</a></li>
          <li><button @click="openSearchModal">Buscar</button></li>
        </ul>
        <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
      </div>
    </nav>
    <div>
    
    <!-- Modal del buscador -->
    <div class="search-modal" v-if="showSearch" @click.self="closeSearchModal">
      <!-- Contenido del modal del buscador -->
      <div class="search-modal-content">
        <!-- Aquí va el contenido del buscador -->
        <input type="text" placeholder="Busca tu evento">
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showSearch = ref(false);

// Función para mostrar el modal del buscador
const openSearchModal = () => {
  showSearch.value = true;
};

// Función para cerrar el modal del buscador
const closeSearchModal = () => {
  showSearch.value = false;
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
nav {
  padding: 10px;
}

.navbar {
  width: 100%;
  background-color: white;
  top: 0;
  z-index: 1000;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: black;
  text-decoration: none;
}

.search-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro semi-transparente */
  z-index: 10000; /* Z-index alto para que esté por encima de otros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-modal-content {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.search-box {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.search-box input {
  width: 400px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
}

.btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
}

.close-search {
  margin-left: 10px;
}
</style>
