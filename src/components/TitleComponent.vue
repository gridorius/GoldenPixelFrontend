<template>
  <h2 class="title">
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "TitleComponent"
}
</script>

<style scoped lang="scss">
  @import "../assets/style/global";
  .title{
    @extend .main-margin;
    @extend %font-large;
    font-weight: bold;
    font-family: $font_family_roboto;
    border-bottom: 1px solid $font_color_light;
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px;
    padding: 10px;
    color: $font_color_light;
    @media (max-width: 1024px) {
      margin-top: 50px;
    }
    @media (max-width: 768px) {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
</style>