<template>
  <form @submit.prevent="submit">
    <div>
      <label for="company_username">
        Store Name
      </label> <br/>
      <input type="text" name="company_username" id="company_username" v-model="form.company_username">
    </div> <br/>

    <div>
      <label for="employee_identifier">
        Email
      </label> <br/>
      <input type="email" name="employee_identifier" id="employee_identifier" v-model="form.employee_identifier">
    </div> <br/>

    <div>
      <label for="password">
        Password
      </label> <br/>
      <input type="password" name="password" id="password" v-model="form.password">
    </div> <br/>

    <div>
      <button type="submit">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  components: {
    //
  },
  data () {
    return {
      form: {
        company_username: 'toko_bunga_03',
        employee_identifier: 'nugraha@gmail.com',
        password: 'ABC5dasar'
      }
    }
  },
  methods: {
    ...mapActions({
      logIn: 'auth/logIn'
    }),

    submit () {
      this.logIn(this.form).then(() => {
        this.$router.replace({
          name: 'dashboard'
        })
      }).catch(() => {
        // TODO: handle error
      })
    }
  }
}
</script>
