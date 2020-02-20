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
        this.snackbar = {
          show: true,
          color: 'error',
          text: txt
        }
        return false
      }

      if (!response || !response.data) {
        // TODO:
        console.log('response', response)
        return false
      }
      if (response.data.status !== 200) {
        // TODO:
        console.log('response.data.status', response.data.status)
        return false
      }
      if (!response.data.data) {
        // TODO:
        console.log('response.data', response.data)
        return false
      }

      return response.data.data
    }
  }
}
