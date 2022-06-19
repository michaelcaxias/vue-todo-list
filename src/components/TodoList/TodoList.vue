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
    <div class="todo-container">
      <div class="add-todo-container">
        <input
          class="todo-input"
          placeholder="Adicione uma tarefa aqui.."
          type="text"
          @change="addTodo"
        />
        <button class="add-todo-btn" type="button">+</button>
      </div>
      <ul class="task-list">
        <li class="task" v-for="todo in (todos as string[])" :key="todo">
          {{ todo }}
          <div>
            <button class="complete-task-btn" type="button">V</button>
            <button class="remove-task-btn" type="button">X</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="./TodoList.scss" lang="sass" scoped />
