<template>
    <div>
        <p>Please select what you want to do next:</p>
        <div class="container">
            <router-link to="/enter_hours" class="router-items"><button class="btn">Enter working hours</button></router-link>
            <router-link to="/enter_ooo" class="router-items"><button class="btn">Enter out of work/training</button></router-link>
            <router-link to="/report" class="router-items"><button class="btn btn-yellow">View report</button></router-link>
            <router-link to="/delegate" class="router-items"><button class="btn btn-delegate">Act as delegate</button></router-link>
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
    padding: 0 30px;
    display: flex;
    flex-direction: column;
}

.router-items {
    margin-top: 12px;
    margin-bottom: 12px;
    width: auto;
}

.btn {
    padding: 20px;
    background-color: #009FDF;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    width: 17rem;
}

.btn:hover {
    background-color: #006cbe;
}

.btn-yellow {
    background-color: #FFD100;
}

.btn-delegate {
    background-color: #888B8D;
    margin-top: 60px;
}

</style>