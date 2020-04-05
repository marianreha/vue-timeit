<template>
    <div>
        <p>Please select what you want to do next:</p>
        <div class="container">
            <button class="btn">Enter working hours</button>
            <button class="btn">Enter out of work/training</button>
            <button class="btn btn-yellow">View report</button>
            <button class="btn btn-delegate">Act as delegate</button>
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
    padding: 40px 0 30px 0;
}

.container {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}

.btn {
    padding: 25px;
    margin-bottom: 15px;
    background-color: #009FDF;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 20px;
    /* font-weight: bold; */
}

.btn:hover {
    background-color: #006cbe;
}

.btn-yellow {
    background-color: #FFD100;
}

.btn-delegate {
    background-color: #888B8D;
    margin-top: 75px;
}

</style>