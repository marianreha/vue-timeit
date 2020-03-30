<template>
    <div>
        <Navbar />
        <div class="logButton"><button>Login</button></div>
    </div>
</template>

<script>
import Navbar from './Navbar';

export default {
    name: 'Login',
    components: {
        Navbar,
    }
}
</script>

<style>
.logButton {
    padding-top: 40%;
}
</style>