<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
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
  padding: 0px;
}

* {
    box-sizing: border-box;
    margin: 0 !important;
    cursor: default;
}
</style>
