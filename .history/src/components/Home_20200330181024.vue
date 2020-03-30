<template>
    <div>
        <Navbar />
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
import Navbar from './Navbar'

export default {
    name: "Home",
    components: {
        Navbar
    }
}
</script>

<style>
p {
    padding: 40px 0 30px 0;
}

.container {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
}

.btn {
    padding: 22px;
    margin-bottom: 25px;
    background-color: #009FDF;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 20px;
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