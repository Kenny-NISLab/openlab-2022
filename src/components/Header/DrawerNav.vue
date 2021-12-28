<template>
  <v-navigation-drawer
    v-model="navDrawer"
    app
    aria-label="ドロワーナビ"
  >
    <v-list nav>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>NISLAB OpenLAB</v-list-item-title>
          <v-list-item-subtitle>ネットワーク情報システム研究室<br>佐藤研究室</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item-group v-if="uid">
        <v-list-item
          v-for="menuItem in menuLogined"
          :key="menuItem.name"
          :to="menuItem.path"
        >
          <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>

      <v-list-item-group v-else>
        <v-list-item
          v-for="menuItem in menuLogouted"
          :key="menuItem.name"
          :to="menuItem.path"
        >
          <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import firebase from '@/firebase.js'
import storeDrawer from '@/store/drawer.js'
import storeMenu from '@/store/menu.js'

export default {
  name: 'DrawerNav',
  data () {
    return {
      uid: '',
    }
  },
  computed: {
    navDrawer: {
      get() {
        return storeDrawer.state.navDrawer
      },
      set(val) {
        storeDrawer.commit('toggle', val)
      },
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
}
</script>
