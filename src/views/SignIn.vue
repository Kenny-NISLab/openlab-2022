<template>
  <article aria-label="サインインページ">
    <h1 class="heading--main">
      ログイン
    </h1>

    <v-alert
      v-show="!isEmail"
      prominent
      border="right"
      colored-border
      type="error"
      elevation="2"
    >
      <span class="red--text">メール認証がされてないため、認証メールを再送信しました。</span><br>認証メールが再送信されない場合は時間を置いてお試しください。
    </v-alert>

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
      isEmail: true,
      email: '',
      password: ''
    }
  },
  methods: {
    userSingIn () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const currentUser = firebase.auth().currentUser;
          if(currentUser.emailVerified){
            alert('ログインしました。')
            this.$router.push('/')
          }else{
            this.isEmail=false;
            this.sendEmailVerification()
          }
        })
        .catch(() => {
          alert('メールアドレスかパスワードが間違っています。')
        })
    },
    async sendEmailVerification(){
      try {
        await firebase.auth().currentUser.sendEmailVerification();
        alert('メールアドレスが確認されていません。 ' + this.email + ' に確認メールを送信しましたので、リンクをクリックして認証してください。')
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>
