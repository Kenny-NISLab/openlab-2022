import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#364f6b',
        secondary: '#3fc1c9',
        accent: '#fc5185',
        bg: '#f5f5f5'
      }
    }
  }
})

export default vuetify
