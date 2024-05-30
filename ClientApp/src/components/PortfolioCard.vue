<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
      default: 'category'
    },
    title: {
      type: String,
      required: true,
      default: 'title'
    },
    introduce: {
      type: String,
      required: true,
      default: 'introduce'
    },
    hrefButton: {
      type: String
    },
    srcImg: {
      type: String
    }
  }
}
</script>

<template>
  <div class="col-lg-4 col-md-6 col-12 pt-3 d-flex align-self-stretch">
    <el-card>
      <img
        :src="srcImg"
        style="width: 100%"
      />
      <div class="d-flex flex-column align-items-center card-text-area">
        <p class="category_text">— {{ category }} —</p>
        <p class="title_text">{{ title }}</p>
        <span class="introduce_text">{{ introduce }}</span>
        <div>
          <a :href="hrefButton" target="_blank" class="lookup-button">查看</a>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style>
.el-card__body {
  padding: 0 0 20px 0;
}
.card-text-area {
  padding: 20px;
}
.category_text {
  color: #fac470;
  margin-bottom: 10px;
}
.title_text {
  color: #295d72;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.introduce_text {
  text-align: justify;
  margin-bottom: 20px;
}
.lookup-button{
  background: #295d72;
  color: #ffffff;
  border-radius: 30px;
  padding: 4px 30px;
}
.lookup-button:not(.is-disabled):focus, .lookup-button:not(.is-disabled):hover{
  background: #295d72;
  color: #fac470;
  text-decoration: none;
}
@media screen and (min-width:768px){
  .introduce_text{
    min-height: 96px;
  }
}
</style>
