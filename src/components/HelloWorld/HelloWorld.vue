<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div class="page">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
      alt="vue logo"
    />
    <h1 class="hello-world">{{ msg }}</h1>
  </div>
</template>

<style src="./HelloWorld.scss" lang="sass" scoped />
