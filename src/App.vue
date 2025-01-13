<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </RouterView>
  <UpComponent/>
</template>

<script>

import UpComponent from "@/components/UpComponent.vue";

export default {
  name: 'App',
  components: {UpComponent},
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = 'Golden pixel - ' + to.meta.title;
      }
    },
  }
}
</script>