<template>
  <div ref="slider" class="stack-slider-wrapper">
    <div class="stack-slider">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  data: () => ({}),
  props: ['speed', 'items', 'left', 'base-offset'],
  mounted() {
    let slider = this.$refs.slider;
    let step = this.speed;
    let rignt = !this.left;

    if (this.baseOffset)
      slider.scrollLeft = this.baseOffset;

    let rightFunction = () => {
      let ss = slider.scrollWidth/(this.items*2);
      let cs = Math.ceil(slider.scrollLeft/ss);
      if(cs > this.items){
        slider.scrollLeft = slider.scrollLeft - ss*cs;
      }
      slider.scrollLeft += step;
    }

    let leftFunction = () => {
      let ss = slider.scrollWidth/(this.items*2);
      let cs = Math.ceil(slider.scrollLeft/ss);
      if(cs == 1){
        slider.scrollLeft = slider.scrollLeft + ss*this.items;
      }
      slider.scrollLeft -= step;
    }

    if (rignt)
      setInterval(() => rightFunction(), 10);
    else {
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
      console.log(slider)
      setInterval(() => leftFunction(), 10);
    }
  }
}
</script>