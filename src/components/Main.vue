<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: todo.complete}" v-for="todo in todoList" :key="todo.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="todo.complete" @change="changeState({id: todo.id})">
          <label>{{todo.name}}</label>
          <button class="destroy" @click="deleteTodo({id:todo.id})"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
      </li>
    </ul>
  </section>
</template>

<script>
// 导入mapState函数
import { mapState, mapMutations } from 'vuex'

export default {
  // computed: {
  //   todoList: function () {
  //     return this.$store.state.todoList
  //   }
  // }
  computed: mapState(['todoList']),
  methods: {
    ...mapMutations(['deleteTodo', 'changeState'])
  }
  /* methods: {
    // mapMutations(['deleteTodo']) 就是个对象
    ...mapMutations(['deleteTodo']),
    changeState (id) {
      this.$store.commit('changeState', {id})
    }
  } */

}
</script>

<style>

</style>
