<script lang="ts">
import type { ITodoList } from '../../interfaces/ITodoList';

export default {
  name: 'TodoList',
  data() {
    return {
      todos: [] as string[],
    };
  },
  methods: {
    addTodo(event: Event) {
      const { todos } = this as ITodoList;
      const target = event.target as HTMLInputElement;
      if (target.value) {
        todos.push(target.value);
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
