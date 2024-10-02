<template>
  <div class="page-wrapper">
    <BackgroundElements></BackgroundElements>
    <Header></Header>
    <Preview></Preview>
    <ServiceComponent></ServiceComponent>
    <DevelopmentStages></DevelopmentStages>
<!--    <ProjectsComponent></ProjectsComponent>-->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
// import ProjectsComponent from "@/components/projects.vue";
import Header from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BackgroundElements from "@/components/BackgroundElements.vue";
import Preview from "@/components/PreviewComponent.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";
import DevelopmentStages from "@/components/DevelopmentStages.vue";

export default {
  name: "HomeComponent" ,
  components: {
    DevelopmentStages,
    ServiceComponent,
    Preview,
    BackgroundElements,
    FooterComponent,
    Header,
    // ProjectsComponent
  }
}
</script>

<style scoped lang="scss">

</style>