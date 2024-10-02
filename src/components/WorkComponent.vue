<template>
  <div class="work-description">
    Мы практикуем командную разработку, а заказчик - часть нашей команды. Над вашим продуктом будут работать несколько
    специалистов, а вы сможете контролировать каждый этап.
    Код проходит проверку качества: мы используем системы контроля версий и практикуем код-ревью.
  </div>
  <div class="work-sub-description">
    <div class="title">
      Реализация сайта или приложения делится на 4 части:
    </div>
    <ul class="golden-points">
      <li>разработка дизайна - необходимо продумать внешний вид сайта, расположение блоков, текста, изображений;</li>
      <li>frontend-разработка - это часть, которую видит пользователь, т.е. реализация в коде согласованного ранее
        дизайна;
      </li>
      <li>backend-разработка - создание внутреннего механизма, отвечающего за вычисления, обработку данных, интеграции,
        согласно договоренностям о функционале приложения;
      </li>
      <li>тестирование - в ходе этого этапа проверяется корректность работы frontend и backend частей, чтобы найти
        ошибки
        реализации и избежать их в будущем.
      </li>
    </ul>
  </div>
  <div class="we-use">
    Что мы обычно используем?
    <ul class="golden-points">
      <li>для дизайна - инструмент Figma;</li>
      <li>для frontend - язык JavaScript и фреймворк Vue.js;</li>
      <li>для backend:
        <ul class="golden-points sub">
          <li>языки: PHP или C#;</li>
          <li>базы данных: MySql, Postgres, Clickhouse;</li>
          <li>платформа Bitrix - по необходимости;</li>
        </ul>
      </li>
      <li>для тестирования - составляем тест-кейсы и проверяем их инструментами для мануального, модульного и
        интеграционного тестирования.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WorkComponent"
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.we-use {
  @extend .main-margin;
  @extend %font-middle;
  font-family: $font_family_jetbrains;
  color: $font_color_light;
  margin-top: 30px;
}

.work-description {
  @extend .main-margin;
  @extend %font-middle;
  font-family: $font_family_roboto;
  color: $font_color_light;
}

.work-sub-description {
  margin-top: 30px;
  @extend .main-margin;
  @extend %font-regular;
  font-family: $font_family_roboto;
  color: $font_color_light;

  .title {
    @extend %font-middle;
  }
}

ul {
  color: $font_color_sub_light;
}
</style>