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
    beforeEnter: (t, f, n) => { this.middlewareUnprotected(t, f, n) }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: (t, f, n) => { this.middlewareUnprotected(t, f, n) }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (t, f, n) => { this.middlewareUnprotected(t, f, n) }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/ingredient/library',
    name: 'ingredient_library',
    component: IngredientLibrary,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/ingredient/category',
    name: 'ingredient_category',
    component: IngredientCategory,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/ingredient/recipe',
    name: 'ingredient_recipe',
    component: IngredientRecipe,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/product/library',
    name: 'product_library',
    component: ProductLibrary,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/product/category',
    name: 'product_category',
    component: ProductCategory,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/product/modifier',
    name: 'product_modifier',
    component: ProductModifier,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/employees/slot',
    name: 'employee_slot',
    component: EmployeeSlot,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/employees/role',
    name: 'employee_role',
    component: EmployeeRole,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/employees/pin',
    name: 'employee_pin',
    component: EmployeePIN,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/store/account',
    name: 'store_account',
    component: StoreAccount,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/store/outlet',
    name: 'store_outlet',
    component: StoreOutlet,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  },
  {
    path: '/store/plan',
    name: 'store_plan',
    component: StorePlan,
    beforeEnter: (t, f, n) => { this.middlewareProtected(t, f, n) }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  middlewareProtected (to, from, next) {
    if (!store.getters['auth/isAuthenticated']) {
      return next({
        name: 'login'
      })
    }
    next()
  },
  middlewareUnprotected (to, from, next) {
    if (store.getters['auth/isAuthenticated']) {
      return next({
        name: 'dashboard'
      })
    }
    next()
  }
})

export default router
