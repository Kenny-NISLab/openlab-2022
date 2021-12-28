<template>
  <article aria-label="サインアウトページ">
    <h1 class="heading--main">
      ログアウト
    </h1>
    <v-btn @click="singout">
      ログアウト
    </v-btn>
  </article>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'SignOut',
  components: {
  },
  methods: {
    singout () {
      firebase.auth().signOut().then(() => {
        alert('ログアウトしました。')
        this.$router.push('/')
      })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
