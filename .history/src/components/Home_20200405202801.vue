<template>
    <div>
        <p>Please select what you want to do next:</p>
        <div class="container">
            <router-link to="/enter_hours" class="btn">Enter working hours</router-link>
            <router-link to="/enter_ooo" class="btn">Enter out of work/training</router-link>
            <router-link to="/report" class="btn yellow">View report</router-link>
            <router-link to="/delegate" class="btn delegate">Act as delegate</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {

    }
}
</script>

<style>
p {
    padding: 30px 0 20px 0;
}

.container {
    /* padding: 0 30px; */
    display: grid;
    grid-gap: 1rem;
}

.btn {
    max-width: 35rem;
    /* padding: 20px; */
    background-color: #009FDF;
    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
}

.btn:hover {
    background-color: #006cbe;
}

.yellow {
    background-color: #FFD100;
}

.delegate {
    background-color: #888B8D;
    margin-top: 60px;
}

</style>