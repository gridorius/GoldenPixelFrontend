<template>
  <div class="page-wrapper">
    <Header type="white"></Header>
    <div class="page-content">
      <TitleComponent>О CRM Bitrix24</TitleComponent>
      <section>
        <div class="bitrix-features grid-two-columns">
          <div class="card">
            <div class="title">Совместная работа</div>
            <div class="description">
              <p>
                Удобная совместная работа для всего бизнеса. Объедините сотрудников в едином приложении, повторяющем
                структуру Вашей компании.
              </p>
              <p>
                Используйте все возможности для общения в CRM Bitrix24:
              </p>
              <ul class="golden-points">
                <li>мессенджеры и видеозвонки</li>
                <li>новости</li>
                <li>календарь</li>
                <li>совместный доступ к документам</li>
                <li>хранение данных на корпоративном диске</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title">CRM</div>
            <div class="description">
              <p>
                CRM — базовый инструмент, система для автоматизации продаж и маркетинга. Вся ваша клиентская база в
                одном месте! Подключившись к CRM-системе организуйте все каналы продаж: сайт, телефон, почту соцсети и
                мессенджеры.
              </p>
              <p>
                Заказы автоматически собираются CRM. Вы в любое время и в любом месте будете знать состояние сделок,
                сколько клиентов и процессов в работе.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="title">Задачи и проекты</div>
            <div class="description">
              <p>
                Эффективная работа над задачами и проектами в удобном <br>таск-трекере. Работайте по SCRUM (СКРАМ) или
                выбирайте предпочитаемую методологию планирования.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="title">Сайты и магазины</div>
            <div class="description">
              <p>
                Легко и без проблем создавайте сайты и лендинги для сбора заявок, отзывов и онлайн-продаж в простом и
                функциональном конструкторе. Добавьте на сайт виджеты для продаж.
              </p>
              <p>
                Без единой строчки кода и всего за 2 минуты создайте инструмент для привлечения клиентов и продвижения
                компании.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="title">Автоматизация</div>
            <div class="description">
              <p>
                Автоматизируйте рутинные задачи, работу со сделками, согласование договоров, оплату счетов, отчетность -
                все, что замедляет вашу работу.
              </p>
              <p>
                В Битрикс24 существуют инструменты для почтовых рассылок и другой автоматизации рабочих мест. И все это
                доступно без привлечения программиста.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import Header from "@/components/HeaderComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";

export default {
  name: "BitrixIntegrationPage",
  components: {TitleComponent, Header, FooterComponent}
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.bitrix-features {
  @extend .main-margin;
  @extend %font-middle;
  font-family: $font_family_jetbrains;
  color: $font_color_light;
  margin-top: 30px;

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