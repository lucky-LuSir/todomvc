<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{unCompletedCount}}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" v-show="isShowClear" @click="clearCompletedAsync">Clear completed</button>
  </footer>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  // computed: {
  //   unCompletedCount: function() {
  //     return this.$store.getters.unCompletedCount
  //   }
  // }
  computed: mapGetters(['unCompletedCount', 'isShowClear']),
  methods: {
    clearCompletedAsync: function () {
      // 触发actions
      this.$store.dispatch('clearCompletedAsync')
    }
  }
}
</script>

<style>

</style>
