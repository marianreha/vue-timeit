<template>
    <div>
        <div class="loginButton"><button>Login</button></div>
        <div>{{ userEmail }}</div>
    </div>
</template>

<script>

export default {
    name: 'User',
    components: {

    },

    data: () => ({
        userEmail: 'neco',
    })
}
</script>

<style>
.loginButton {
    padding-top: 50px;
}
</style>