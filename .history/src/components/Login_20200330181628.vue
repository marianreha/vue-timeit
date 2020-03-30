<template>
    <div>
        <Navbar />
        <span class="login-button"><button>Login</button></span>
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