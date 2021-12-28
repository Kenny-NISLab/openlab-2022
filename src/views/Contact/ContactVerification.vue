<template>
  <article aria-label="問い合わせ完了ページ">
    <h1 class="heading--main">
      問い合わせ完了
    </h1>
    <WelcomeUser />

    <h2 class="heading--sub">
      問い合わせが完了しました。
    </h2>
    <p class="heading--accent">
      後ほど、メールにてご回答させていただきます。
    </p>

    <ContactTable :contact-form="contactForm" />
  </article>
</template>

<script>
import WelcomeUser from '@/components/WelcomeUser.vue'
import ContactTable from '@/components/ContactTable.vue'

export default {
  name: 'ContactVerification',
  components: {
    WelcomeUser,
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
  }
}
</script>
