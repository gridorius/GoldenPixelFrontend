<template>
  <section>
    <FeedbackForm/>
    <footer>
      <div class="grid-two-columns">
        <div class="copyright">
          Golden pixel 2024 ©
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
            </div>
          </div>
          <div class="contacts-data">
            <div class="title">
              Социальные сети:
            </div>
            <div class="description">
              <div class="item">
                <div class="social-icons">
                  <a href="https://t.me/golden_pixel_web"><img src="../assets/icons/social/telegram_icon.svg" alt="telegram"></a>
                  <!--                  <a href=""><img src="../assets/social/whatsapp_icon.svg" alt="whatsapp"></a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
import FeedbackForm from "@/components/FeedbackForm.vue";

export default {
  name: "FooterComponent",
  components: {FeedbackForm}
}
</script>
<style scoped lang="scss">
@import "../assets/main";

footer {
  margin-top: 100px;
  padding: 50px 0;
  background: #0f1318;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  .title {
    margin-bottom: 30px;
  }

  .copyright {
    @extend %font-regular;
    font-family: $font_family_roboto;
    color: #555;
    align-self: end;
    @media (max-width: 768px) {
      grid-row: 2/3;
    }
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