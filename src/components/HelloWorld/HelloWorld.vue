<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <div class="page">
    <h1 class="hello-world">{{ msg }}</h1>
  </div>
</template>

<style src="./HelloWorld.scss" lang="sass" scoped />
