<template>
  <header-component></header-component>
  <router-view></router-view>
    <transition name="fade"> 
      <div v-if="buttonShow" @click="click" class="btn_toTop">
        <img src="./assets/images/toup.svg" alt="">
      </div>
    </transition> 
  <footer-component></footer-component>
</template>


<script>
import HeaderComponent from '@/partials/Header-component'
import FooterComponent from '@/partials/Footer-component'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      buttonShow: false
    }
  },
    mounted: function() {
      this.checkScrollPosition();
      window.addEventListener('scroll', this.checkScrollPosition);
    },
    methods: {
      checkScrollPosition() {
        this.buttonShow = window.pageYOffset > 10;
      },
      click() {
        scroll({
          top: 0,
          behavior: "smooth"
        })
      }
    }
}
</script>

<style lang="scss" scoped>
@import "./assets/style.scss";
#app {
  background-color: white;
  
}
.btn_toTop {
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 25px;
  cursor: pointer;
  padding: 5px;
    img {
      width: 45px;
      height: 45px;
    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
