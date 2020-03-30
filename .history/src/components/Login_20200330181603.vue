<template>
    <div>
        <Navbar />
        <button class="login-button">Login</button>
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
.login-button {
    margin-top: 50;
}
</style>