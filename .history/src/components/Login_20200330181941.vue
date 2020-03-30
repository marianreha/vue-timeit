<template>
    <div>
        <Navbar />
        <div class="loginButton"><button>Login</button></div>
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

<style scoped>
.loginButton {
    padding-top: 50%;
}
</style>