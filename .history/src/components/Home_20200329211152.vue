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
    margin-bottom: 10px;
    background-color: #009FDF;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
}

.btn:hover {
    background-color: #006cbe;
}

.btn-yellow {
    background-color: #FFD100;
}

.btn-delegate {
    background-color: #888B8D;
    margin-top: 40px;
}


/* .buttons {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    max-width: 700px;
    text-align: center;
}

.buttons span {
    padding: 25px 20% 25px 20%;
    color: #ffffff;
    font-weight: bold;
    margin: 5px;
}



    
} */

/* .btn-group {
    display: block;
    padding: 0 10%;
    width: 120%;
    justify-content: left;
}

.btn-group button {
    padding: 25px;
} */

</style>