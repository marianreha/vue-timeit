<template>
  <div class="container">
      <button class="btn">Enter working hours</button>
      <button class="btn">Enter OOO</button><br>
      <button class="btn">View report</button>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>
/* p {
    padding: 50px;
    text-align: center;
} */

.container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
}

.btn + .btn {
    padding: 20px;
    margin-top: 20px;
}


/* .buttons {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    max-width: 700px;
    text-align: center;
}

.buttons span {
    padding: 25px 20% 25px 20%;
    color: #ffffff;
    font-weight: bold;
    margin: 5px;
}

.buttons span:hover {
    background-color: #006cbe;
}

.btn-blue {
    background-color: #009FDF;
}

.btn-yellow {
    background-color: #FFD100;
} */

/* .btn-group {
    display: block;
    padding: 0 10%;
    width: 120%;
    justify-content: left;
}

.btn-group button {
    padding: 25px;
} */

</style>