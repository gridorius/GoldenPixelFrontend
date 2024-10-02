<template>
  <div class="real-price-description">
    Точная стоимость решения - после консультации.
  </div>
  <div class="cards grid-two-columns">
    <div class="card" v-for="(card, i) in cards" :key="i">
      <div class="title">
        <span class="text">{{ card.title }}</span>
        <span class="price-from">{{
            typeof card.priceFrom == 'string' ? card.priceFrom : ('от ' + card.priceFrom.toLocaleString() + '₸')
          }}</span>
      </div>
      <div class="work-description">
        {{ card.workDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricesComponent",
  data: () => ({
    cards: [
      {
        title: 'Landing page',
        priceFrom: 60000,
        workDescription: '- базовая SEO-настройка\n' +
            '- разработка дизайна и иконок\n' +
            '- готовые или индивидуальные решения\n' +
            '- адаптивная верстка\n' +
            '- первичное наполнение контентом\n' +
            '- формы обратной связи\n' +
            '- от 4 до 10 секций'
      },
      {
        title: 'Корпоративные сайты',
        priceFrom: 110000,
        workDescription: '- базовая SEO-настройка\n' +
            '- разработка дизайна и иконок\n' +
            '- готовые или индивидуальные решения\n' +
            '- адаптивная верстка\n' +
            '- первичное наполнение контентом\n' +
            '- формы обратной связи\n' +
            '- от 2 до 10 страниц (новости, описание деятельности и т.п.)\n' +
            '- регистрация и авторизация\n' +
            '- настройка SSL-сертификата\n' +
            '- админ-панель'
      },
      {
        title: 'Интернет-магазины',
        priceFrom: 160000,
        workDescription: '- базовая SEO-настройка\n' +
            '- разработка дизайна и иконок\n' +
            '- готовые или индивидуальные решения\n' +
            '- адаптивная верстка\n' +
            '- первичное наполнение контентом\n' +
            '- формы обратной связи\n' +
            '- каталог товаров и услуг\n' +
            '- корзина\n' +
            '- дистанционная оплата\n' +
            '- служба обратной связи (отзывы)\n' +
            '- регистрация и авторизация\n' +
            '- настройка SSL-сертификата\n' +
            '- админ-панель'
      },
      {
        title: 'Поддержка',
        priceFrom: 'по договоренности',
        workDescription: '- поиск и исправление ошибок в готовом решении\n' +
            '- миграции баз данных\n' +
            '- обновление версий языков программирования и баз данных\n' +
            '- установка SSL-сертификатов\n' +
            '- размещение на хостинге или перенос на новый\n' +
            '- настройка почты'
      },
      {
        title: 'Внедрение CRM Битрикс24',
        priceFrom: 125000,
        workDescription: '- автоматизация бизнес- и смарт-процессов\n' +
            '- совместная работа (чаты, календари)\n' +
            '- автоматизация продаж\n' +
            '- лиды, сделки, контакты, компании\n' +
            '- роботы и триггеры'
      },
    ]
  })
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.real-price-description {
  @extend .main-margin;
  @extend %font-middle;
  font-family: $font_family_jetbrains;
  color: $font_color_light;
  margin-bottom: 30px;
}

.cards {
  @extend .main-margin;

  .card {
    .title {
      .text {
        @extend %font-middle;
        font-weight: bold;
        font-family: $font_family_jetbrains;
        color: $font_color_light_golden;
      }

      .price-from {
        @extend %font-regular;
        font-family: $font_family_roboto;
        color: $font_color_light;
        margin-left: 10px;
      }
    }

    .work-description {
      white-space: pre-wrap;
      @extend %font-regular;
      font-family: $font_family_roboto;
      color: $font_color_sub_light;
      margin-top: 20px;
    }
  }
}
</style>