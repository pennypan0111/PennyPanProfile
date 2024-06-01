<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    },
    skills: {
      type: Array,
      requred: true
    },
    circleStyle: {
      type: String
    }
  }
}
</script>

<template>
  <div class="skill-Card px-4" >
    <div class="skill-Title text-center" :class="circleStyle" v-html="title"></div>
    <div class="skill-Content mt-4 pt-4">
      <p class="dolt pl-4" v-for="item in skills" :key="item">{{ item }}</p>
    </div>
  </div>
</template>
