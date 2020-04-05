<template>
  <div>
      <h3>Please select what you want to do next:</h3>
      <div class="btn-group">
        <button>Enter working hours</button>
        <button>Enter out of work/training</button>
        <button>View report</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style>
h3 {
    padding: 50px;
}
.btn-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    margin: 10px 10px;
}

.btn-group button {
    padding: 25px;
}


</style>