<template>
  <div>
      <header class="green">
          The renewable materials company
      </header>
      <header class="main">
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

.green {
    box-sizing: border-box;
    margin: 0;
    padding: 5px 0 0 5px;
    background-color: #78BE20;
    text-transform: uppercase;
    font-size: 10px;
    align-content: center;
}

.main {
    display: flex;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

.logo {
    height: 45px;
}
</style>>
