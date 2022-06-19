<script lang="ts">
import TodoList from './components/TodoList/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>

<template>
  <TodoList />
</template>

<style src="./assets/sass/_index.scss" lang="sass" />
