<template>
  <div class="preview grid-two-columns">
    <div class="text">
      Наша цель — обеспечить простоту и предсказуемость в процессе разработки <br> web-приложений, даже если вы не знакомы с IT.
    </div>
    <img class="image" src="@/assets/icons/diamond.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "PreviewComponent"
}
</script>

<style scoped lang="scss">
  @import "../assets/main";
  .preview{
    @extend .grid-two-columns;
    align-items: center;
    color: $font_color_light;
    margin-top: 100px;
    .text{
      @extend %font-large;
    }

    .image{
      justify-self: center;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
</style>