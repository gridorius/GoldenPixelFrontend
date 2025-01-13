<template>
  <section id="feedback">
    <PersonalConditions v-model:show="showPersonalConditions"></PersonalConditions>
    <TitleComponent>Свяжитесь с нами</TitleComponent>
    <div @input="validateForm" v-if="!success" class="grid-two-columns feedback-form">
      <input :class="{invalid: errorFields['requester']}" v-model="client.requester" type="text"
             placeholder="Как к вам обращаться?">
      <input :class="{invalid: errorFields['email']}" v-model="client.email" type="email" placeholder="E-mail">
      <div class="comment">
        <textarea @paste="commentInput" @keydown="commentInput" v-model="client.description" rows="5"
                  placeholder="Комментарий"></textarea>
        <div class="counter">{{ client.description.length }}/{{ commentLimit }}</div>
      </div>
      <div class="text">Мы свяжемся с вами в ближайшее время.</div>
      <div class="send-container">
        <div class="errors">
          <div v-for="(error, i) in errors" :key="i" class="error">
            {{ error }}
          </div>
        </div>
        <label class="personal-conditions">
          <input @change="validateForm" v-model="personalAccess" type="checkbox">
          <span>Согласен на обработку</span>
          <a href="javascript:void(0)" @click="showPersonalConditions = true">персональных данных</a>
        </label>
        <br>
        <button :disabled="sendDisabled" @click="send" class="button">Написать нам</button>
      </div>
    </div>
    <div v-else class="success-sending">
      <div class="text">
        Ваша заявка успешно отправлена
      </div>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/TitleComponent.vue";
import PersonalConditions from "@/components/PersonalConditions.vue";
import Validator from "@/lib/Validator";

export default {
  name: "FeedbackForm",
  components: {PersonalConditions, TitleComponent},
  data: () => ({
    client: {
      requester: '',
      email: '',
      description: '',
    },
    success: false,
    commentLimit: 500,
    showPersonalConditions: false,
    errors: [],
    errorFields: {},
    personalAccess: false,
    sendDisabled: true
  }),
  computed: {},
  methods: {
    validateForm() {
      let validation = this.validation();
      if (!validation.isSuccess()) {
        this.errors = validation.getErrors();
        this.errorFields = validation.getErrorFields();
      } else {
        this.errors = [];
        this.errorFields = {};
      }
      this.sendDisabled = !this.personalAccess || !validation.isSuccess();
    },
    commentInput(e) {
      if (e.key === 'Backspace')
        return;

      if (this.client.description.length >= this.commentLimit)
        e.preventDefault();

      this.client.description = this.client.description.substring(0, this.commentLimit);
    },
    validation() {
      let validator = new Validator(this.client);
      validator.validate(i => i.requester)
          .setField('requester')
          .required('Не заполнено имя').max(150, "Слишком длинное имя (до 150 символов)");
      validator.validate(i => i.email)
          .setField('email')
          .required('Не заполнен E-mail').max(256, "Слишком длинный e-mail (до 256 символов)")
          .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Указан некорректный e-mail');

      return validator;
    },
    send() {
      this.errors = [];
      if (!this.personalAccess) {
        this.errors.push("Подтвердите согласие на обработку данных");
        return;
      }

      let validation = this.validation();
      if (!validation.isSuccess()) {
        this.errors = validation.getErrors();
        return;
      }

      fetch(`https://api.golden-pixel.kz/api/Orders/Create`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.client)
      })
          .then(r => r.json())
          .then(r => {
            if (r.error) {
              r.error.errorMessage.replace(/Обнаружено \d+ ошибок валидации\./, '').split(/\n/).forEach(e => this.errors.push(e));
              return;
            }
            this.success = true;
          });
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/main";

.send-container {
  width: 100%;

  .personal-conditions {
    @extend %font-regular;
    display: flex;
    color: $font_color_light;
    gap: 5px;

    input {
      width: 20px;
    }
  }
}

.success-sending {
  @extend .main-margin;
  @extend %font-middle;
  display: grid;
  justify-items: center;
  color: $font_color_light;

  .text {
    background: #4daa4d;
    padding: 20px 40px;
  }
}

.feedback-form {
  grid-row-gap: 20px;

  input {
    @extend %font-regular;

    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid $font_color_light_golden;
    color: $font_color_light;
    padding: 10px 0;
    width: 100%;
  }

  &:invalid {
    border-color: red;
  }

  .errors {
    margin-bottom: 10px;

    .error {
      @extend %font-regular;
      color: #ff4848;
    }
  }

  input.invalid {
    border-bottom: 2px solid #ff4848;
  }

  .comment {
    width: 100%;
    position: relative;

    textarea {
      @extend %font-regular;
      border: 0;
      outline: 0;
      background-color: #0D1015;
      color: $font_color_light;
      width: 100%;
      padding: 15px;
      box-sizing: border-box;
      resize: vertical;
      max-height: 400px;
    }

    .counter {
      @extend %font-regular;
      position: absolute;
      bottom: 5px;
      right: 10px;
      color: $font_color_light;
      float: right;
      margin-top: 5px;
    }
  }

  .text {
    @extend %font-regular;
    color: $font_color_sub_light;
  }
}
</style>