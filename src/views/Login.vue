<template>
  <v-form @submit.prevent="submit">
    <v-container>
      <v-row dense justify="center">
        <v-col cols="6">
          <v-container>
            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="company_username"
                  v-model="form.company_username"
                  label="Store Name"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="employee_identifier"
                  v-model="form.employee_identifier"
                  label="Email"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="password"
                  v-model="form.password"
                  label="Password"
                  :rules="[rules.required]"
                  :type="showPass ? 'text' : 'password'"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-btn dark class="red" type="submit">
                Log In
              </v-btn>
            </v-row>

          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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
      showPass: false,

      form: {
        company_username: 'toko_bunga_03',
        employee_identifier: 'nugraha.alim@gmail.com',
        password: 'ABC5dasar'
      },

      rules: {
        required: value => !!value || 'Required'
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
