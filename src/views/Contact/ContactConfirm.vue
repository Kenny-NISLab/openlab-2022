<template>
  <article aria-label="問い合わせ内容確認ページ">
    <h1 class="heading--main">
      以下の内容で問い合わせしますか？
    </h1>
    <v-alert
      dense
      outlined
      type="error"
    >
      まだ問い合わせは完了していません。
    </v-alert>

    <ContactTable :contact-form="contactForm" />

    <v-btn
      class="mx-6"
      @click="backToContact()"
    >
      戻る
    </v-btn>
    <v-btn
      class="mx-6"
      @click="confirmContact()"
    >
      問い合わせする
    </v-btn>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import ContactTable from '@/components/ContactTable.vue'

export default {
  name: 'ConfirmContact',
  components: {
    ContactTable
  },
  data () {
    return {
      contactForm: {}
    }
  },
  created () {
    this.contactForm = this.$route.query.contactForm
  },
  methods: {
    confirmContact () {
      const sendMail = firebase.functions().httpsCallable('sendContact')
      sendMail(this.contactForm)

      const newPostListRef = firebase.database().ref('contact').push()
      const postListKey = newPostListRef.key
      newPostListRef.set({
        id: postListKey,
        name: this.contactForm.name,
        email: this.contactForm.email,
        studentId: this.contactForm.studentId,
        message: this.contactForm.message
      })

      this.$router.push({
        path: '/contact/verification',
        query: {
          contactForm: this.contactForm
        }
      })
    },

    backToContact () {
      this.$router.push('/contact')
    }
  }
}
</script>
