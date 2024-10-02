<template>
  <header :class="type">
    <a href="/" class="logo">
      <img src="@/assets/logo.svg" alt="">
      <span class="logo-text">Golden Pixel</span>
    </a>
    <nav>
      <img class="burger" src="@/assets/icons/burger_icon.svg" @click.stop="showMenu = !showMenu">
      <ul class="top-menu" v-show="needShowMenu" @click.stop="showMenu = false">
        <li><RouterLink class="menu-link" to="/#service">Услуги</RouterLink></li>
        <li><RouterLink  class="menu-link" to="/#stages">Этапы разработки</RouterLink></li>
<!--        <li><RouterLink class="menu-link" to="/#projects">Проекты</RouterLink></li>-->
        <li><RouterLink class="menu-link" to="/prices">Прайс</RouterLink></li>
        <li><RouterLink class="menu-link" to="/work">О разработке</RouterLink></li>
        <li class="feedback">
          <RouterLink class="button" to="#feedback">
            Написать нам
          </RouterLink>
        </li>
      </ul>
    </nav>
    <ul class="sub-menu" v-if="subMenu.length > 0">
      <li v-for="(item, i) in subMenu" :key="i"><a :href="item.link">{{ item.title }}</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    showFeedback: false,
    showMenu: false,
  }),
  computed: {
    needShowMenu() {
      return window.innerWidth > 1200 || this.showMenu;
    }
  },
  mounted() {
    window.addEventListener('click', () => {
      this.showMenu = false;
    })
  },
  props: {
    type: {
      type: String,
      default: 'main'
    },
    subMenu: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/main";

header {
  @extend .main-padding;
  @extend %font-regular;
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  display: grid;
  grid-template-columns: 7vw auto;
  align-items: center;
  height: 80px;
  z-index: 1;
  justify-content: space-between;
  color: $font_color_default;
  margin-top: 10px;

  &.white {
    opacity: 1;
    color: $font_color_light;

    .menu-link{
      &:hover{
        border-bottom-color: $font_color_light !important;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 7vw auto;

    .feedback{
      margin-top: 10px;
    }
  }

  .burger {
    display: none;
    @media (max-width: 1200px) {
      display: initial;
      float: right;
    }
  }

  ul.sub-menu {
    margin: 20px 0;
    padding: 10px 0;
    display: flex;
    list-style: none;
    gap: 10px;
    width: 100%;
    grid-column: 1/3;
    border-top: 1px solid $font_color_light;
    font-size: 18px;

    li:not(:first-child) {
      border-left: 1px solid $font_color_light;
      padding-left: 10px;
    }
  }

  ul.top-menu {
    position: relative;
    display: flex;
    padding: 0;
    margin: 0;
    grid-gap: 30px;
    justify-content: end;
    align-items: center;
    list-style: none;
    font-family: "Roboto", sans-serif;
    @media (max-width: 1200px) {
      position: absolute;
      top: 90px;
      right: 0;
      flex-direction: column;
      background: $color_dark;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.51);
      align-items: start;
      color: $font_color_light;
      grid-gap: 20px;
    }

    .menu-link{
      padding: 10px 0;
      border-bottom: 2px solid transparent;
      transition: all .2s linear;
      &:hover{
       border-bottom-color: $color_dark;
      }
    }
  }

  .logo {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, max-content);
    align-items: center;

    .logo-text{
      @extend %font-middle;
      @media (max-width: 1024px) {
        color: $font_color_light;
      }
      font-family: $font_family_jetbrains;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>