import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const menuLogined = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'コンテンツ',
    path: '/about'
  },
  {
    name: '追加コンテンツ',
    path: '/extra'
  },
  {
    name: 'オープンラボ訪問予約',
    path: '/openlab/reserve'
  },
  {
    name: 'マイページ',
    path: '/mypage'
  },
  {
    name: 'お問い合わせ',
    path: '/contact'
  },
  {
    name: 'ログアウト',
    path: '/signout'
  }
]

const menuLogouted = [
  {
    name: 'HOME',
    path: '/'
  },
  {
    name: 'コンテンツ',
    path: '/about'
  },
  {
    name: '追加コンテンツ',
    path: '/extra'
  },
  {
    name: 'ログイン・新規登録',
    path: '/signin'
  }
]

export default new Vuex.Store({
  state: {
    menuLogined: menuLogined,
    menuLogouted: menuLogouted
  }
})
