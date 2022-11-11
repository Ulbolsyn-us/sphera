<template>
    <div class="menu">
        <div class="menu-nav">
            <div class="menu-nav_item" @click="isOpen = !isOpen">
                <a href="#">{{ title }}</a>
                <svg viewBox="0 0 1030 638" width="10" > 
                    <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
                </svg>
                <transition name="fade" appear>
                    <div class="menu-nav_item_sub" v-if="isOpen">
                        <div v-for="(item, i) in items" :key="i" class="menu-nav_item_sub_it">
                        <a :href="item.link">{{ item.title }}</a>
                        </div>
                    </div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
    'title', 'items'
    ],
    data () {
    return {
      isOpen: false
    }
  }
}
</script>
<style lang="scss" scoped>
    .menu {
        &-nav {
            width: 120px;
            height: auto;
            &_item {
                svg {
                    padding-left: 5px;
                }
                a {
                    font-family: 'Roboto Slab', serif;
                    color: white;
                    font-size: 20px;
                    padding-bottom: 20px;
                }
                &_sub {
                    &_it {
                        width: 300px;
                        padding-top: 10px;
                    }
                }
            }
        }
        .fade-enter-active,
        .fade-leave-active {
            transition: all .5s ease-out;
            opacity: .7;
        }
        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }
    }
</style>