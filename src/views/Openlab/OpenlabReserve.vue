<template>
  <article aria-label="訪問予約ページ">
    <h1 class="heading--main">
      オープンラボ訪問予約
    </h1>
    <WelcomeUser />

    <h2 class="heading--sub">
      2021年2月15日にオープンラボを開催します。
    </h2>
    <p class="heading--sub">
      オフラインでの訪問を希望される方は希望の時間を選択してください。
    </p>
    <p class="heading--accent">
      2日前（2月13日）までこちらから予約できます。
    </p>
    <p
      v-show="error_message"
      class="heading--sub accent--text"
    >
      {{ error_message }}
    </p>

    <v-simple-table class="my-6">
      <template #default>
        <thead>
          <tr>
            <td>時間</td>
            <td>予約状況</td>
            <td />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.time"
          >
            <td>{{ item.time }}</td>
            <td>{{ item.state }} / 6</td>
            <td>
              <v-btn
                v-show="item.state < 6 && isDayBefore()"
                @click="submitReservation(item.time)"
              >
                予約する
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'

export default {
  name: 'OpenlabReserve',
  components: {
    WelcomeUser
  },
  data () {
    return {
      uid: '',
      items: [
        {
          time: '11:00',
          state: 0
        },
        {
          time: '11:30',
          state: 0
        },
        {
          time: '14:15',
          state: 0
        },
        {
          time: '16:00',
          state: 0
        },
        {
          time: '16:30',
          state: 0
        }
      ],
      error_message: ''
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid
      } else {
        this.uid = null
      }
    })

    for (const i in this.items) {
      firebase.database().ref('openlab/' + this.items[i].time).on('value', (parent) => {
        this.items[i].state = parent.numChildren()
      })
    }
  },
  methods: {
    submitReservation: function (reserveTime) {
      firebase.database().ref('reservation').once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.key === this.uid) {
            this.error_message = '既に予約があります。時間を変更したい方は先に予約をキャンセルしてください。'
          }
        })
      }).then(() => {
        if (!this.error_message) {
          this.$router.push({
            path: '/openlab/reserve/form',
            query: {
              time: reserveTime
            }
          })
        }
      })
    },

    isDayBefore () {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth() + 1
      const date = today.getDate()

      if (year === 2021) {
        if (month === 2) {
          return date < 14
        } else {
          return month < 2
        }
      } else {
        return year < 2021
      }
    }
  }
}
</script>
