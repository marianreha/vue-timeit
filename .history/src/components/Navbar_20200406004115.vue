<template>
  <body>
      <div class="navbar-green">
          The renewable materials company
      </div>
      <div class="navbar-main">
          <div class="child"><span><router-link to="/"><img class="logo" src="../assets/logo.jpg" alt="logo"></router-link></span></div>
          <div class="child"><span class="title">Time-it</span></div>
          <div class="child"><span ><router-link to="/user" class="user">Account</router-link></span></div>
      </div>
  </body>
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
    flex: 1;
    height: 2rem;
    align-items: center;
    padding: 25px 5%;
    box-shadow: 0 3px 8px -8px;
    box-sizing: border-box;
    background-color: #ffffff;
}

.child {
    flex: 1;
    display: flex;
    justify-content: center;
}

.child:first-child > span {
    margin-right: auto;
}

.child:last-child > span {
    margin-left: auto;
}

.logo {
    height: 40px;
}

.title {
    font-weight: bold;
    font-size: 17px;
    flex-grow: 1;
}

.user {
    margin-left: auto;
    font-size: 17px;
    text-decoration: none;
    color: #2c3e50;
}
</style>>
