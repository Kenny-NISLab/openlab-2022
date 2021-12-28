<template>
  <article aria-label="アカウント作成ページ">
    <h1 class="heading--main">
      アカウント作成
    </h1>

    <v-form ref="createAccountForm">
      <v-text-field
        v-model="email"
        label="メールアドレス"
        :rules="emailRules"
        required
      />
      <v-text-field
        v-model="password"
        type="password"
        label="パスワード"
        :rules="passwordRules"
        required
      />
      <v-text-field
        v-model="confirm_password"
        type="password"
        label="パスワードを再入力してください"
        :rules="confirm_passwordRules"
        required
      />
      <p
        v-show="error_message !== ''"
        class="heading--sub my-3"
      >
        {{ error_message }}
      </p>
      <v-btn @click="createUserAccount">
        アカウントを作成する
      </v-btn>
    </v-form>
  </article>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'SignUp',
  components: {
  },
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || '必須項目です',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正な形式です'
      ],
      password: '',
      passwordRules: [
        v => !!v || '必須項目です',
        v => v.length >= 8 || 'パスワードが短すぎます'
      ],
      confirm_password: '',
      confirm_passwordRules: [
        v => v === this.password || 'パスワードが一致しません'
      ],
      error_message: ''
    }
  },
  methods: {
    createUserAccount () {
      if (this.$refs.createAccountForm.validate()) {
        this.error_message = ''
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('アカウントを作成しました。 ' + this.email + ' に確認メールを送信しましたので、リンクをクリックして認証してください。')
            firebase.auth().languageCode = 'ja'
            firebase.auth().currentUser.sendEmailVerification().then(() => {
              this.$router.push('/')
            })
          })
          .catch((error) => {
            alert('Error: 既に登録されている可能性があります。')
            console.error(error.message)
          })
      } else {
        this.error_message = 'メールアドレスとパスワードを正しく入力してください。'
      }
    }
  }
}
</script>
