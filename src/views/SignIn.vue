<template>
  <article aria-label="サインインページ">
    <h1 class="heading--main">
      ログイン
    </h1>

    <v-form>
      <v-text-field
        v-model="email"
        label="メールアドレス"
        required
      />
      <v-text-field
        v-model="password"
        type="password"
        label="パスワード"
        required
      />
      <v-btn @click="userSingIn">
        ログイン
      </v-btn>
    </v-form>

    <v-row
      class="mt-6"
      justify="center"
    >
      <p>
        アカウントをお持ちでない方は <router-link to="/signup">
          こちらから新規登録
        </router-link>
      </p>
    </v-row>
    <v-row justify="center">
      <p>
        パスワードを忘れた方は <router-link to="/resetpass">
          こちらから再設定
        </router-link>
      </p>
    </v-row>
  </article>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'SignIn',
  components: {
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    userSingIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインしました。')
          this.$router.push('/')
        })
        .catch(() => {
          alert('メールアドレスかパスワードが間違っています。')
        })
    }
  }
}
</script>
