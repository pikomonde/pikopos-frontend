<template>
  <div id="nav">
    <template v-if="isAuthenticated">
      <router-link :to="{name:'dashboard'}">Dashboard</router-link> |
      <a href="#" @click.prevent="logOutMethod">Logout</a>
    </template>
    <template v-else>
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'register'}">Register</router-link> |
      <router-link :to="{name:'login'}">Login</router-link> |
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      logOut: 'auth/logOut'
    }),

    logOutMethod () {
      this.logOut().then(() => {
        this.$router.replace({
          name: 'home'
        })
      })
    }
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
