<template>
  <div class="background">
    <img draggable="false" class="moon" src="@/assets/logo.svg" alt="">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud1.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud3.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud4.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud5.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud6.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud1.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud3.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud4.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud5.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud6.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud1.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud3.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud4.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud5.svg">
    <img draggable="false" class="mini-cloud left" src="@/assets/background/clouds/mini_cloud6.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud1.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud3.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud4.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud5.svg">
    <img draggable="false" class="mini-cloud right" src="@/assets/background/clouds/mini_cloud6.svg">
    <img draggable="false" class="second_mountain" src="@/assets/background/second_mountains3-level.svg" alt="">
    <img draggable="false" class="big-cloud left" src="@/assets/background/clouds/big_cloud1.svg">
    <img draggable="false" class="big-cloud left" src="@/assets/background/clouds/big_cloud2.svg">
    <img draggable="false" class="big-cloud right" src="@/assets/background/clouds/big_cloud1.svg">
    <img draggable="false" class="big-cloud right" src="@/assets/background/clouds/big_cloud2.svg">
    <img draggable="false" class="first_mountain" src="@/assets/background/first_mountains.svg" alt="">
    <img draggable="false" class="text-cloud" src="@/assets/background/text_cloud.svg">
  </div>
</template>

<script>
import anime from "animejs";

export default {
  data: () => ({
    miniClouds: [],
  }),
  mounted() {
    if (window.innerWidth < 1024) return;
    document.querySelectorAll('.mini-cloud').forEach(e => {
      let percent = window.innerWidth / 1920;
      e.style.transform = `scale(${percent})`;
      e.style.bottom = anime.random(30 * percent, 90 * percent) + '%';
      if (e.classList.contains('left'))
        e.style.left = anime.random(-200, -10) + 'px';
      else
        e.style.left = anime.random(window.innerWidth + 10, window.innerWidth + 100) + 'px';

      anime({
        targets: e,
        left: anime.random(-100, window.innerWidth),
        duration: anime.random(20000, 40000),
        complete: function () {
          let translation = anime.random(-300, 300);
          anime({
            targets: e,
            translateX: translation,
            duration: 10000,
            direction: 'alternate',
            easing: 'linear',
            loop: true,
          })
        }
      })
    });

    document.querySelectorAll('.big-cloud').forEach(e => {
      let percent = window.innerWidth / 1920;
      e.style.bottom = anime.random(30 * percent, 40 * percent) + '%';
      e.style.transform = `scale(${percent})`;
      if (e.classList.contains('left'))
        e.style.left = anime.random(-200, -10) + 'px';
      else
        e.style.left = anime.random(window.innerWidth + 10, window.innerWidth + 100) + 'px';

      anime({
        targets: e,
        left: anime.random(-100, window.innerWidth),
        duration: anime.random(25000, 50000),
        complete: function () {
          let translation = anime.random(-200, 200);
          anime({
            targets: e,
            translateX: translation,
            duration: 10000,
            direction: 'alternate',
            easing: 'linear',
            loop: true,
          })
        }
      })
    });

    anime({
      targets: '.moon',
      bottom: '50%',
      duration: 10000
    });
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "@/assets/main";

.background {
  position: relative;
  width: 100%;
  background: url("@/assets/background/background.svg");
  overflow: hidden;
  min-height: 100vh;
  height: 1080px;

  user-select: none;

  & img {
    user-select: none;
  }

  @media (max-width: 1024px) {
    display: none;
  }


  img {
    position: absolute;
  }

  .moon {
    width: 20%;
    bottom: 10%;
    left: 40%;
  }

  .first_mountain, .second_mountain {
    bottom: 0;
    width: 100%;
  }

  .text-cloud {
    bottom: 20vw;
    left: 5%;
  }
}
</style>