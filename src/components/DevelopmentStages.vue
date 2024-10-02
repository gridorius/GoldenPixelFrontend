<template>
  <section id="stages">
    <TitleComponent>Этапы разработки</TitleComponent>
    <div class="grid-two-columns">
      <div v-for="(stage, i) in stages" :style="{order:  getOrder(stage.order)}" :key="i" class="stage">
        <img :src="stage.number" class="number">
        <div class="title">{{ stage.title }}</div>
        <div class="description">{{ stage.description }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "DevelopmentStages",
  components: {TitleComponent},
  data: () => ({
    stages: [
      {
        number: require("@/assets/icons/numbers/1.svg"),
        title: "Аналитика",
        description: "Обозначим бизнес-цели, сроки и затраты, возможности готового продукта.",
        order: 1
      },
      {
        number: require("@/assets/icons/numbers/4.svg"),
        title: "Разработка",
        description: "Реализуем приложение на основе составленного технического задания.",
        order: 4
      },
      {
        number: require("@/assets/icons/numbers/2.svg"),
        title: "Проектирование",
        description: "Определим архитектуру приложения и используемые технологии.",
        order: 2
      },
      {
        number: require("@/assets/icons/numbers/5.svg"),
        title: "Тестирование",
        description: "Убедимся в корректности работы продукта и проведем демо-показ.",
        order: 5
      },
      {
        number: require("@/assets/icons/numbers/3.svg"),
        title: "Составление ТЗ",
        description: "Регламентируем требования, выявленные в ходе анализа и проектирования.",
        order: 3
      },
      {
        number: require("@/assets/icons/numbers/6.svg"),
        title: "Приемка",
        description: "Проверьте, действительно ли разработанное приложение соответствует вашим требованиям.",
        order: 6
      }
    ]
  }),
  methods: {
    getOrder(order) {
      return window.innerWidth <= 768 ? order : 'inherit';
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/global";

.stage {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-areas:
      "number title"
      "number description";
  grid-column-gap: 20px;

  .number {
    grid-area: number;
    align-self: center;
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