<template>
    <section id="about">
        <div class="title">О нас</div>
        <div class="about-target">
            {{target}}
        </div>
        <div class="about-contacts">
            {{about}}
            <div class="social-icons">
                <img src="@/assets/icons/telegram_icon.svg" alt="">
                <img src="@/assets/icons/whatsapp_icon.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'AboutComponent',
  data: () => ({
    target: `Наша цель — обеспечить простоту
и предсказуемость в процессе
разработки web-приложений, даже
если вы не знакомы с IT.`,
    about: `Контакты для связи:

E-mail: noreply@golden-pixel.kz

Телефоны:
+ 7 (707) 532-60-61
+ 7 (707) 028-97-07`
  })
}
</script>

<style lang="scss">
@import "@/assets/style/global.scss";
.about-target {
  font-family: $font-family_2;
  font-size: 36px;
  color: $fontColor;
  grid-column: 1/4;
  white-space: pre;

  @media only screen and (min-width: 321px) and (max-device-width: 1024px){
    grid-column: 1/9;
    font-size: 22px;
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1160px){
    font-size: 25px;
  }
}

.about-contacts {
  font-family: $font-family_2;
  font-size: 24px;
  white-space: pre;
  color: $fontColor;
  grid-column: 7/9;

  @media only screen and (min-width: 321px) and (max-device-width: 1024px){
    grid-column: 1/9;
    font-size: 22px;
    margin-top: 50px;
  }
}

.social-icons {
  display: flex;
  gap: 23px;
  margin-top: 30px;
}
</style>