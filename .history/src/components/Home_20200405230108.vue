<template>
    <div>
        <side></side>
        <div class="container">
            <div class="item info"><p>Please select what you want to do next:</p></div>
            <router-link to="/enter_hours" class="item btn blue">Enter working hours</router-link>
            <router-link to="/enter_ooo" class="item btn blue">Enter out of work/training</router-link>
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

.container {
    padding: 1rem 2rem;
    display: grid;
    grid-template-rows: repeat(6, 3.4rem);
    grid-gap: 1.4rem;
}

.item {
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
}

.info {
    align-items: flex-end;
    margin-top: 4rem;
}

.btn {
    color: #ffffff;
}

.btn:hover {
    background-color: #006cbe;
}

.blue {
    background-color: #009FDF;
}

.yellow {
    background-color: #FFD100;
}

.delegate {
    background-color: #888B8D;
    grid-row-start: 6;
}

@media only screen and (min-width: 480px) {

    .container {
        grid-template-columns: auto 25rem auto;
    }

    .item {
        grid-column-start: 2;
    }

}

</style>