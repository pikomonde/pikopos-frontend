import axios from 'axios'

export default {
  namespaced: true,

  getters: {

  },

  mutations: {

  },

  actions: {
    async reqData ({ dispatch, commit }, args) {
      let response
      try {
        if (args.method === 'GET') {
          response = await axios.get(args.path, { params: args.payload })
        } else if (args.method === 'POST') {
          response = await axios.post(args.path, args.payload)
        }
      } catch (e) {
        // catch for 4xxx and 5xxx errors
        let txt = e.response && e.response.data && e.response.data.data && e.response.data.data.message
        if (txt === '') {
          console.log(e.response)
          txt = 'Something bad happened! (' + e.response.status + ')'
        }
        return { success: false, snackbar: { show: true, color: 'error', text: txt } }
      }

      if (!response || !response.data) {
        // TODO:
        console.log('response', response)
        return { success: false, snackbar: { show: true, color: 'error', text: 'Failed to update data' } }
      }
      if (response.data.status !== 200) {
        // TODO:
        console.log('response.data.status', response.data.status)
        return { success: false, snackbar: { show: true, color: 'error', text: 'Failed to update data' } }
      }
      if (!response.data.data) {
        // TODO:
        console.log('response.data', response.data)
        return { success: false, snackbar: { show: true, color: 'error', text: 'Failed to update data' } }
      }

      return { success: true, data: response.data.data }
    }
  }
}
