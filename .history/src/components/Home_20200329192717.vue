<template>
  <div>
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
.btn-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
}

/* .btn-group button {
    width: 70%;
    justify-self: center;
} */

</style>