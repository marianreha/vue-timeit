<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from './components/Home';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    // Home,
    // Login
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

body {
  margin: 0;
}

* {
    cursor: default;
}

</style>
