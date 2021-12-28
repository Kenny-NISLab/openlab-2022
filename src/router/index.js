import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import firebase from '@/firebase.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/extra',
    name: 'ExtraContent',
    component: () => import('@/views/ExtraContent.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact/Contact.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/contact/confirm',
    name: 'ContactConfirm',
    component: () => import('@/views/Contact/ContactConfirm.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/contact/verification',
    name: 'ContactVerification',
    component: () => import('@/views/Contact/ContactVerification.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/signout',
    name: 'SignOut',
    component: () => import('../views/SignOut.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/resetpass',
    name: 'ResetPassword',
    component: () => import('@/views/ResetPassword.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('@/views/MyPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/openlab/reserve',
    name: 'OpenlabReserve',
    component: () => import('@/views/Openlab/OpenlabReserve.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/openlab/reserve/form',
    name: 'OpenlabReserveForm',
    component: () => import('@/views/Openlab/OpenlabReserve/OpenlabReserveForm.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/openlab/reserve/confirm',
    name: 'OpenlabReserveConfirm',
    component: () => import('@/views/Openlab/OpenlabReserve/OpenlabReserveConfirm.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/openlab/reserve/verification',
    name: 'OpenlabReserveVerification',
    component: () => import('@/views/Openlab/OpenlabReserve/OpenlabReserveVerification.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/openlab/reserve/delete',
    name: 'OpenlabDelete',
    component: () => import('@/views/Openlab/OpenlabReserve/OpenlabDelete.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
