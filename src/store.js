import Vue from 'vue'
import Vuex from 'vuex'
import todoType from '@/lib/definitions'

// console.log(todoType.TYPE.DONE)
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    todos: [],
    radioCheck: todoType.TYPE.ALL,
    id: 0
  },
  mutations: {
  // newItemをステートのtodoに入れる
    addTodo (state, newItem) {
      state.todos.push({
        id: state.id++,
        taskText: newItem,
        taskStatus: todoType.TYPE.DOING
      })
    },
    // indexのタスクをデリートする
    deleteTodo (state, index) {
      state.todos.splice(index, 1)
    },
    // statusを変更する。
    statusTodo (state, index) {
      state.todos[index].taskStatus =
      state.todos[index].taskStatus === todoType.TYPE.DOING
        ? todoType.TYPE.DONE
        : todoType.TYPE.DOING
    },
    setradioCheck (state, valueRadio) {
      state.radioCheck = valueRadio
    }
  },
  actions: {
  },

  getters: {
    filteredTodos (state) {
      if (state.radioCheck === todoType.TYPE.ALL) {
        return state.todos.slice()
      } else {
        return state.todos.filter((todo) => {
          return todo.taskStatus === state.radioCheck
        })
      }
    }
  }
})
