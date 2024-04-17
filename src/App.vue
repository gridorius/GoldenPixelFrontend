<template>
  <Header></Header>
  <BannerComponent></BannerComponent>
  <ServicesComponent></ServicesComponent>
  <StackComponent></StackComponent>
  <AboutComponent></AboutComponent>
<!--  <ProjectsComponent></ProjectsComponent>-->
  <FeedBackForm></FeedBackForm>
  <footer>
    TOO Golden pixel {{ currentYear }} ©
  </footer>
</template>

<script>
import Header from './components/header.vue'
import BannerComponent from './components/banner.vue'
import AboutComponent from './components/about.vue'
import ServicesComponent from './components/services.vue'
import StackComponent from './components/stack.vue'
// import ProjectsComponent from './components/projects.vue'

export default {
  name: 'App',
  components: {
    Header,
    BannerComponent,
    ServicesComponent,
    StackComponent,
    AboutComponent,
    // ProjectsComponent,
  },
  computed:{
    currentYear(){
      return new Date().getFullYear();
    }
  }
}
</script>