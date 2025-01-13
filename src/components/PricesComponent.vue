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
        <ul class="golden-points">
          <li v-for="(item, i) in card.workDescription" :key="i">
            {{ item}}
          </li>
        </ul>
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
        workDescription: [
          'базовая SEO-настройка',
          'разработка дизайна и иконок',
          'готовые или индивидуальные решения',
          'адаптивная верстка',
          'первичное наполнение контентом',
          'формы обратной связи',
          'от 4 до 10 секций',
        ]
      },
      {
        title: 'Корпоративные сайты',
        priceFrom: 110000,
        workDescription: [
          'базовая SEO-настройка',
          'разработка дизайна и иконок',
          'готовые или индивидуальные решения',
          'адаптивная верстка',
          'первичное наполнение контентом',
          'формы обратной связи',
          'от 2 до 10 страниц (новости, описание деятельности и т.п.)',
          'регистрация и авторизация',
          'настройка SSL-сертификата',
          'админ-панель',
        ]
      },
      {
        title: 'Интернет-магазины',
        priceFrom: 160000,
        workDescription: [
          'базовая SEO-настройка',
          'разработка дизайна и иконок',
          'готовые или индивидуальные решения',
          'адаптивная верстка',
          'первичное наполнение контентом',
          'формы обратной связи',
          'каталог товаров и услуг',
          'корзина',
          'дистанционная оплата',
          'служба обратной связи (отзывы)',
          'регистрация и авторизация',
          'настройка SSL-сертификата',
          'админ-панель',
        ]
      },
      {
        title: 'Поддержка',
        priceFrom: 'по договоренности',
        workDescription: [
          'поиск и исправление ошибок в готовом решении',
          'миграции баз данных',
          'обновление версий языков программирования и баз данных',
          'установка SSL-сертификатов',
          'размещение на хостинге или перенос на новый',
          'настройка почты',
        ]
      },
      {
        title: 'Внедрение CRM Битрикс24',
        priceFrom: 125000,
        workDescription: [
          'автоматизация бизнес- и смарт-процессов',
          'совместная работа (чаты, календари)',
          'автоматизация продаж',
          'лиды, сделки, контакты, компании',
          'роботы и триггеры',
        ]
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