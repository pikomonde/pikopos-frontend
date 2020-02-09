import store from '@/store'

export default function middlewareProtected (to, from, next) {
  if (!store.getters['auth/isAuthenticated']) {
    return next({
      name: 'login'
    })
  }
  return next()
}
