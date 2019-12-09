<template>
  <div class="container">
<!-- v-modelでラジオボタン内容を取得 -->
    <div>
      <input type="radio" name="swich-display" id="radio-all" checked="checked" value = 'すべて' v-model = "radioCheck">全て
      <input type="radio" name="swich-display" id="radio-doing" value = '作業中' v-model = "radioCheck" >作業中
      <input type="radio" name="swich-display" id="radio-complete" value = '完了' v-model = "radioCheck">完了
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
        <!-- フィルター後の中身を表示させる -->
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
<!-- 遷移 -->
  <!-- <router-link to="/TodoCopy">vueテスト</router-link> -->
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
      radioCheck: 'すべて'
    }
  },
  methods: {
    // ----------------------------------------
    // addItem
    // タスクをtodosに追加するメソッド
    // [引数]
    // なし
    // [戻り値]
    // なし
    // ----------------------------------------
    addItem: function () {
      let item = {
        taskText: this.newItem,
        taskStetus: this.TYPE.DOING
      }
      this.todos.push(item)
      this.newItem = ''
    },

    // ----------------------------------------
    // deleteItem
    // タスクを削除するメソッド
    // [引数]
    // index:選択されたタスクのインデックス
    // [戻り値]
    // なし
    // ----------------------------------------
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1)
      }
    },
    // ----------------------------------------
    // statusItem
    // ステータスボタンをクリックしたら、ステータスを切り替えるメソッド
    // [引数]
    // index:選択されたタスクのインデックス
    // [戻り値]
    // なし
    // ----------------------------------------
    statusItem: function (index) {
      this.todos[index].taskStetus =
      this.todos[index].taskStetus === this.TYPE.DOING
        ? this.TYPE.DONE
        : this.TYPE.DOING
    }
  },
  computed: {
    // ----------------------------------------
    // filteredTodos
    // ラジオボタンに応じて、filteredTodosに格納
    // [引数]
    // なし
    // [戻り値]
    // 選択されたtodo
    // ----------------------------------------
    filteredTodos () {
      if (this.radioCheck === 'すべて') {
        return this.todos.slice()
      } else {
        return this.todos.filter((todo) => {
          return todo.taskStetus === this.radioCheck
        })
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
