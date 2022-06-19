<script lang="ts">
import type { ITodoList, ITodo } from '../../interfaces/ITodoList';

export default {
  name: 'TodoList',
  data() {
    return {
      todos: [] as ITodo[],
    };
  },
  methods: {
    addTodo(event: Event) {
      const { todos } = this as ITodoList;
      const target = event.target as HTMLInputElement;
      if (target.value) {
        const todo: ITodo = {
          id: todos.length,
          text: target.value,
          completed: false,
        };

        todos.push(todo);
        target.value = '';
      }
    },
    removeTodo(todo: ITodo) {
      const { todos } = this as ITodoList;
      const index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1);
      }
    },
    toggleTodo(todo: ITodo) {
      todo.completed = !todo.completed;
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
        <button class="add-todo-btn" type="button">
          <vue-feather type="plus"></vue-feather>
        </button>
      </div>
      <ul class="task-list">
        <li
          class="task"
          :class="{ completed: todo.completed }"
          v-for="todo in todos"
          :key="todo.id"
        >
          {{ todo.text }}
          <div class="task-actions">
            <button
              class="complete-task-btn"
              type="button"
              @click="toggleTodo(todo)"
            >
              <vue-feather class="task-action" type="check"></vue-feather>
            </button>
            <button
              class="remove-task-btn"
              type="button"
              @click="removeTodo(todo)"
            >
              <vue-feather class="task-action" type="x"></vue-feather>
            </button>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<style src="./TodoList.scss" lang="sass" scoped />
