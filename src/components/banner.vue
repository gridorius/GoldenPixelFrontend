<template>
    <div class="banner" :style="{'background-image': 'url(' + require('@/assets/banner.png') + ')'}">
        <section style="height: 100%;">
            <div class="banner-content">
                <div class="title">{{showTitle}}</div>
                <div class="sub-title">{{subTitle}}</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data: () => ({
    title: 'Golden pixel',
    subTitle: `Превращаем идеи в реальность
Web-приложения для вашего бизнеса`,
    showTitle: '',
  }),
  mounted() {
    this.addTitleSymbol();
  },
  methods:{
    addTitleSymbol(){
      this.showTitle = this.title.substring(0, this.showTitle.length + 1);
      if(this.showTitle.length < this.title.length)
        setTimeout(() => this.addTitleSymbol(), 100 + Math.random() * 500);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/global.scss";
  .title{
    &:after{
      content: "l";
      animation: show-hide 1s steps(2, jump-start) infinite;
    }
  }

  @keyframes show-hide {
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }

  .banner {
    width: 100%;
    height: calc(100vh - 80px);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $background-color_2;
    background-blend-mode: overlay;

    .banner-content {
      grid-column: 1/5;
      align-self: center;
      @media only screen and (min-width: 321px) and (max-device-width: 768px){
        grid-column: 1/9;
      }

      @media only screen and (min-width: 321px) and (max-device-width: 1024px){
        grid-column: 1/7;
      }

      .title {
        font-size: 80px;
        font-family: $font-family_2;
        color: $color_2;

        @media only screen and (min-width: 321px) and (max-device-width: 768px){
          font-size: 50px;
        }
      }

      .sub-title {
        font-family: $font-family_2;
        font-size: 40px;
        color: $color_3;
        line-height: 50px;
        white-space: pre;

        @media only screen and (min-width: 321px) and (max-device-width: 768px){
          font-size: 20px;
          line-height: inherit;
        }
      }
    }
  }
</style>