<template>
  <div class="test">
  <input type="radio" value = 'すべて' v-model = "radiotest">全て
  <input type="radio" value = '作業中' v-model = "radiotest">作業中
  <input type="radio" value = '完了' v-model = "radiotest">完了
   <form @submit.prevent = 'addItem'>
      <input class = inputText type='text' v-model = 'newItem'>
      <input type='submit' value='追加'>
    </form>
    <h1>{{ msg }}</h1>
    <h1>{{ radiotest }}</h1>
    <div>
      <ul v-for = "(todo, index) in todos" :key = "todo.id">
        <li>{{ index }}</li>
        <li>{{ todo.taskText }}</li>
        <li>{{ todo.taskStatus }}</li>
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
      newItem: '',
      radiotest: 'すべて',
      msg: 'copy todoだよ！'
    }
  },
  methods: {
    addItem: function () {
      this.$store.commit('add', this.newItem)
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}

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
