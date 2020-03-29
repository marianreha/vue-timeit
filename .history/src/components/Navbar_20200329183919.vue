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
}

.green {
    padding: 4px 0 3px 0;
    background-color: #78BE20;
    color: #FFFFFF;
    font-size: 9.5px;
    text-transform: uppercase;
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
