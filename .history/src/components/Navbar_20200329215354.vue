<template>
  <div>
      <div class="navbar-green">
          The renewable materials company
      </div>
      <div class="navbar-main">
          <div class="child"><span><img class="logo" src="../assets/logo.jpg" alt="logo"></span></div>
          <div class="child"><span>Stora Enso Time-it</span></div>
          <div class="child"><span>LoginLoginLoginLogin</span></div>
      </div>
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
    align-items: center;
    padding: 25px 5%;
    box-shadow: 0 3px 8px -8px;
    box-sizing: border-box;
    flex: 1;
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
    margin-right: auto;
}

.title {
    font-weight: bold;
    font-size: 17px;
    flex-grow: 1;
}

.user {
    margin-left: auto;
}

/* .navbar-main {
    display: flex;
    height: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 25px 5%;
    box-shadow: 0 3px 8px -8px;
    box-sizing: border-box;
    flex: 1;
}

.logo {
    height: 40px;
    margin-right: auto;
}

.title {
    font-weight: bold;
    font-size: 17px;
    flex-grow: 1;
}

.user {
    margin-left: auto;
} */

</style>>
