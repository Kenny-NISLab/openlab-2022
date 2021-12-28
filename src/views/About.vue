<template>
  <article aria-label="コンテンツページ">
    <section aria-label="研究室に関連するコンテンツへのリンクなど">
      <h1 class="heading--main">
        コンテンツ
      </h1>
      <h2 class="heading--sub">
        ここでは、皆様の役に立つかもしれない情報を発信します。
      </h2>

      <v-alert
        outlined
        type="warning"
        border="left"
      >
        コンテンツは随時更新する予定ですが、ぶっちゃけた話はオープンラボ当日にお話しできるかと思います！<br>みなさんの研究室選びのお役に立てるよう情報発信します！
      </v-alert>

      <v-row class="my-4">
        <v-col
          cols="12"
          sm="6"
        >
          <v-card height="100%">
            <a
              href="https://twitter.com/nislab_sato"
              target="_blank"
            >
              <v-img src="/sns/twitter01.png" />
            </a>
            <v-card-title>
              Twitter (<a
                href="https://twitter.com/nislab_sato"
                target="_blank"
              >@nislab_sato</a>) やってます！
            </v-card-title>
            <v-card-subtitle>研究室の情報発信を中心に、質問箱でいただいた質問にもお答えしています！</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card>
            <a
              href="https://nislab.doshisha.ac.jp"
              target="_blank"
            >
              <v-img src="/sns/website01.png" />
            </a>
            <v-card-title>研究室サイト運営してます！</v-card-title>
            <v-card-subtitle>研究発表についての報告などもしています。<br>近日、リニューアル予定！</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <section aria-label="よくある質問とそれに対する回答一覧">
      <h1 class="heading--main">
        よくある質問に答えます！
      </h1>
      <h2 class="heading--accent">
        質問箱でいただいた質問や例年よくいただく質問に対して、佐藤研究室の学生が回答します！<br>オープンラボではよりぶっちゃけた話をさせていただきます！
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

    <section
      aria-label="写真ギャラリー"
      class="mb-16"
    >
      <h1 class="heading--main">
        写真を一部公開！
      </h1>
      <v-row>
        <v-col
          v-for="image in images"
          :key="image"
          class="d-flex child-flex"
          md="3"
          sm="4"
          cols="6"
        >
          <v-card>
            <v-img :src="image" />
          </v-card>
        </v-col>
      </v-row>
    </section>
  </article>
</template>

<script>
export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      images: [
        '/photos/01.jpg',
        '/photos/02.jpg',
        '/photos/03.jpg',
        '/photos/04.jpg',
        '/photos/05.jpg',
        '/photos/06.jpg',
        '/photos/07.jpg',
        '/photos/08.jpg'
      ],
      questions: [
        {
          q: 'コアタイムはありますか？',
          ans: 'ありません。週1回のチームミーティングと全体ミーティング、月1回の月例発表会があるので、そこで進捗報告等を行います。主体性を持って研究室生活を送りましょう！'
        },
        {
          q: '小板研との違いを教えてください',
          ans: '同じ「ネットワーク情報システム研究室」を掲げていますが基本的に別の研究室です。部屋も分かれており研究室としての交流もほとんどないため、その辺りはご留意ください。'
        },
        {
          q: 'プログラミングが苦手なんですが大丈夫ですか？',
          ans: '苦手な人もたくさんいるので大丈夫です！プログラミングを使わない研究も多くあります。例年、研究室配属される新4年生でプログラミングが得意な人は少数派です。'
        },
        {
          q: '大学院に進学する人が多い研究室ですか？',
          ans: '例年、6〜8割程度の学生が進学しています。逆に言えば、2〜4割の学生は就職しますのでどちらの進路でもご心配なく！'
        },
        {
          q: 'コロナになってからはオンラインですか？',
          ans: '今年度（2020年度）のミーティング等は全てオンラインで行っています。研究やおしゃべりしに研究室に来る人もいるので、最近はハイブリッドミーティングをしています。来年度以降もみんなで相談して方針を決めようと思っています。'
        },
        {
          q: 'どうやって研究室を選んだらいいですか？',
          ans: '興味のある研究テーマを扱っている研究室、人や環境などのフィーリングが合いそうな研究室、この二つで選ぶ人が多い気がします。ぜひオープンラボ等で個別に相談してみてはいかがでしょうか。'
        },
        {
          q: '成績的に研究室配属が希望通りいくか不安です',
          ans: '確実な答えはできませんが、例年の傾向等はお答えできますので、ぜひオープンラボ等でご相談ください。教授推薦等も活用していただければと思います。'
        },
        {
          q: '就活は教授推薦を使っていますか？',
          ans: '佐藤研ではほとんどの学生が自由応募で就職先を決めています。もちろん、教授推薦や学校推薦を使うこともできますが、自分で応募することで選択肢が広がります！'
        },
        {
          q: 'やりたい研究が特にないのですが、成長できる研究室に行きたいです',
          ans: 'やりたい研究があって配属される人はごく少数なので大丈夫です。どの研究室でも、メンターの先輩や教授と相談してテーマを決めることになると思います。成長できそうな研究室については、オープンラボ等で色々な研究室を見て決めていただければと思います！'
        },
        {
          q: 'オープンラボでは他の研究室のこと（印象等）も教えてもらえますか？',
          ans: '研究室のことはそれぞれの研究室が一番わかっているとは思いますが、佐藤研のオープンラボでも他の研究室についての質問も可能な限りお答えさせていただく予定です。'
        }
      ]
    }
  }
}
</script>
