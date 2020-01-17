<template>
  <div id="app">
    <Header/>
    <ItemsCarousel/>
    <Advantages/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ItemsCarousel from './components/ItemsCarousel.vue'
import Advantages from './components/Advantages.vue'

export default {
  name: 'app',
  components: {
    Header, ItemsCarousel, Advantages
  }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  #app {
    font-family: 'Open Sans', sans-serif;
  }
</style>
