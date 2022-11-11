<template>
    <div class="slider">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide  v-for="slide in slides" :key="slide.index">
            <div class="slider-item">
                <div class="slider-item_review">
                    <p>{{ slide.review }}</p>
                    <img src="./../../assets/images/ditto.png" alt="">
                </div>
                <div class="slider-item_contact">
                    <img :src="slide.avatar" alt="">
                    <h1>{{ slide.contacts }}</h1>
                </div>
                
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from "vue3-carousel"

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'SlideReview',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data: () => ({
        settings: {
            itemsToShow: 5,
            snapAlign: 'center',
        },
        breakpoints: {
        // 700px and up
        700: {
            itemsToShow: 2,
            snapAlign: 'center',
        },
        // 1024 and up
        1024: {
            itemsToShow: 3,
            snapAlign: 'start',
        },
        },
        slides: ''
        
    }),
    
    created() {
        fetch(`http://localhost:3000/slides`)
            .then(response => response.json())
            .then(json => {this.slides = json});
}
})
</script>
Облачный сервис, который позволяет работать с привычными программами 1С через интернет с любого устройства. Ведите бухгалтерский, налоговый,
управленческий учет, сдавайте отчетность. Сервис подходит для любого вида бизнеса. Он особенно удобен, если бухучет ведется на аутсорсинге, часто приходится работать удаленно из дома, нужно быстро автоматизировать работу или объединить несколько филиалов.
<style lang="scss" scoped>
    .slider {
        width: 100%;
        &-item {
            padding: 20px;
            width: 340px;
            height: 400px;
            &_review {
                border: 2px solid #082567;
                padding-left: 10px;
                position: relative;
                width: 300px;
                height: 250px;
                p {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-size: 20px;
                    color: #082567;
                    line-height: 30px;
                    text-align: left;
                }
                img {
                    width: 40px;
                    height: 30px;
                    float: left;
                }
            }
            &_contact {
                display: flex;
                align-items: flex-start;
                align-content: flex-start;
                padding-top: 10px;  
                
                img {
                    width: 140px;
                    height: 80px;
                }
                h1 {
                    font-family: 'Roboto';
                    font-size: 20px;
                    color: #082567;
                    line-height: 20px;
                    vertical-align: middle;
                }
            }
            &:hover {
                background-color: #F1F1F1;
            }
        }
       
    }
</style>
