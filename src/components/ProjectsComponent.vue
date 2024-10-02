<template>
  <section id="projects">
    <TitleComponent>Наши работы</TitleComponent>
    <div class="grid-two-columns">
      <template :key="i" v-for="(card, i) in projects">
        <div class="project-card">
          <img class="icon" :src="card.image" alt="">
          <div class="title">{{ card.title }}</div>
          <div class="description">{{ card.description }}</div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: 'ProjectsComponent',
  components: {TitleComponent},
  data: () => ({
    projects: []
  }),
  mounted() {
    for (let i = 0; i < 5; i++)
      this.projects.push({
        image: require('@/assets/icons/projects/bezlimit.svg'),
        title: 'Project' + i,
        description: 'lorem ipsum dolar',
      });
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/main";

.project-card {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas: "icon title" "description description";
  align-items: center;

  .icon {
    grid-area: icon;
  }

  .title {
    @extend .golden-title;
    grid-area: title;
  }

  .description {
    @extend .description-sub-font;
    grid-area: description;
  }
}
</style>