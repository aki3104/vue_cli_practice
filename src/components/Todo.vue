<template>
  <div class="container">
<!-- v-modelでラジオボタン内容を取得 -->
    <div>
      <input type="radio" name="swich-display" id="radio-all" checked="checked" value = 'すべて' v-model = "radioCheck">全て
      <input type="radio" name="swich-display" id="radio-doing" value = '作業中' v-model = "radioCheck" >作業中
      <input type="radio" name="swich-display" id="radio-complete" value = '完了' v-model = "radioCheck">完了
    </div>
    <form @submit.prevent = 'addItem'>
      <input class = inputText type='text' v-model = 'newItem'>
      <input type='submit' value='追加'>
    </form>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <transition-group tag="tbody">
        <!-- フィルター後の中身を表示させる -->
        <tr v-for = "(todo, index) in filteredTodos" :key = "todo.id">
          <td>{{ index }}</td>
          <td>{{ todo.taskText }}</td>
          <td><button @click = "statusItem(index)">{{ todo.taskStatus }}</button></td>
          <td><button class="deleteBtn" @click = "deleteItem(index)">削除</button></td>
        </tr>
      </transition-group>
    </table>
<!-- 遷移 -->
  <router-link to="/TodoCopy">vueテスト</router-link>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  data () {
    return {
      newItem: ''
    }
  },
  methods: {
    // ----------------------------------------
    // addItem
    // タスクをtodosに追加するメソッド,store.jsにmutationsに接続
    // [引数]
    // なし
    // [戻り値]
    // なし
    // ----------------------------------------
    addItem: function () {
      this.$store.commit('addTodo', this.newItem)
      this.newItem = ''
    },
    // ----------------------------------------
    // deleteItem
    // タスクを削除するメソッド、store.jsにmutationsに接続
    // [引数]
    // index:選択されたタスクのインデックス
    // [戻り値]
    // なし
    // ----------------------------------------
    deleteItem: function (index) {
      if (confirm('are you sure?')) {
        this.$store.commit('deleteTodo', index)
      }
    },
    // ----------------------------------------
    // statusItem
    // ステータスボタンをクリックしたら、ステータスを切り替えるメソッド
    // store.jsにmutationsに接続
    // [引数]
    // index:選択されたタスクのインデックス
    // [戻り値]
    // なし
    // ----------------------------------------
    statusItem: function (index) {
      this.$store.commit('statusTodo', index)
    }
  },
  computed: {
    // ----------------------------------------
    // radioCheck
    // v-modelの記述してあるものをsetでvuexに渡し、getで取得している。
    // [引数]
    // 選択されているラジオボタン内容。valueRadio
    // [戻り値]
    // storeにあるradioCheck
    // ----------------------------------------
    radioCheck: {
      get () {
        return this.$store.state.radioCheck
      },
      set (valueRadio) {
        this.$store.commit('setradioCheck', valueRadio)
      }
    },
    // ----------------------------------------
    // filteredTodos
    // store.jsstateにあるtodoに接続
    // [引数]
    // なし
    // [戻り値]
    // なし
    // ----------------------------------------
    filteredTodos () {
      return this.$store.getters.filteredTodos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

table{
  text-align: center;
  margin: 30px auto;
  justify-content: center;
}

table th{
  padding: 12px;
  border-bottom: 2px solid darkgray;
}

table td{
  padding: 12px;
}

table tr:nth-of-type(odd){
  background-color: rgba(0,0,255,0.1);
}

button{
  width: 100%;
  height: 30px;
  border-radius: 25px;
}

.deleteBtn{
  background-color: #e8334a;
  color: #fff;
}

form{
  margin: 20px 0;
}

.inputText{
  height: 20px;
  border-radius: 3px;
  box-shadow: 0px 1px rgba(255, 255, 255, 0.5);
}

.v-enter-active, .v-leave-active{
  transition: 0.5s
}

.v-enter, .v-leave-to{
  opacity: 0;
  transform: translate(50px)
}

</style>
