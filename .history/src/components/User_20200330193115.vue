<template>
    <div>
        <div class="loginButton"><button>Login</button></div>
        <div></div>
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