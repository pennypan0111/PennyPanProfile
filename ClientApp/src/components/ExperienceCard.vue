<script>
export default {
  props: {
    time: {
      type: String,
      required: true,
      default: 'time'
    },
    title: {
      type: String,
      required: true,
      default: 'title'
    },
    content: {
      type: String,
      required: true,
      default: 'content'
    }
  }
}
</script>

<template>
  <el-timeline-item :timestamp="time" placement="top">
    <el-card class="experience-card">
      <h4>{{ title }}</h4>
      <p class="mb-0">{{ content }}</p>
    </el-card>
  </el-timeline-item>
</template>

<style>
.el-timeline-item__timestamp {
  color: #fac470;
  font-size: 1rem;
}
.experience-card {
  padding: 20px;
}
.experience-card h4 {
  font-weight: bold;
  color: #295d72;
}
.experience-card p {
  font-size: 1.2rem;
}
.el-timeline-item__node {
  background: #fac470;
}
.el-timeline {
  --el-timeline-node-color: #fac470;
  padding-left: 0;
}
</style>
