<script lang="ts">
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo({ target }) {
      if (target.value) {
        this.todos.push(target.value);
        target.value = '';
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h1>Todo List</h1>
    <div>
      <input type="text" @change="addTodo" />
      <button type="button">Adicionar</button>
      <ul>
        <li v-for="todo in todos" :key="todo">
          {{ todo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./TodoList.scss" lang="sass" scoped />
