<template>
  <div class="page-wrapper">
    <BackgroundElements></BackgroundElements>
    <Header></Header>
    <Preview></Preview>
    <ServiceComponent></ServiceComponent>
    <DevelopmentStages></DevelopmentStages>
<!--    <ProjectsComponent></ProjectsComponent>-->
    <FeedbackForm></FeedbackForm>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// import ProjectsComponent from "@/components/projects.vue";
import Header from "@/components/header.vue";
import FeedbackForm from "@/components/FeedbackForm.vue";
import FooterComponent from "@/components/footer.vue";
import BackgroundElements from "@/components/BackgroundElements.vue";
import Preview from "@/components/preview.vue";
import ServiceComponent from "@/components/service.vue";
import DevelopmentStages from "@/components/DevelopmentStages.vue";

export default {
  name: "HomeComponent" ,
  components: {
    DevelopmentStages,
    ServiceComponent,
    Preview,
    BackgroundElements,
    FooterComponent,
    FeedbackForm,
    Header,
    // ProjectsComponent
  }
}
</script>

<style scoped lang="scss">

</style>