<template>
  <div class="page-wrapper">
    <Header type="white"></Header>
    <div class="page-content">
      <WorkComponent></WorkComponent>
      <FeedbackForm></FeedbackForm>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>

import FooterComponent from "@/components/footer.vue";
import Header from "@/components/header.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import WorkComponent from "@/components/WorkComponent.vue";

export default {
  name: "WorkComponentPage",
  components: {WorkComponent, FeedbackForm, Header, FooterComponent},
  data: () => ({})
}
</script>

<style scoped lang="scss">

</style>