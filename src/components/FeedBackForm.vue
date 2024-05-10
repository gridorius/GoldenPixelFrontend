<template>
  <PopupWrapper v-if="show" @click="close">
    <div class="feedback-form" @click.stop>
      <div class="close" @click="close">
        <img src="@/assets/icons/x.svg">
      </div>
      <div class="title">
        Свяжитесь с нами
      </div>
      <input type="text" placeholder="Как к вам обращаться?" v-model="data.requester">
      <input type="email" placeholder="E-mail" v-model="data.email">
      <textarea maxlength="300" placeholder="Комментарий (до 300 символов)" v-model="data.description"></textarea>
      <button @click="send" class="send">Отправить</button>
    </div>
  </PopupWrapper>
</template>

<script>
import PopupWrapper from "@/components/PopupWrapper.vue";

export default {
  name: 'FeedbackForm',
  data: () => ({
    data: {
      requester: '',
      email: '',
      description: ''
    }
  }),
  emits: ['update:show'],
  methods: {
    close() {
      this.$emit('update:show', false);
    },
    send() {
      fetch(`https://api.golden-pixel.kz/api/Orders/Create`, {
        method: 'post',
        body: JSON.stringify(this.data)
      })
          .then(r => r.json())
          .then(() => {
              this.close();
          });
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PopupWrapper
  }
}
</script>

<style lang="scss">
.feedback-form {
  position: relative;
  color: #2E2F55;
  display: grid;
  grid-gap: 10px;
  background-color: #F3F3F3;
  padding: 60px 210px;

  @media screen and (min-device-width: 321px) and (max-device-width: 1024px) {
    padding: 30px 15vw;
    font-size: 16px;
  }

  .title {
    font-size: 24px;
    @media screen and (min-device-width: 321px) and (max-device-width: 1024px) {
      font-size: 20px;
    }
  }

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    @media screen and (min-device-width: 321px) and (max-device-width: 1024px) {
      top: 10px;
      right: 10px;
    }
  }

  input, textarea {
    font-family: "Roboto", sans-serif;
    min-width: 400px;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
    padding: 10px 0;
    border-bottom: 1px solid #2E2F55;
    color: #2E2F55;

    @media screen and (min-device-width: 321px) and (max-device-width: 1024px) {
      min-width: 200px;
    }
  }

  textarea {
    padding: 5px;
    margin-top: 20px;
    border: 1px solid #2E2F55;
    resize: none;
    height: 150px;
  }

  .send {
    display: grid;
    margin-top: 20px;
    padding: 10px 30px;
    justify-self: center;
    background: #2E2F55;
    border: 0;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
}
</style>