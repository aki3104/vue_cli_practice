<template>
  <div class="container">

    <div>
      <input type="radio" name="swich-display" id="radio-all" checked="checked" @checked = "radioAll">全て
      <input type="radio" name="swich-display" id="radio-doing" @checked = "radioDoing" >作業中
      <input type="radio" name="swich-display" id="radio-complete" @checked = "radioDone">完了
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
        <tr v-for = "(todo, index) in filteredTodos" :key = "todo.id">
          <td>{{ index }}</td>
          <td>{{ todo.taskText }}</td>
          <td><button @click = "statusItem(index)">{{ todo.taskStetus }}</button></td>
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
      TYPE: {
        ALL: '全て',
        DOING: '作業中',
        DONE: '完了'
      },
      newItem: '',
      todos: [],
      filteredTodos: []
    }
  },

  methods: {
    addItem: function () {
      let item = {
        taskText: this.newItem,
        taskStetus: this.TYPE.DOING
      }
      this.todos.push(item)
      this.newItem = ''
    },
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
    },
    statusItem: function (index) {
      this.todos[index].taskStetus =
      this.todos[index].taskStetus === this.TYPE.DOING
        ? this.TYPE.DONE
        : this.TYPE.DOING
    },
    radioDoing: function () {
      this.filteredTodos = this.todos.filter(function (todo) {
        return todo.taskStetus === '作業中'
      })
    },
    radioDone: function () {
      this.filteredTodos = this.todos.filter(function (todo) {
        return todo.taskStetus === '完了'
      })
    },
    radioAll: function () {
      this.filteredTodos = this.todos
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

th{
  padding-left: 20px;
}

td{
  padding-left: 20px;
}

a {
  color: #42b983;
}
</style>
