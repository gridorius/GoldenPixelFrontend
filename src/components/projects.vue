<template>
  <section id="projects">
    <div class="title">Наши проекты</div>
    <div class="grid2">
      <template :key="i" v-for="(card, i) in projects">
        <div class="project-card">
          <div class="background" :style="{'background-image': `url(${card.background})`}"></div>
          <div class="title">{{ card.title }}</div>
          <div class="description">{{ card.description }}</div>
          <div class="tehnologies">
            <div :key="i" class="tehnology" v-for="(teh, i) in card.tehnologies">{{ teh }}</div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  data: () => ({
    projects: []
  }),
  mounted() {
    for (let i = 0; i < 5; i++)
      this.projects.push({
        title: 'Project' + i,
        description: 'lorem ipsum dolar',
        background: require('@/assets/bitrix-background.png'),
        tehnologies: [
          'Vue',
          'Bitrix',
          'PHP',
          'Docker',
        ]
      });
  }
}
</script>

<style lang="scss">
@import "@/assets/style/global.scss";
.project-card {
  position: relative;
  display: grid;
  grid-template-rows: min-content min-content auto;
  grid-gap: 10px;
  padding: 20px;
  background-color: $background-color_4;
  background-blend-mode: overlay;
  transition: background-color 0.2s linear;
  min-height: 255px;

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(1px);
    background-size: 100%;
    background-position: center;
  }

  &:hover {
    background-color: $background-color_5;
  }

  .title {
    font-size: 40px;
    color: $color_5;
  }

  .description {
    font-family: $font-family_2;
    font-size: 24px;
    color: $color_6;
  }

  .tehnologies {
    display: flex;
    gap: 15px;
    font-family: $font-family_2;
    font-size: 16px;
    color: $color_2;
    align-self: end;

    .tehnology {
      padding: 3px 10px;
      background: var(--font-color);
    }
  }
}
</style>