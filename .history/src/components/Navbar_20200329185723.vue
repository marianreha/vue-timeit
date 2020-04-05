<template>
  <div>
      <header class="green">
          The renewable materials company
      </header>
      <header class="navbar">
          <img class="logo" src="../assets/logo.jpg" alt="logo">
          <nav>
              Stora Enso Time-it
          </nav>
          <span>Login</span>
      </header>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0 !important;
    cursor: default;
}

.green {
    padding: 4px 0 3px 0;
    background-color: #78BE20;
    color: #FFFFFF;
    font-size: 9.5px;
    text-transform: uppercase;
}

.navbar {
    display: flex;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 25px 5%;
    box-shadow: 0 3px 8px -8px;
}

.logo {
    height: 45px;
    cursor: pointer;
}
</style>>
