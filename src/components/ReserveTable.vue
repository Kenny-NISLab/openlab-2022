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
              <td>{{ reserveForm.name }}</td>
            </tr>
            <tr>
              <td>学籍番号</td>
              <td>{{ reserveForm.studentId }}</td>
            </tr>
            <tr>
              <td>メールアドレス</td>
              <td>{{ reserveForm.email }}</td>
            </tr>
            <tr>
              <td>予約日</td>
              <td>{{ reserveForm.date }}</td>
            </tr>
            <tr>
              <td>予約時間</td>
              <td>{{ reserveForm.time }}</td>
            </tr>
            <tr>
              <td>補足事項</td>
              <td>{{ reserveForm.message }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ReserveTable',
  props:{
    reserveForm: {
      type: Object,
      required: true,
    }
  }
}
</script>
