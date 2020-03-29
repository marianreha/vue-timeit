<template>
  <div id="app">
    <Navbar />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar
  }
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/2afedaab5a5177410b408023384af22d?family=HelveticaNeueLTW01-55Roman);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0px;
  margin: 0 !important;
}
</style>
