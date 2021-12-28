<template>
  <p
    v-show="useremail"
    class="header--min aling-right"
  >
    ようこそ {{ useremail }} さん
  </p>
</template>

<script>
import firebase from '../firebase.js'

export default {
  name: 'WelcomeUser',
  data () {
    return {
      useremail: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.useremail = user.email
      } else {
        this.useremail = null
      }
    })
  }
}
</script>

<style scoped>
.aling-right {
  text-align: right;
}
</style>
