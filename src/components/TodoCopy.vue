<template>
  <div class="test">
  <input type="radio" value = 'すべて' v-model = "radiotest">全て
  <input type="radio" value = '作業中' v-model = "radiotest">作業中
  <input type="radio" value = '完了' v-model = "radiotest">完了
    <h1>{{ msg }}</h1>
    <h1>{{ radiotest }}</h1>
    <div>
      <ul v-for = "(todo, index) in testfilter" :key = "todo.id">
        <li>{{ index }}</li>
        <li>{{ todo.task }}</li>
        <li>{{ todo.status }}</li>
      </ul>
      <ul v-for = "(todo, index) in todos" :key = "todo.id">
        <li>{{ index }}</li>
        <li>{{ todo.task }}</li>
        <li>{{ todo.status }}</li>
      </ul>
    </div>
  <router-link to="/">TodoList</router-link>
  </div>

</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      filteredTodos: '',
      radiotest: 'すべて',
      msg: 'copy todoだよ！',
      todos: [ {
        task: 'task1',
        status: '作業中'
      }, {
        task: 'task2',
        status: '作業中'
      }, {
        task: 'task3',
        status: '完了'
      } ]
    }
  }
  // computed: {
  //   testfilter: function () {
  //     if (this.radiotest === 'すべて') {
  //       this.filteredTodos = this.todos
  //       return this.filteredTodos
  //     } else {
  //       this.filteredTodos = this.todos.filter(function (todo) {
  //         return todo.taskstatus === this.radiotest
  //         // return todo.taskStetus === this.radiotest
  //       })
  //     }
  //   }
  // }
}
console.log('ok?')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
