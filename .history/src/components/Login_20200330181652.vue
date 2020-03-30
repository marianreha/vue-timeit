<template>
    <div>
        <Navbar />
        <div class="login"><button>Login</button></div>
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
.login {
    margin-top: 50;
}
</style>