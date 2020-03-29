<template>
  <div id="app">
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/2afedaab5a5177410b408023384af22d?family=HelveticaNeueLTW01-55Roman);

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 0px;
  /* margin: 0 !important; */
}
</style>
