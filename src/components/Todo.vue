<template>
  <div class="container">

    <div>
      <input type="radio" name="swich-display" id="radio-all" checked="checked">全て
      <input type="radio" name="swich-display" id="radio-doing">作業中
      <input type="radio" name="swich-display" id="radio-complete">完了
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody id="todo-list">
        <tr v-for = "(todo, index) in todos" :key = "todo.id">
          <td>{{ index }}</td>
          <td>{{ todo.taskText }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent = 'addItem'>
      <input type='text' v-model = 'newItem'>
      <input type='submit' value='追加'>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      newItem: '',
      todos: [{
        taskText: 'task1',
        taskStatus: '作業中'
      }, {
        taskText: 'task2',
        taskStatus: '作業中'
      }]
    }
  },
  methods: {
    addItem: () => {
      let addItemInput = {
        taskText: this.newItem,
        tsakSatus: '作業中'
      }
      this.todos.push(addItemInput)
      this.newItem = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
table{
  text-align: center;
}
tr {
  list-style-type: none;
  padding: 0;
}
th {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
