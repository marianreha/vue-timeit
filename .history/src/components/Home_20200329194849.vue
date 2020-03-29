<template>
  <div>
      <p>Please select what you want to do next:</p>
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
p {
    padding: 50px;
}
/* .btn-group {
    display: flex;
    flex-direction: column;
    padding: 0 10%;    
}

.btn-group button {
    padding: 25px;
    margin: 10px 10px 10px 10px;
} */
.btn-group {
    display: block;
    padding: 0 10%;
    width: 120%;   
}

.btn-group button {
    padding: 25px;
}

</style>