<template>
  <div class="page-wrapper">
    <Header type="white"></Header>
    <div class="page-content">
      <TitleComponent>Наши цены</TitleComponent>
      <PricesComponent></PricesComponent>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>

import FooterComponent from "@/components/FooterComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import PricesComponent from "@/components/PricesComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "PricesPageComponent",
  components: {TitleComponent, PricesComponent, Header, FooterComponent},
  data: () => ({})
}
</script>

<style scoped lang="scss">

</style>