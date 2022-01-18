<template>
  <article aria-label="予約キャンセルページ">
    <h1 class="heading--main">
      以下の予約をキャンセルしますか？
    </h1>

    <ReserveTable :reserve-form="reservation" />

    <v-btn
      class="mx-6"
      @click="backToReservation"
    >
      戻る
    </v-btn>
    <v-btn
      class="mx-6"
      @click="confirmDeleteOpenlabReservation"
    >
      キャンセルする
    </v-btn>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import ReserveTable from '@/components/ReserveTable.vue'

export default {
  name: 'ConfirmOpenlabDelete',
  components: {
    ReserveTable
  },
  data () {
    return {
      uid: '',
      reservation: ''
    }
  },
  created () {
    this.reservation = this.$route.query.reservation
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })
  },
  methods: {
    confirmDeleteOpenlabReservation () {
      firebase.database().ref('reservation/' + this.uid).remove()
      firebase.database().ref('openlab/' + this.reservation.time + '/' + this.reservation.id).remove().then(() => {
        alert('予約をキャンセルしました。')
        this.$router.push('/mypage')
      })
    },

    backToReservation () {
      this.$router.push('/mypage')
    }
  }
}
</script>
