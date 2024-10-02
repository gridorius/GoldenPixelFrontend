<template>
  <section id="service">
    <TitleComponent>Мы делаем для вас</TitleComponent>
    <div class="grid-two-columns elements">
      <div v-for="(element, i) in elements" :key="i" class="card">
        <div class="title">{{ element.title }}</div>
        <div class="description">{{ element.description }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "ServiceComponent",
  components: {TitleComponent},
  data: () => ({
    elements: [
      {
        title: 'Внедрение CRM Bitrix',
        description: 'Сделайте работу ваших сотрудников более быстрой и комфортной благодаря автоматизации бизнес-процессов с CRM Bitrix и интеграции сторонних систем. \n' +
            'Избавим от рутинных действий, таких как рассылка почты, контроль сотрудников, оценка эффективности продаж.'
      },
      {
        title: 'Landing Pages',
        description: 'Прорекламируйте свой продукт и проверьте потенциальный спрос.\n' +
            'Разработаем для вас одностраничный сайт, который раскроет пользу конкретного бизнес-предложения.'
      },
      {
        title: 'Поддержка продуктов',
        description: 'Будьте уверены в стабильности работы программного обеспечения для непрерывной работы компании.\n' +
            'Расширим функциональность, исправим ошибки, произведем миграции и обновление версий.'
      },
      {
        title: 'Интернет-магазины',
        description: 'Увеличьте количество потенциальных продаж и обеспечьте клиентам самый удобный способ покупки.\n' +
            'Реализуем удобный каталог товаров, возможность онлайн заказов и безналичной оплаты.'
      },
      {
        title: 'Корпоративные сайты',
        description: 'Расскажите о преимуществах вашего бизнеса, о его услугах и миссии.\n' +
            'Поможем сформировать имидж компании, организовать обратную связь и возможность задать вопрос, предложить сотрудничество.'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.elements {
  .card {
    .title {
      @extend .golden-title;
    }

    .description {
      @extend .description-sub-font;
    }
  }
}
</style>