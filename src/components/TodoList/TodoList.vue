<script lang="ts">
export default {
  data() {
    return {
      parentMessage: 'Parent',
      todos: ['oi'],
    };
  },
  methods: {
    addTodo(event) {
      if (event.target.value) {
        this.todos.push(event.target.value);
        event.target.value = '';
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
      <button type="button" @click="addTodo">Adicionar</button>
      <ul>
        <li v-for="todo in todos" :key="todo">
          {{ todo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./TodoList.scss" lang="sass" scoped />
