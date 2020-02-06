import axios from 'axios'

export default {
  namespaced: true,

  state: {
    token: null,
    user: null
  },

  getters: {
    isAuthenticated (state) {
      return state.token && state.user
    },

    user (state) {
      return state.user
    }
  },

  mutations: {
    setToken (state, token) {
      state.token = token
    },

    setUser (state, userSessionData) {
      state.user = userSessionData
    }
  },

  actions: {
    async logIn ({ dispatch, commit }, credentials) {
      let response = await axios.post('auth/login', credentials)
      if (!response || !response.data || (response.data.status !== 200)) {
        // TODO: some error on response
        console.log(response)
      }
      if (!response.data.data || !response.data.data.token) {
        // TODO: some error on data token
        console.log(response.data)
      }

      return dispatch('auth', response.data.data.token)
    },

    async auth ({ commit, state }, token) {
      if (token) {
        commit('setToken', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        localStorage.setItem('token', token)
      }

      if (!state.token) {
        return
      }

      try {
        let response = await axios.get('auth/me')

        if (!response || !response.data || (response.data.status !== 200)) {
          // TODO: some error on response
          console.log(response)
        }
        if (!response.data.data || !response.data.data) {
          // TODO: some error on data token
          console.log(response.data)
        }

        commit('setUser', response.data.data)
      } catch (e) {
        // alert('FAILED' + e)
        commit('setToken', null)
        axios.defaults.headers.common['Authorization'] = null
        localStorage.removeItem('token')
        commit('setUser', null)
      }
    },

    async logOut ({ commit }, credentials) {
      return axios.post('auth/logout').then(() => {
        commit('setToken', null)
        axios.defaults.headers.common['Authorization'] = null
        localStorage.removeItem('token')
        commit('setUser', null)
      })
    }
  }
}
