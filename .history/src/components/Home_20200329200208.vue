<template>
  <div>
      <p>Please select what you want to do next:</p>
      <!-- <div class="btn-group">
        <button>Enter working hours</button>
        <button>Enter out of work/training</button>
        <button>View report</button>
      </div> -->
      <div class="buttons">
          <span>Enter working hours</span>
          <span>Enter out of work/training</li>
          <li>View report</li>
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
    list-style: none;
    float: center;
    padding: 0 5%;
}

.buttons li {
    padding: 25px 20% 25px 20%;
    background-color: #009FDF;
    color: #ffffff;
    font-weight: bold;
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