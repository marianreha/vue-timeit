<template>
  <div>
      <ul>
          <li>Enter working hours</li>
          <li>Enter out of work/training</li>
          <li>View report</li>
      </ul>
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
ul {
    list-style: none;
}

.btn-group button {
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
}
</style>