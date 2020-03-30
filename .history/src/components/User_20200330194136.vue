<template>
    <div>
        <div v-if="userEmail===''" class="loginButton"><button>Login</button></div>
        <div v-else class="loginButton"><button>Logout</button></div>
        <div>{{ userEmail }}</div>
    </div>
</template>

<script>
import aad from '../services/aad';

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