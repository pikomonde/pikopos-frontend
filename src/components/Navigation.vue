<template>
  <!-- <div id="nav">
    <template v-if="isAuthenticated">
      <router-link :to="{name:'dashboard'}">Dashboard</router-link> |
      <a href="#" @click.prevent="logOutMethod">Logout</a>
    </template>
    <template v-else>
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'register'}">Register</router-link> |
      <router-link :to="{name:'login'}">Login</router-link> |
    </template>
  </div> -->
  <nav>
    <v-app-bar flat app color="blue lighten-4" v-if="!isAuthenticated">
      <v-toolbar-title class="grey--text text--darken-2">
        <span class="font-weight-light">Piko</span>
        <span class="font-weight-bold">POS</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn outlined class="grey--text text--darken-2" :to="{name:'login'}">
        <span>Log In</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark app v-if="isAuthenticated">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="menu in menus" :key="menu.title" link>
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div>
          <v-btn block @click.prevent="logOutMethod">
            <span>Log Out</span>
            <v-icon right>exit_to_app</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
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

  data () {
    return {
      menus: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' }
      ]
    }
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
