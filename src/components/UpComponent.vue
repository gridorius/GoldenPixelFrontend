<template>
  <div @click="up" class="up" v-if="show">
    <img src="@/assets/icons/up_icon.svg">
  </div>
</template>

<script>
export default {
  name: "UpComponent",
  data: () => ({
    show: true
  }),
  mounted() {
    this.show = window.scrollY > 400
    addEventListener('scroll', () => {
      this.show = window.scrollY > 400
    });
  },
  methods: {
    up() {
      scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.up {
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: $color_dark;
  box-shadow: 0 0 10px $font_color_light;
  cursor: pointer;
  opacity: .4;
  transition: 0.1s linear;

  img{
    width: 40px;
  }

  &:hover {
    box-shadow: 0 0 15px $font_color_light;
    opacity: 1;
  }
  
  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    right: 30px;
    bottom: 30px;
    img{
      width: 30px;
    }
  }

  @media (max-width: 420px) {
    width: 50px;
    height: 50px;
    right: 10px;
    bottom: 10px;
    img{
      width: 25px;
    }
  }
}
</style>