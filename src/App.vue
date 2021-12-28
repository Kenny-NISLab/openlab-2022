<template>
  <v-app id="app">
    <Header />
    <DrawerNav />
    <v-main id="main">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import DrawerNav from '@/components/Header/DrawerNav.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    DrawerNav,
    Footer
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#app {
  width: 100%;
  font-family: 'Noto Sans JP', 'Roboto', sans-serif;
  background-color: #fafafa;
}

#main {
  width: 1200px;
  margin: 0 auto;
}
</style>

<style lang="scss">
h1,
h2,
h3,
h4 {
  font-size: inherit;
  font-weight: normal;
}

a {
  text-decoration: none;
}

.heading {
  &--main,
  &--sub,
  &--accent,
  &--min {
    font-weight: bold;
  }

  &--main {
    position: relative;
    padding: 0 0.5em;
    margin: 1em 0;
    font-size: 2rem;
    border-left: solid 6px #364f6b;
  }

  &--sub {
    padding: 0.5em 1em;
    margin: 0.75em 0;
    font-size: 1.5rem;
    color: #364f6b;
    background-color: #f5f5f5;
    border-radius: 6px;
  }

  &--accent {
    padding: 0.25em;
    font-size: 1.25rem;
    border-bottom: solid 2px #364f6b;
  }

  &--min {
    margin: 0.5rem;
    font-size: 1rem;
  }
}

.text {
  &--bold {
    font-weight: bold;
  }
}
</style>
