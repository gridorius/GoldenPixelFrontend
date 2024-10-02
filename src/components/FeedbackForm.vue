<template>
  <section id="feedback">
    <TitleComponent>Свяжитесь с нами</TitleComponent>
    <div v-if="!success" class="grid-two-columns feedback-form">
      <input v-model="client.requester" type="text" placeholder="Как к вам обращаться?">
      <input v-model="client.email" type="email" placeholder="E-mail">
      <div class="comment">
        <textarea @paste="commentInput" @keydown="commentInput" v-model="client.description" rows="5"
                  placeholder="Комментарий"></textarea>
        <div class="counter">{{ client.description.length }}/{{ commentLimit }}</div>
      </div>
      <div class="text">Мы свяжемся с вами в ближайшее время.</div>
      <div class="send-container">
        <div class="errors">
          <div v-for="(error, i) in errors" :key="i" class="error">
            {{error}}
          </div>
        </div>
        <button @click="send" class="button">Написать нам</button>
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

export default {
  name: "FeedbackForm",
  components: {TitleComponent},
  data: () => ({
    client: {
      requester: '',
      email: '',
      description: '',
    },
    success: false,
    commentLimit: 500,
    errors: [
    ]
  }),
  methods: {
    commentInput(e) {
      if (e.key === 'Backspace')
        return;

      if (this.client.description.length >= this.commentLimit)
        e.preventDefault();

      this.client.description = this.client.description.substring(0, this.commentLimit);
    },
    send() {
      fetch(`https://api.golden-pixel.kz/api/Orders/Create`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.client)
      })
          .then(r => r.json())
          .then(r => {
            this.errors = [];
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
@import "../assets/style/global";

.success-sending{
  @extend .main-margin;
  @extend %font-middle;
  display: grid;
  justify-items: center;
  color: $font_color_light;

  .text{
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

  &:invalid{
    border-color: red;
  }

  .errors{
    margin-bottom: 10px;
    .error{
      @extend %font-regular;
      color: red;
    }
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