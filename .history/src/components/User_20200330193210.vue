<template>
    <div>
        <div v-if="userEmail===blank" class="loginButton"><button>Login</button></div>
        <div>{{ userEmail }}</div>
    </div>
</template>

<script>

export default {
    name: 'User',
    components: {

    },

    data: () => ({
        userEmail: '',
    })
}
</script>

<style>
.loginButton {
    padding-top: 50px;
}
</style>