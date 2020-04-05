<template>
  <div>
      <p>Please select what you want to do next:</p>
      <!-- <div class="btn-group">
        <button>Enter working hours</button>
        <button>Enter out of work/training</button>
        <button>View report</button>
      </div> -->
      <div class="buttons">
          <span class="btn-blue">Enter working hours</span>
          <span class="btn-blue">Enter out of work/training</span>
          <span class="btn-yellow">View report</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>
p {
    padding: 50px;
}

.buttons {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
}

.buttons span {
    padding: 25px 20% 25px 20%;
    background-color: #009FDF;
    color: #ffffff;
    font-weight: bold;
    margin: 5px;
}

.yellow-btn {
    background-color: yellow;
}

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