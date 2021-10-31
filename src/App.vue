<template>
  <Overview />
  
</template>

<script>
import Overview from './components/Overview.vue'

export default {
  name: 'App',
  components: {
    Overview
  }
}
</script>

<style>
@font-face {
  font-family: "Playfair Display";
  src: local("Playfair Display"),
  url('./assets/PlayfairDisplay-SemiBold.ttf');
}
@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"),
  url('./assets/OpenSans-Medium.ttf');
}
#app {
  font-family: "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  text-align-last: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app h1, h2, h3, h4, h5, h6, a {
  font-family: "Playfair Display", Helvetica, Arial, sans-serif;
}

.fancy {
  font-family: "Playfair Display", Helvetica, Arial, sans-serif;
}
</style>
