<template>
  <v-app>
    <v-content>
      <Navigation />
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
