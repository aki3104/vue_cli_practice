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
          <th></th>
        </tr>
      </thead>
      <tbody id="todo-list">
        <tr v-for = "(todo, index) in todos" :key = "todo.id">
          <td>{{ index }}</td>
          <td>{{ todo.taskText }}</td>
          <td><button>{{ todo.tsakStetus }}</button></td>
          <td><button @click = "deleteItem(index)">削除</button></td>
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
      todos: []
    }
  },
  methods: {
    addItem: function () {
      let item = {
        taskText: this.newItem,
        tsakStetus: '作業中'
      }
      this.todos.push(item)
      this.newItem = ''
    },
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
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
  margin: 30px auto;
}

a {
  color: #42b983;
}
</style>
