<template>
  <article aria-label="追加コンテンツ">
    <section aria-label="写真ギャラリー">
      <h1 class="heading--main">
        オープンラボ終了後限定の追加コンテンツをお届けします！
      </h1>
      <h2 class="heading--sub">
        オープンラボへのご参加、ありがとうございました！
      </h2>
      <v-row>
        <v-col
          v-for="image in images"
          :key="image"
          class="d-flex child-flex"
          sm="4"
          cols="6"
        >
          <v-card>
            <v-img :src="image" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section
      aria-label="研究室紹介動画をYouTubeで公開"
      class="mb-16"
    >
      <h1 class="heading--main">
        研究室紹介動画を公開しています！
      </h1>
      <v-row>
        <v-col
          class="youtube-video"
          cols="12"
        >
          <iframe
            src="https://www.youtube.com/embed/9JMPzY-NRDE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </v-col>
      </v-row>
    </section>
    <section aria-label="アンケート結果">
      <h1 class="heading--main">
        アンケート結果を公開！
      </h1>
      <v-alert
        outlined
        type="warning"
        border="left"
      >
        匿名アンケートですので、アンケートの信頼性については保証致しかねます。<br>
        また、佐藤研オープンラボに参加していただいた方を対象としていますので、偏りが出てしまうことはご了承ください。<br>
        みなさまの研究室選びの参考にしていただければと思います。<br>
        私たちがこの結果を何かに使用することは一切ございません。
      </v-alert>
      <v-row
        justify="center"
      >
        <v-col
          class="d-flex child-flex"
          sm="8"
          cols="12"
        >
          <v-card>
            <v-img src="/slido/enquete01.png" />
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section aria-label="オープンラボでいただいた質問とそれに対する回答一覧">
      <h1 class="heading--main">
        オープンラボでいただいた質問を一部紹介します！
      </h1>
      <h2 class="heading--accent">
        多くいただいた質問や、時間の関係上答えることができなかった質問などにお答えします！
      </h2>
      <v-row class="my-4">
        <v-col>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, i) in questions"
              :key="i"
            >
              <v-expansion-panel-header>{{ item.q }}</v-expansion-panel-header>
              <v-expansion-panel-content>{{ item.ans }}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ExtraContent',
  components: {},
  data () {
    return {
      images: [
        '/photos/09.png',
        '/photos/10.png',
        '/photos/11.png',
        '/photos/12.png',
        '/photos/13.png',
        '/photos/14.png',
      ],
      questions: [
        {
          q: '院生の多い研究室ってどこですか？',
          ans: '人数については各研究室でご質問いただければと思います。現在、佐藤研は学部生7名、大学院生14名となっております。'
        },
        {
          q: 'プログラミングコードがしっかり書けないとダメなイメージがあるのですが、書けなくても大丈夫なのでしょうか。',
          ans: '大丈夫です。プログラミングを使わない研究も多く行っています。'
        },
        {
          q: '研究は1人で行っていきますか？',
          ans: '共同研究を除けば、基本的に一人作業が中心です。わからないことや悩んだ時は先輩や佐藤先生に相談して一緒に解決の方法を検討します。'
        },
        {
          q: '英語は必須になりますか？',
          ans: '大学院進学の場合、英語の試験を受ける必要がありますが、難易度は高くありません。'
        },
        {
          q: '院進学の試験は難しいですか？',
          ans: '過去問等を勉強すれば、それほど難しくないと聞いています。英語以外の試験は免除の方法もあります。'
        },
        {
          q: '院進学と就職の割合はどのくらいですか？',
          ans: '例年、6〜7割程度が院進学、それ以外が就職・他大学院進学となっています。'
        },
        {
          q: '研究内容がとても難しそうで不安なのですが大丈夫でしょうか？',
          ans: '私たちも3年生の頃はそう思っていたので大丈夫です。'
        },
        {
          q: '学部生、院生それぞれ普段の課題やすべきことはどれくらいありますか？',
          ans: '学部生の場合、基本的には就活と卒論に関することのみとなります。大学院生の場合、授業の課題などもあります。'
        },
        {
          q: 'ミーティングはオンラインですか？',
          ans: '2020年度は全てオンライン（一部オフライン併用のハイブリッド開催）で行っています。来年度に関しても続行予定です。'
        },
        {
          q: '小板研と違うと聞きましたが大きな違いはなんですか？',
          ans: '基本的に全く別の研究室となります。'
        },
        {
          q: '試験の過去問とかありますか？',
          ans: 'あります。'
        },
        {
          q: '土日に研究室に行く方もいますか？',
          ans: 'います。ただし、行かないといけない、ということはないので、少人数です。'
        },
        {
          q: 'ミーティングの雰囲気はどんな感じですか？',
          ans: 'オンオフがハッキリしているので、みなさん集中していますが、ピリピリしているわけではなく、楽しく真面目にミーティングしているような雰囲気です。'
        },
        {
          q: 'ドローンを活用した研究ってできますか？？',
          ans: 'もちろん可能です。それらに必要な機材を購入することも可能です。'
        },
        {
          q: '優秀な方が多いとおっしゃってましたが、研究室に配属された後のスキルの要求は高いですか？',
          ans: '特に必要ありません。学ぼうとする意思さえあれば大丈夫です。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.youtube-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
