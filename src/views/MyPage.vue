<template>
  <article aria-label="マイページ">
    <section aria-label="予約の確認・キャンセルが可能">
      <h1 class="heading--main">
        マイページ
      </h1>
      <WelcomeUser />

      <h2
        v-show="titleMessage"
        class="heading--sub my-6"
      >
        {{ titleMessage }}
      </h2>
      <p class="heading--accent">
        予約は3日前までキャンセルできます。それ以降は直接お問い合わせください。
      </p>

      <ReserveTable
        v-for="openlabReservation in myOpenlabReservation"
        :key="`first-${openlabReservation.id}`"
        :reserve-form="openlabReservation"
      />
      <v-btn
        v-for="openlabReservation in myOpenlabReservation"
        v-show="isThreeDaysBefore(openlabReservation.date)"
        :key="`second-${openlabReservation.id}`"
        class="mb-6 ml-6"
        @click="deleteOpenlabReservation(openlabReservation)"
      >
        この予約をキャンセルする
      </v-btn>
    </section>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'
import ReserveTable from '@/components/ReserveTable.vue'

export default {
  name: 'Mypage',
  components: {
    WelcomeUser,
    ReserveTable
  },
  data () {
    return {
      uid: '',
      times: ['11:00', '11:30', '13:00', '13:30', '14:00', '14:15', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
      myOpenlabReservation: [],
      titleMessage: ''
    }
  },
  async created () {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })

    this.titleMessage = 'オープンラボ訪問の予約情報'
    this.myOpenlabReservation = []

    for (const i in this.times) {
      await firebase.database().ref('openlab/' + this.times[i]).orderByChild('uid').equalTo(this.uid).on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          this.myOpenlabReservation.push(childSnapshot.val())
        })
      })
    }
  },
  methods: {
    deleteOpenlabReservation: function (targetReservation) {
      this.$router.push({
        path: '/openlab/reserve/delete',
        query: {
          reservation: targetReservation
        }
      })
    },

    isThreeDaysBefore: function (targetDate) {
      const arr = targetDate.split('-')
      const day1 = new Date(arr[0], arr[1], arr[2])
      const year1 = day1.getFullYear()
      const month1 = day1.getMonth()
      const date1 = day1.getDate()

      const day2 = new Date()
      const year2 = day2.getFullYear()
      const month2 = day2.getMonth() + 1
      const date2 = day2.getDate() + 2

      if (year1 === year2) {
        if (month1 === month2) {
          return date1 > date2
        } else {
          return month1 > month2
        }
      } else {
        return year1 > year2
      }
    }
  }
}
</script>
