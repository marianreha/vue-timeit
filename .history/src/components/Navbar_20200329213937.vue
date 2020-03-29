<template>
  <div>
      <header class="navbar-green">
          The renewable materials company
      </header>
      <header class="navbar-main">
          <img class="logo" src="../assets/logo.jpg" alt="logo">
          <span class="title">Stora Enso Time-it</span>
          <span class="user">Login</span>
      </header>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
.navbar-green {
    padding: 4px 0 3px 0;
    background-color: #78BE20;
    color: #FFFFFF;
    font-size: 9.5px;
    text-transform: uppercase;
}

.navbar-main {
    display: flex;
    height: 2rem;
    /* justify-content: space-between; */
    /* justify-content: LEFT; */
    align-items: center;
    padding: 25px 5%;
    box-shadow: 0 3px 8px -8px;
    box-sizing: border-box;
}

.logo {
    height: 40px;
}

.title {
    font-weight: bold;
    font-size: 17px;
    justify-self: center;
}

.user {
    justify: right;
}

</style>>
