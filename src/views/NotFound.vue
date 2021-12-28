<template>
  <article aria-label="ページが見つかりません">
    <h1 class="heading--main">
      Sorry, Not Found.
    </h1>
    <h2 class="heading--main">
      <router-link to="/">
        ホームに戻る
      </router-link>
    </h2>
  </article>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
