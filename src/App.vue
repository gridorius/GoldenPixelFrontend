<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </RouterView>
</template>

<script>

export default {
  name: 'App',
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