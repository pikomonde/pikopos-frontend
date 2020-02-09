import store from '@/store'

export default function middlewareUnprotected (to, from, next) {
  if (store.getters['auth/isAuthenticated']) {
    return next({
      name: 'dashboard'
    })
  }
  return next()
}
