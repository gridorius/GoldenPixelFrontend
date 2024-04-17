<script>
import FeedBackForm from "@/components/FeedBackForm.vue";

export default {
  name: 'HeaderComponent',
  data: () => ({
    showFeedback: false,
    showMenu: false,
  }),
  computed: {
    needShowMenu() {
      return window.innerWidth > 1024 || this.showMenu;
    }
  },
  mounted() {

  },
  components: {
    FeedBackForm
  }
};
</script>

<template>
  <header>
    <a href="/" class="logo"><img src="@/assets/logo.svg" alt=""></a>
    <a href="" class="company-name"><img class="mobile-logo" src="@/assets/logo.svg" alt="">Golden Pixel</a>
    <nav>
      <img class="burger" src="@/assets/icons/burger_icon.svg" @click="showMenu = !showMenu">
      <ul v-show="needShowMenu" @click="showMenu = false">
        <li><a href="#service">Услуги</a></li>
        <li><a href="#about">О компании</a></li>
<!--        <li><a href="#projects">Проекты</a></li>-->
        <li>
          <div class="write-to-us" @click="showFeedback = true">
            Написать нам
          </div>
        </li>
      </ul>
    </nav>
    <FeedBackForm v-model:show="showFeedback"></FeedBackForm>
  </header>
</template>

<style lang="scss">
header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 7vw auto auto;
  align-items: center;
  background-color: #F3F3F3;
  font-size: 24px;
  padding: 0 7vw 0 0;
  height: 80px;
  z-index: 1;

  @media only screen and (min-width: 321px) and (max-device-width: 1024px) {
    grid-template-columns: 7vw auto;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1160px) {
    font-size: 20px;
  }

  .mobile-logo {
    display: none;
    @media only screen and (min-width: 321px) and (max-device-width: 1024px) {
      display: inherit;
    }
  }

  .burger {
    display: none;
    @media only screen and (min-width: 321px) and (max-device-width: 1024px) {
      display: initial;
      float: right;
    }
  }


  ul {
    position: relative;
    display: flex;
    padding: 0;
    margin: 0;
    grid-gap: 30px;
    justify-content: end;
    align-items: center;
    list-style: none;
    color: var(--font-color);
    font-family: "Roboto", sans-serif;
    @media only screen and (min-width: 321px) and (max-device-width: 1024px) {
      position: absolute;
      top: 90px;
      right: 7vw;
      flex-direction: column;
      background: #F3F3F3;
      padding: 10px;
    }
  }

  .write-to-us {
    padding: 10px 55px;
    background-color: var(--font-color);
    color: #F3F3F3;
    font-weight: bold;
    font-size: 22px;
    cursor: pointer;
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1160px) {
      font-size: 16px;
    }
  }

  .logo {
    justify-self: end;
    @media only screen and (min-width: 321px) and (max-device-width: 1024px) {
      display: none;
    }
  }

  a {
    color: var(--font-color);
    text-decoration: none;
  }
}
</style>