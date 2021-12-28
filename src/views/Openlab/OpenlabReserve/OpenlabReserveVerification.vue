<template>
  <article aria-label="予約完了ページ">
    <h1 class="heading--main">
      予約完了
    </h1>
    <WelcomeUser />

    <h2 class="heading--sub">
      研究室訪問の仮予約が完了しました。
    </h2>
    <p class="heading--accent">
      後ほど、詳細に関する案内のメールを送信させていただきます。
    </p>

    <ReserveTable :reserve-form="reserveForm" />
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'
import ReserveTable from '@/components/ReserveTable.vue'

export default {
  name: 'VerificateReserve',
  components: {
    WelcomeUser,
    ReserveTable
  },
  data () {
    return {
      reserveForm: {
        uid: '',
        email: '',
        date: '',
        time: '',
        name: '',
        studentId: '',
        message: ''
      }
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.reserveForm.uid = user.uid
      } else {
        this.reserveForm.uid = null
      }
    })

    this.reserveForm.email = this.$route.query.email
    this.reserveForm.date = this.$route.query.date
    this.reserveForm.time = this.$route.query.time
    this.reserveForm.name = this.$route.query.name
    this.reserveForm.studentId = this.$route.query.studentId
    this.reserveForm.message = this.$route.query.message
  },
  methods: {
  }
}
</script>
