<template>
  <div>
      <header>
          <img class="logo" src="../assets/logo.jpg" alt="logo">
          <nav>
              Stora Enso Time-it
          </nav>
          <button>Login</button>
      </header>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

header {
    display: flex;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    height: 40px;
}
</style>>
