<template>
  <nav class="navbar">
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
      <li><a href="/contact">Contacto</a></li>
      <!-- Agrega más elementos de navegación según sea necesario -->
    </ul>
  </nav>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100%;
  background-color: #333;
  position: fixed; /* Fija la barra de navegación en la parte superior */
  top: 0; /* Sitúa la barra de navegación en la parte superior */
  z-index: 1000; /* Asegura que la barra de navegación esté por encima de otros elementos */
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
  color: white;
  text-decoration: none;
}
</style>
