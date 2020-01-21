<template>
  <div id="app">
    <Header/>
    <Items/>
    <Advantages/>
    <RegistrationButton/>
    <Steps/>
    <Promotions/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Items from './components/Items.vue'
import Advantages from './components/Advantages.vue'
import RegistrationButton from './components/RegistrationButton.vue'
import Steps from './components/Steps.vue'
import Promotions from './components/Promotions.vue'

export default {
  name: 'app',
  components: {
    Header, Items, Advantages, RegistrationButton, Steps, Promotions
  }
}
</script>

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');

  a {
    transition: all 0.3s ease;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
  }
</style>
