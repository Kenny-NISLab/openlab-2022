<template>
  <v-app-bar
    color="primary"
    app
  >
    <v-app-bar-nav-icon
      color="white"
      @click="toggle"
    />
    <v-toolbar-title class="toolbar__title">
      <h1 lang:en>
        <router-link
          to="/"
          class="white--text"
        >
          NISLAB OpenLAB
        </router-link>
      </h1>
    </v-toolbar-title>

    <v-tabs
      v-if="uid"
      role="navigation"
      aria-label="ログイン時グローバルナビ"
    >
      <v-tab
        v-for="menuItem in menuLogined"
        :key="menuItem.name"
        :to="menuItem.path"
        class="white--text"
      >
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>

    <v-tabs
      v-else
      role="navigation"
      aria-label="未ログイン時グローバルナビ"
    >
      <v-tab
        v-for="menuItem in menuLogouted"
        :key="menuItem.name"
        :to="menuItem.path"
        class="white--text"
      >
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
import firebase from '@/firebase.js'
import storeDrawer from '@/store/drawer.js'
import storeMenu from '@/store/menu.js'

export default {
  name: 'Header',
  storeDrawer,
  data () {
    return {
      uid: '',
      navDrawer: false,
    }
  },
  computed: {
    state() {
      return storeDrawer.state.navDrawer
    },
    menuLogined() {
      return storeMenu.state.menuLogined
    },
    menuLogouted() {
      return storeMenu.state.menuLogouted
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })
  },
  methods: {
    toggle() {
      storeDrawer.commit('toggle',!storeDrawer.state.navDrawer)
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  &__title {
    margin-right: 48px;
    overflow: visible;

    @media screen and (max-width: 1024px) {
      position: absolute;
      left: 50%;
      padding: 0 !important;
      margin: 0;
      transform: translateX(-50%);
    }
  }
}

@media screen and (max-width: 1024px) {
  .v-tabs {
    display: none;
  }
}
</style>
