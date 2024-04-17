<template>
  <section>
    <div class="title">Используем в разработке</div>

    <SliderComponent :items="stack.length" :speed="2">
      <div class="stack-item" :key="i" v-for="(stackItem, i) in stack">
        <img :src="stackItem" alt="" class="icon">
      </div>
      <div class="stack-item" :key="i" v-for="(stackItem, i) in stack">
        <img :src="stackItem" alt="" class="icon">
      </div>
    </SliderComponent>
  </section>
</template>

<script>
import SliderComponent from './slider.vue';
import stack from '@/data/stack.js';
export default {
  name: 'StackComponent',
  data: () => ({
    stack
  }),
  components:{
    'SliderComponent': SliderComponent
  }
}
</script>

<style lang="scss">
@import "@/assets/style/global.scss";
.stack-slider-wrapper {
  overflow: hidden;
  grid-column: 1/9;
}

.stack-slider {
  display: flex;
  white-space: nowrap;
}

.stack-item {
  display: inline-grid;
  margin-left: 30px;
  grid-gap: 25px;
  min-width: 200px;
  min-height: 200px;
  align-content: center;
  justify-content: center;
  background-color: $background-color_3;
}
</style>