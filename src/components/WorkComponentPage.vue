<template>
  <div class="page-wrapper">
    <Header type="white"></Header>
    <div class="page-content">
      <TitleComponent>О разработке</TitleComponent>
      <WorkComponent></WorkComponent>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>

import FooterComponent from "@/components/FooterComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import WorkComponent from "@/components/WorkComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "WorkComponentPage",
  components: {TitleComponent, WorkComponent, Header, FooterComponent},
  data: () => ({})
}
</script>

<style scoped lang="scss">

</style>