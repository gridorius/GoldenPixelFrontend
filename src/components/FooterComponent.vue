<template>
  <section>
    <FeedbackForm/>
    <footer>
      <div class="grid-two-columns">
        <div class="left">
          <div class="golden-title title">
            Навигация по сайту:
          </div>
          <ul class="bottom-menu">
            <li>
              <RouterLink class="menu-link" to="/#service">Услуги</RouterLink>
            </li>
            <li>
              <RouterLink class="menu-link" to="/#stages">Этапы разработки</RouterLink>
            </li>
            <li>
              <RouterLink class="menu-link" to="/bitrix">О Bitrix24</RouterLink>
            </li>
            <li>
              <RouterLink class="menu-link" to="/prices">Прайс</RouterLink>
            </li>
            <li>
              <RouterLink class="menu-link" to="/work">О разработке</RouterLink>
            </li>
          </ul>
        </div>
        <div class="contacts">
          <div class="golden-title title">
            Контакты для связи:
          </div>
          <div class="contacts-data">
            <div class="title">
              Телефон:
            </div>
            <div class="description">
              <div class="item"> +7 (707) 532-60-61</div>
              <div class="item">+7 (707) 028-97-07</div>
            </div>
          </div>
          <div class="contacts-data">
            <div class="title">
              Почта:
            </div>
            <div class="description">
              <div class="item"> request@golden-pixel.kz</div>
              <div class="item"> graure@yandex.ru</div>
            </div>
          </div>
          <div class="contacts-data">
            <div class="title">
              Адрес:
            </div>
            <div class="description">
              <div class="item">г.Алматы, Алмалинский район, улица Шевченко, дом 118, офис 314</div>
            </div>
          </div>
          <div class="contacts-data">
            <div class="title">
              Социальные сети:
            </div>
            <div class="description">
              <div class="item">
                <div class="social-icons">
                  <a target="_blank" href="https://t.me/golden_pixel_web"><img
                      src="../assets/icons/social/telegram_icon.svg"
                      alt="telegram"></a>
                  <!--                  <a href=""><img src="../assets/social/whatsapp_icon.svg" alt="whatsapp"></a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          Golden pixel {{ year }} ©
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import FeedbackForm from "@/components/FeedbackForm.vue";

export default {
  name: "FooterComponent",
  components: {FeedbackForm},
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/main";

footer {
  margin-top: 100px;
  padding: 50px 0;
  background: #0f1318;


  .left {
    display: grid;
    height: 100%;
    align-content: start;

    .bottom-menu {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        padding: 5px 0;
        a{
          @extend %font-regular;
          color: $font_color_light;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  .title {
    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }

  .copyright {
    @extend %font-regular;
    font-family: $font_family_roboto;
    color: #555;
    align-self: end;
  }

  .contacts-data {
    @extend %font-regular;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: min-content auto;
    font-family: $font_family_roboto;
    color: $font_color_sub_light;
    margin-top: 10px;

    .title {
      white-space: nowrap;
    }

    .social-icons {
      display: flex;
      gap: 23px;
    }
  }
}
</style>