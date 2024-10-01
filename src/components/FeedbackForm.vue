<template>
  <section id="feedback">
    <TitleComponent>Свяжитесь с нами</TitleComponent>
    <div class="grid-two-columns feedback-form">
      <input v-model="client.requester" type="text" placeholder="Как к вам обращаться?">
      <input v-model="client.email" type="text" placeholder="E-mail">
      <div class="comment">
        <textarea @paste="commentInput" @keydown="commentInput" v-model="client.description" rows="5"
                  placeholder="Комментарий"></textarea>
        <div class="counter">{{ client.description.length }}/{{ commentLimit }}</div>
      </div>
      <div class="text">Мы свяжемся с вами в ближайшее время.</div>
      <button @click="send" class="button">Написать нам</button>
    </div>
  </section>
</template>

<script>
import TitleComponent from "@/components/title.vue";

export default {
  name: "FeedbackForm",
  components: {TitleComponent},
  data: () => ({
    client: {
      requester: '',
      email: '',
      description: '',
    },
    commentLimit: 500
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
        body: JSON.stringify(this.data)
      })
          .then(r => r.json())
          .then(r => {
            this.errors = [];
            if (r.error) {
              r.error.errorMessage.replace(/Обнаружено \d+ ошибок валидации\./, '').split(/\n/).forEach(e => this.errors.push(e));
              return;
            }
            this.success = true;
            setTimeout(() => {
              this.close();
              this.success = false;
            }, 5000);
          });
    }
  },
}
</script>

<style scoped lang="scss">
@import "../assets/style/global";

.feedback-form {
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

  .comment {
    width: 100%;

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
    }

    .counter {
      @extend %font-regular;
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