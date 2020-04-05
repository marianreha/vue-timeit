<template>
    <div>
     
        <div class="container">
            <div class="item"><p>Please select what you want to do next:</p></div>
            <router-link to="/enter_hours" class="item btn">Enter working hours</router-link>
            <router-link to="/enter_ooo" class="item btn">Enter out of work/training</router-link>
            <router-link to="/report" class="item btn yellow">View report</router-link>
            <router-link to="/delegate" class="item btn delegate">Act as delegate</router-link>
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
/* p {
    padding: 30px 0 20px 0;
} */

.container {
    padding: 0 2rem;
    display: grid;
    grid-template-rows: repeat(4, 4rem);
    grid-gap: 1.5rem;
}

.item {
    display:flex;
    justify-content: center;
    align-items: center;
    max-width: 35rem;
}

.btn {
    
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
}

</style>