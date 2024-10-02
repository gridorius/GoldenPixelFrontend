<template>
  <div class="page-wrapper">
    <Header type="white"></Header>
    <div class="page-content">
      <PricesComponent></PricesComponent>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>

import FooterComponent from "@/components/FooterComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import PricesComponent from "@/components/PricesComponent.vue";

export default {
  name: "PricesPageComponent",
  components: {PricesComponent, Header, FooterComponent},
  data: () => ({})
}
</script>

<style scoped lang="scss">

</style>