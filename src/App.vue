<template>
  <div id="app">
    <nav class="nav">
      <router-link
        class="nav__link"
        to="/"
      >
        Episodes
      </router-link>
      <router-link
        class="nav__link"
        to="/characters"
      >
        Characters
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>
