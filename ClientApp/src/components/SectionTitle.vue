<script>
export default {
  props: {
    title: {
      type: String,
      requires: true,
      default: 'title'
    },
    color: {
      type: String
    }
  }
}
</script>

<template>
  <h2 class="text-center w-100 py-5 section-text" :class="color">{{ title }}</h2>
</template>

<style>
.section-text {
  font-weight: bold;
}
</style>
