<template>
  <v-container>
    <v-row>
      Employee Slot
    </v-row>
    <v-row>
      <v-col :cols="isEdit ? 6 : 12">
        <v-data-table
          :single-select="true"
          :headers="headers"
          :items.sync="items"
          :server-items-length="totalItems"
          class="elevation-1"
          @click:row="onRowClick"
        >
          <!-- <template>
            <tr v-bind:class="{}">
              <td>Woo</td>
            </tr>
          </template> -->
        </v-data-table>
      </v-col>

      <v-col :cols="6" v-if="isEdit">
        <v-form @submit.prevent="updateData">
          <v-container>
            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="full_name"
                  v-model="formUpdate.full_name"
                  label="Full Name"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="email"
                  v-model="formUpdate.email"
                  label="Email"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="phone_number"
                  v-model="formUpdate.phone_number"
                  label="Phone Number"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-col cols="4">
                <v-text-field
                  name="role_id"
                  v-model="formUpdate.role_id"
                  label="Role"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row dense justify="center">
              <v-btn dark class="red" type="submit">
                Update
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar.show" bottom right
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      <div v-text="snackbar.text"></div>
      <v-btn dark text @click="snackbar.show = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isEdit: false,
      totalItems: 0,
      selectedID: 0,
      snackbarShow: false,
      snackbarText: '',
      items: [],

      snackbar: {
        show: false,
        color: 'success',
        timeout: 6000,
        text: ''
      },

      headers: [
        { text: 'Full Name', value: 'full_name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone Number', value: 'phone_number' },
        { text: 'Role', value: 'role_name' },
        // { text: 'Outlet', value: 'outlet' },
        { text: 'Status', value: 'status' }
      ],

      formList: {
        p: 1, // page
        l: 10 // limit
      },

      formUpdate: {
        id: 0,
        full_name: '',
        email: '',
        phone_number: '',
        role_id: 0
      }
    }
  },

  mounted () {
    this.getDataList()
  },

  methods: {
    ...mapActions({
      reqData: 'basicRequest/reqData'
    }),

    getDataList () {
      this.reqData({
        method: 'GET',
        path: 'employee/list',
        payload: this.formList
      }).then((data) => {
        // if server returns data null
        if (!data.success) {
          if (!data.success.snackbar) {
            this.snackbar = data.snackbar
            return
          }
          this.snackbar = { show: true, color: 'error', text: 'Failed to update data' }
          return
        }

        this.totalItems = data.data.count
        this.items = data.data.employees
      })
    },

    onRowClick (_, data) {
      // toggle edit panel and set selectedID
      if (data.item.id === this.selectedID) {
        this.selectedID = 0
        this.isEdit = false
      } else {
        this.selectedID = data.item.id
        this.isEdit = true
      }

      // fill the form on the edit panel
      if (this.isEdit) {
        this.formUpdate.id = data.item.id
        this.formUpdate.full_name = data.item.full_name
        this.formUpdate.email = data.item.email
        this.formUpdate.phone_number = data.item.phone_number
        this.formUpdate.role_id = data.item.role_id
      }
    },

    updateData () {
      this.reqData({
        method: 'POST',
        path: 'employee/update',
        payload: this.formUpdate
      }).then((data) => {
        // if server returns data null
        if (!data.success) {
          this.snackbar = data.snackbar
          return
        }

        this.snackbar = { show: true, color: 'success', text: data.data.row_updated + ' data is updated' }
        this.getDataList()
      })
    }
  }
}
</script>
