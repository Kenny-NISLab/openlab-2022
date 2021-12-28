<template>
  <article aria-label="パスワード再設定ページ">
    <h1 class="heading--main">
      パスワード再設定
    </h1>

    <v-form ref="resetPasswordForm">
      <v-text-field
        v-model="email"
        label="メールアドレス"
        :rules="emailRules"
        required
      />
      <p
        v-show="error_message !== ''"
        class="heading--sub my-3"
      >
        {{ error_message }}
      </p>
      <v-btn @click="resetPasswordUser">
        再設定メールを送信する
      </v-btn>
    </v-form>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
export default {
  name: 'ResetPassword',
  components: {
  },
  data () {
    return {
      email: '',
      emailRules: [
        v => !!v || '必須項目です',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正な形式です'
      ],
      error_message: ''
    }
  },
  methods: {
    resetPasswordUser () {
      if (this.$refs.resetPasswordForm.validate()) {
        this.error_message = ''
        firebase.auth().sendPasswordResetEmail(this.email).then(() => {
          alert(this.email + 'にメールを送信しました。')
          this.$router.push('/signin')
        }).catch(() => {
          this.error_message = '登録されたメールアドレスが存在しない可能性があります。'
        })
      } else {
        this.error_message = 'メールアドレスを正しく入力してください。'
      }
    }
  }
}
</script>
