<template>
    <div>
        <p>Please select what you want to do next:</p>
        <div class="container">
            <button class="btn">Enter working hours</button>
            <button class="btn">Enter OOO</button>
            <button class="btn btn-yellow">View report</button>
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
    padding: 40px 0 25px 0;
}

.container {
    padding-top: 0px;
    display: flex;
    flex-direction: column;
}

.btn {
    padding: 20px;
    margin-bottom: 10px;
    background-color: #009FDF;
    border: none;
}

.btn:hover {
    background-color: #006cbe;
}

.btn-yellow {
    background-color: #FFD100;
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