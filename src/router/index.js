import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import TodoCopy from '@/components/TodoCopy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/TodoCopy',
      name: 'TodoCopy',
      component: TodoCopy
    }
  ]
})
