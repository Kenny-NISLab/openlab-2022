<template>
  <article aria-label="予約確認ページ">
    <h1 class="heading--main">
      以下の日時・情報で予約しますか？
    </h1>
    <v-alert
      dense
      outlined
      type="error"
    >
      まだ予約は完了していません。
    </v-alert>

    <ReserveTable :reserve-form="reserveForm" />

    <v-btn
      class="mx-6"
      @click="backToReservation()"
    >
      戻る
    </v-btn>
    <v-btn
      class="mx-6"
      @click="confirmReservation()"
    >
      予約する
    </v-btn>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import ReserveTable from '@/components/ReserveTable.vue'

export default {
  name: 'ConfirmReserve',
  components: {
    ReserveTable
  },
  data () {
    return {
      reserveForm: {
        uid: '',
        email: '',
        today: '',
        date: '',
        time: '',
        name: '',
        studentId: '',
        message: ''
      },
      sumReserve: 0
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.reserveForm.uid = user.uid
        this.reserveForm.email = user.email
      } else {
        this.reserveForm.uid = null
        this.reserveForm.email = null
      }
    })

    this.reserveForm.time = this.$route.query.time
    this.reserveForm.name = this.$route.query.name
    this.reserveForm.date = this.$route.query.date
    this.reserveForm.studentId = this.$route.query.studentId
    this.reserveForm.message = this.$route.query.message
  },
  methods: {
    confirmReservation () {
      firebase.database().ref('openlab/' + this.reserveForm.time).on('value', (parent) => {
        this.sumReserve = parent.numChildren()
      })
      if (this.sumReserve < 6) {
        const sendMail = firebase.functions().httpsCallable('sendReservation')
        sendMail(this.reserveForm)

        const newPostListRef = firebase.database().ref('openlab/' + this.reserveForm.time).push()
        const postListKey = newPostListRef.key
        newPostListRef.set({
          id: postListKey,
          uid: this.reserveForm.uid,
          email: this.reserveForm.email,
          today: this.getToday(),
          date: '2021-02-15',
          time: this.reserveForm.time,
          name: this.reserveForm.name,
          studentId: this.reserveForm.studentId,
          message: this.reserveForm.message
        })

        firebase.database().ref('reservation/' + this.reserveForm.uid).set({
          id: postListKey,
          uid: this.reserveForm.uid,
          email: this.reserveForm.email,
          today: this.getToday(),
          date: '2021-02-15',
          time: this.reserveForm.time,
          name: this.reserveForm.name,
          studentId: this.reserveForm.studentId,
          message: this.reserveForm.message
        })

        alert('研究室訪問の予約を受け付けました。')

        this.$router.push({
          path: '/openlab/reserve/verification',
          query: {
            email: this.reserveForm.email,
            date: this.reserveForm.date,
            time: this.reserveForm.time,
            name: this.reserveForm.name,
            studentId: this.reserveForm.studentId,
            message: this.reserveForm.message
          }
        })
      } else {
        alert('エラーが発生しました。予約をやり直してください。')
        this.$router.push('/openlab/reserve')
      }
    },

    backToReservation () {
      this.$router.push('/openlab/reserve')
    },

    getToday () {
      const date = new Date()
      date.setTime(date.getTime() + 9 * 60 * 60 * 1000)
      return date.toISOString().substr(0, 19)
    }
  }
}
</script>
