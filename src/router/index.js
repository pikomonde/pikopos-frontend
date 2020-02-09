import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import IngredientLibrary from '../views/ingredients/IngredientLibrary.vue'
import IngredientCategory from '../views/ingredients/IngredientCategory.vue'
import IngredientRecipe from '../views/ingredients/IngredientRecipe.vue'
import ProductLibrary from '../views/products/ProductLibrary.vue'
import ProductCategory from '../views/products/ProductCategory.vue'
import ProductModifier from '../views/products/ProductModifier.vue'
import EmployeeSlot from '../views/employees/EmployeeSlot.vue'
import EmployeeRole from '../views/employees/EmployeeRole.vue'
import EmployeePIN from '../views/employees/EmployeePIN.vue'
import StoreAccount from '../views/store/StoreAccount.vue'
import StoreOutlet from '../views/store/StoreOutlet.vue'
import StorePlan from '../views/store/StorePlan.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        return next({
          name: 'dashboard'
        })
      }
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        return next({
          name: 'dashboard'
        })
      }
      next()
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.getters['auth/isAuthenticated']) {
        return next({
          name: 'dashboard'
        })
      }
      next()
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/ingredient/library',
    name: 'ingredient_library',
    component: IngredientLibrary,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/ingredient/category',
    name: 'ingredient_category',
    component: IngredientCategory,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/ingredient/recipe',
    name: 'ingredient_recipe',
    component: IngredientRecipe,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/product/library',
    name: 'product_library',
    component: ProductLibrary,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/product/category',
    name: 'product_category',
    component: ProductCategory,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/product/modifier',
    name: 'product_modifier',
    component: ProductModifier,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/employees/slot',
    name: 'employee_slot',
    component: EmployeeSlot,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/employees/role',
    name: 'employee_role',
    component: EmployeeRole,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/employees/pin',
    name: 'employee_pin',
    component: EmployeePIN,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/store/account',
    name: 'store_account',
    component: StoreAccount,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/store/outlet',
    name: 'store_outlet',
    component: StoreOutlet,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  },
  {
    path: '/store/plan',
    name: 'store_plan',
    component: StorePlan,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        return next({
          name: 'login'
        })
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
