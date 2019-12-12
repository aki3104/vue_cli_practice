import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    TYPE: {
      ALL: 'すべて',
      DOING: '作業中',
      DONE: '完了'
    },
    id: 0
  },
  mutations: {
  // newItemをステートのtodoに入れる
    add (state, newItem) {
      state.todos.push({
        id: state.id++,
        taskText: newItem,
        taskStatus: state.TYPE.DOING
      })
    },
    // indexのタスクをデリートする
    delete (state, index) {
      state.todos.splice(index, 1)
    },
    // statusを変更する。
    status (state, index) {
      state.todos[index].taskStatus =
      state.todos[index].taskStatus === state.TYPE.DOING
        ? state.TYPE.DONE
        : state.TYPE.DOING
    }
  },
  actions: {
  }
})
