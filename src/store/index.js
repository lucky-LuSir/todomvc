import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 创建state
const state = {
  // 创建任务列表
  todoList: [
    { id: 1, name: '吃饭', complete: true },
    { id: 2, name: '睡觉', complete: false },
    { id: 3, name: '打豆豆', complete: true }
  ],
  index: 3
}

const mutations = {
  // 添加一个todo
  addTodo (state, payload) {
    state.todoList.push({
      id: ++state.index,
      name: payload.name,
      complete: false
    })
  },
  // 删除一个todo
  deleteTodo (state, payload) {
    // 1. 根据id找到下标
    let index = state.todoList.findIndex(item => item.id === payload.id)
    // 2. 根据下标删除对应的数据
    state.todoList.splice(index, 1)
  },
  changeState (state, payload) {
    // 根据id找到对应的下标
    let index = state.todoList.findIndex(item => item.id === payload.id)
    // 修改状态
    state.todoList[index].complete = !state.todoList[index].complete
  },
  // 清除已经完成的任务
  clearCompleted (state) {
    state.todoList = state.todoList.filter(item => !item.complete)
  }
}

// getters可以理解为是vuex的计算属性，getters中提供的数据依赖于state中属性变化
const getters = {
  // 计算todoList中未完成任务的个数
  unCompletedCount: function (state) {
    // let result = state.todoList.filter(item => !item.complete)
    // console.log(result)
    // return result.length
    return state.todoList.filter(item => !item.complete).length
  },
  isShowClear: function (state) {
    // 如果有一个为true, 返回true
    return state.todoList.some(item => item.complete)
  }
}

const actions = {
  // context表示store对象
  clearCompletedAsync (context) {
    setTimeout(() => {
      context.commit('clearCompleted')
    }, 1000)
  }
}

// 创建store
const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions
})

export default store
