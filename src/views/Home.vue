<template>
  <article aria-label="トップページ">
    <section aria-label="オープンラボの概要">
      <h1 class="heading--main">
        <time datetime="2021-02-15">2021年2月15日(月)</time> NISLAB オープンラボ 開催！
      </h1>
      <WelcomeUser />

      <v-row class="my-6">
        <v-col
          cols="12"
          md="6"
        >
          <v-card>
            <v-img :src="image" />
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
          align-self="center"
        >
          <p>こんにちは！<br>ネットワーク情報システム研究室（<span class="text--bold">NISLAB</span>） 佐藤研究室です。</p>
          <p>学部3年生を中心とした（1・2年生も大歓迎！）在学生の皆さんに向けた<span class="accent--text">オープンラボを<time datetime="2021-02-15">2021年2月15日(月)</time>に開催します</span>。</p>
          <p>当日は、zoomを用いたオンライン開催と現地でのオフライン開催のハイブリッド開催を予定しています。</p>
          <p>当日は十分な予防対策を行うことはもちろんのこと、事前の状況を見てプログラムの変更も想定しています。</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-alert
            border="right"
            colored-border
            type="success"
            elevation="2"
          >
            <a href="#home-zoom">オンライン開催 zoom の ID/Password を公開しました！</a>
          </v-alert>
        </v-col>
        <v-col cols="12">
          <v-alert
            border="right"
            colored-border
            type="error"
            elevation="2"
          >
            オフラインでの研究室訪問を希望される方は<router-link to="/openlab/reserve">
              予約が必要
            </router-link>です。必ずご確認ください。
          </v-alert>
        </v-col>
      </v-row>

      <v-row v-show="!uid">
        <v-col cols="12">
          <v-alert
            border="right"
            colored-border
            type="warning"
            elevation="2"
          >
            質問や相談等の<router-link to="/contact">
              お問い合わせ
            </router-link>は、ログインしていただくことでご利用いただけます。
          </v-alert>
        </v-col>
      </v-row>
    </section>

    <section aria-label="当日のタイムスケジュールについて">
      <h1 class="heading--main">
        タイムスケジュール
      </h1>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="8"
        >
          <v-timeline dense>
            <v-timeline-item
              v-for="(time, i) in times"
              :key="i"
              color="primary"
              small
            >
              <v-card>
                <v-card-title>{{ time.time }}</v-card-title>
                <v-card-subtitle class="font-weight-bold accent--text">
                  {{ time.place }}
                </v-card-subtitle>
                <v-card-text>{{ time.message }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </section>

    <section aria-label="オープンラボの開催にあたってオンライン/オフラインの要領">
      <h1 class="heading--main">
        オープンラボ要領
      </h1>
      <h2 class="heading--accent">
        今年度のオープンラボはオンライン/オフラインのハイブリッド開催をします
      </h2>
      <p class="heading--min mx-2 my-2">
        それぞれ時間が異なりますので、両方参加していただくことも可能です。<br>3年生だけでなく、1/2年生も大歓迎ですので是非ご参加ください！
      </p>

      <v-row class="my-6">
        <!-- オンライン開催 -->
        <v-col
          cols="12"
          md="6"
        >
          <v-card>
            <v-card-title><b>オンライン開催</b></v-card-title>
            <v-card-subtitle>zoomを利用して開催します。<br>どなたでも気軽に参加いただけます。</v-card-subtitle>
            <v-divider class="mx-3" />
            <v-card-title>プログラム</v-card-title>
            <v-card-subtitle>研究室紹介や例年よく出る質問などを紹介し、参加してくださるみなさんの質問等にもお答えします。<br>希望者には、ブレイクアウトルームを用いた相談会なども開催予定です。</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>研究室紹介</li>
                <ul>
                  <li>研究内容や学ぶ内容について</li>
                  <li>研究室での生活について</li>
                  <li>先輩がどうやって研究室を選んだのか</li>
                </ul>
                <li>質疑応答</li>
                <ul>
                  <li>例年よくでる質問</li>
                  <li>皆さんからの質問対応</li>
                </ul>
                <li>相談会</li>
              </ul>
            </v-card-text>
            <v-card-title>開催時間</v-card-title>
            <v-card-subtitle><b>13:00</b>と<b>15:00</b>の2回開催します。<br>50分程度を予定していますが、途中参加/退出も大歓迎です！<br>zoomはビデオをオンにする必要はありません。<br>聞くだけでも大歓迎ですのでぜひご参加ください。</v-card-subtitle>
            <v-card-title id="home-zoom">
              参加方法
            </v-card-title>
            <v-card-subtitle>前日までにzoomの参加URLを下記に記載しますのでそちらから参加ください。</v-card-subtitle>
            <v-card-text>
              <v-card class="pa-2 text-center">
                <v-simple-table dense>
                  <template #default>
                    <tbody>
                      <tr>
                        <th
                          colspan="2"
                          class="text-center"
                        >
                          [ 13:00 - 14:00 ]
                        </th>
                      </tr>
                      <tr>
                        <td>Zoom ID</td>
                        <td class="text--bold">
                          850 4659 0994
                        </td>
                      </tr>
                      <tr>
                        <td>Password</td>
                        <td class="text--bold">
                          852830
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card-text>
            <v-card-text>
              <v-card class="pa-2 text-center">
                <v-simple-table dense>
                  <template #default>
                    <tbody>
                      <tr>
                        <th
                          colspan="2"
                          class="text-center"
                        >
                          [ 15:00 - 16:00 ]
                        </th>
                      </tr>
                      <tr>
                        <td>Zoom ID</td>
                        <td class="text--bold">
                          826 2828 9180
                        </td>
                      </tr>
                      <tr>
                        <td>Password</td>
                        <td class="text--bold">
                          437956
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- オフライン開催 -->
        <v-col
          cols="12"
          md="6"
        >
          <v-card height="100%">
            <v-card-title><b>オフライン開催</b></v-card-title>
            <v-card-subtitle>研究室に直接訪問し、雰囲気等を味わっていただけます。<br>感染対策を十分に行った上で実施します。</v-card-subtitle>
            <v-divider class="mx-3" />
            <v-card-title>プログラム</v-card-title>
            <v-card-subtitle>訪問してくださる皆さんとの会話を大切にし、皆さんの研究室配属（それ以外の内容も大歓迎！）に関する相談などを受け付けます。<br>簡単な研究室紹介や例年よく出る質問などを紹介し、参加してくださるみなさんの質問等にもお答えします。</v-card-subtitle>
            <v-card-text>
              <ul>
                <li>相談会</li>
                <li>質疑応答</li>
                <li>研究室紹介</li>
                <ul>
                  <li>研究室の様子や過ごし方について</li>
                  <li>先輩がどうやって研究室を選んだのか</li>
                  <li>就職活動の進め方</li>
                </ul>
              </ul>
            </v-card-text>
            <v-card-title>開催時間</v-card-title>
            <v-card-subtitle><b>11:00</b>・<b>11:30</b>・<b>14:15</b>・<b>16:00</b>・<b>16:30</b>の5回に分けて開催します。<br>感染対策として、各回の定員を6名とさせていただき<u>完全予約制</u>にて実施させていただきます。<br>実際に研究室生活を送ることになる部屋の様子や雰囲気を知ってもらうだけでなく、様々なお話をしたいと思っています。<br>「ちょっと話を聞いてみたいだけなんだけど…」という方もぜひご予約ください！</v-card-subtitle>
            <v-card-title>開催場所</v-card-title>
            <v-card-subtitle>
              同志社大学 京田辺キャンパス 恵喜館115号室 (KE-115)<br><a
                href="https://www.doshisha.ac.jp/information/campus/kyotanabe/kyotanabe.html"
                target="_blank"
              >キャンパスマップ</a>：紫苑館食堂の奥の建物です。
            </v-card-subtitle>
            <v-card-title>参加方法</v-card-title>
            <v-card-subtitle>
              2日前までに<router-link to="/openlab/reserve">
                こちら(ログインが必要です)
              </router-link>から参加を希望する時間の予約を行ってください。<br>各回の定員を6名とさせていただいておりますので、ご希望の方はお早めにご予約ください。
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </article>
</template>

<script>
import firebase from '@/firebase.js'
import WelcomeUser from '@/components/WelcomeUser.vue'
export default {
  name: 'Home',
  components: {
    WelcomeUser
  },
  data () {
    return {
      uid: '',
      model: 0,
      image: '/carousel/slider03.jpg',
      times: [
        {
          time: '11:00 - (11:30) / 11:30 - (12:00)',
          place: 'オフライン（現地）開催',
          message: '完全予約制となりますのでご注意ください。'
        },
        {
          time: '13:00 - (13:50)',
          place: 'オンライン（zoom）開催',
          message: ''
        },
        {
          time: '14:15 - (14:45)',
          place: 'オフライン（現地）開催',
          message: '完全予約制となりますのでご注意ください。'
        },
        {
          time: '15:00 - (15:50)',
          place: 'オンライン（zoom）開催',
          message: ''
        },
        {
          time: '16:00 - (16:30) / 16:30 - (17:00)',
          place: 'オフライン（現地）開催',
          message: '完全予約制となりますのでご注意ください。'
        }
      ]
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
  }
}
</script>
