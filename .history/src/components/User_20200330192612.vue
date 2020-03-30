<template>
    <div>
        <div class="loginButton"><button>Login</button></div>
        <div>{{ userEmail }}</div>
    </div>
</template>

<script>
// import Navbar from './Navbar';

export default {
    name: 'User',
    components: {
    },

    data() {
        userEmail: 'neco@neco.com'
    }
}
</script>

<style>
.loginButton {
    padding-top: 100px;
}
</style>