<template>
    <div>
        <div v-if="userEmail===''" @click="login()" class="loginButton"><button>Login</button></div>
        <div v-else @click="logout()" class="loginButton"><button>Logout</button></div>
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
    }),

    created() {
    aad.getAccount().then((account) => {
      if(account !== null) {
        this.userEmail = account.userName;
      }
    });
    },

    methods: {

        login() {
        aad.login().then((account) => {
            this.userEmail = account.userName;
        });
        },

        logout() {
        aad.logout();
        }

        
    }
}
</script>

<style>
.loginButton {
    padding-top: 50px;
}
</style>