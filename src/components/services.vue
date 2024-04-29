<template>
  <section id="service" ref="section">
    <div class="title">Наши услуги</div>
    <div class="grid4">
      <div class="service-card" :key="i" v-for="(service, i) in services"
           :style="{'animation-delay': i/2 + 's'}">
        <img :src="service.icon" alt="">
        <div class="title">{{ service.title }}</div>
        <div class="description">{{ service.description }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '@/data/services.js';

export default {
  name: 'ServicesComponent',
  data: () => ({
    services,
  })
}
</script>

<style lang="scss">
@import "@/assets/style/global.scss";
.service-card {
  display: grid;
  grid-gap: 10px;
  opacity: 0;
  justify-items: center;

  .title {
    font-family: $font-family_2;
    font-size: 32px;
    color: $fontColor;
  }

  .description {
    font-family: $font-family_2;
    font-size: 16px;
    color: $fontSubcolor;
    max-width: 220px;
    text-align: center;
  }
}
</style>