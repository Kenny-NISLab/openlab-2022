<template>
  <v-row
    class="my-6"
    justify="center"
  >
    <v-col cols="12">
      <v-simple-table>
        <template #default>
          <tbody>
            <tr>
              <td>お名前</td>
              <td>{{ contactForm.name }}</td>
            </tr>
            <tr>
              <td>学籍番号</td>
              <td>{{ contactForm.studentId }}</td>
            </tr>
            <tr>
              <td>メールアドレス</td>
              <td>{{ contactForm.email }}</td>
            </tr>
            <tr>
              <td>問い合わせ内容</td>
              <td>{{ contactForm.message }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ContactTable',
  props:{
    contactForm: {
      type: Object,
      required: true
    }
  }
}
</script>
