<template>
    <div class="srv">
        <section class="info">
            <div class="info-inner">
                <div class="info-inner__header">
                    <h1>
                        Обслуживание 1С.
                    </h1>
                    <p>
                        Наше участие на всех этапах развития Вашего бизнеса:
                    </p>
                    <div class="info-inner__header_wrap">
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/service.png" alt="">
                            <p>НАСТРОЙКА</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/sell.png" alt="">
                            <p>ОБУЧЕНИЕ</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/consultant.png" alt="">
                            <p>КОНСУЛЬТАЦИИ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="sphera">
            <div class="sphera-inner">
                <div class="sphera-inner__header">
                    <h1>ГК «СФЕРА» - Ваш помощник в работе с программой 1С</h1>
                </div>
                <div class="sphera-inner__wrap">
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Запустим и адаптируем 1С под Ваши бизнес-процессы</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Обновим платформы, конфигурации и классификаторы</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Настроим 1С под удобства Вашего пользования</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Настроим права доступа и интерфейс</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Отредактируем Ваши формы и отчеты в 1С</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Создадим отчеты и обработки</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Перенесем Ваши данные из различных версий 1С и других
программ</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Проведем диагностику на выявление технологических ошибок</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                    <div class="sphera-inner__wrap_box">
                        <img src="./../../assets/images/service.png" alt="">
                        <div class="sphera-inner__wrap_box_cnt">
                            <h2>Создадим архивные копии Ваших баз данных</h2>
                            <button @click="handle"><a href="#connect">Узнать стоимость</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="review">
            <div class="review-inner">
                <h1 class="review-inner__header">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                <slide-review></slide-review>
            </div>
        </section> -->
        <div class="connect" v-if="connect" id="connect" :key="connect">
            <div class="connect-inner">
                <h1 class="connect-inner__header">ОСТАВЬТЕ ЗАЯВКУ И ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОТ СПЕЦИАЛИСТА</h1>
                <callback-page></callback-page>
            </div>
        </div>
    </div>
</template>

<script>
import CallbackPage from './callback-page.vue'
// import SlideReview from './slide-review.vue'

export default {
    components: {
        CallbackPage,
        // SlideReview, 
    },
    data() {
         return {
            connect: false,
        }
    },
    methods: {
        handle() {
           this.connect = true;
        }

    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.srv {
    .info {
        background-color: #F5AC6D ;
        &-inner {
            @extend %container;
            &__header {
                h1 {
                    @extend %header;
                    text-align: left;
                    padding-top: 50px;
                }
                p {
                    font-size: 42px;
                    font-family: 'Roboto';
                    color: #025962;
                }
                &_wrap {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 30px;
                    &_cnt {
                        display: flex;
                        align-items: center;
                        img {
                            width: 90px;
                            height: 90px;
                        }
                        p {
                            padding-left: 20px;
                            font-weight: bold;
                        }
                    }
                }
            }     
        }
    }
    .sphera {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
                font-size: 60px;
            }
            &__wrap {
            padding-left: 30px;
                img {
                    width: 120px;
                    height: 120px;
                    padding-right: 40px;
                }
                &_box {
                    display: flex;
                    align-items: center;
                    padding-bottom: 40px;
                    h2 {
                        font-size: 26px;
                        font-family: 'Roboto';
                        color: #025962;
                        margin: 0;
                        padding-bottom: 5px;
                    }
                    button {
                        @extend %button;
                        height: 50px;
                        a {
                            color: black;
                        }
                    }
                    button:hover {
                        background-color: #082567;
                        a {
                            color: white;
                        }
                    }
                }
            }
        }
    }
    // .review {
    //     &-inner {
    //     @extend %container;
    //         &__header {
    //             @extend %header;
    //             padding-top: 100px;  
    //         }
    //         &__row {
    //             display: flex;
    //             justify-content: space-around;
    //         }

    //     }
    // }
    .connect {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
            }
            &__call {
                padding-left: 40px;
                display: flex;
                justify-content: space-between;
                input[name=name],[name=tel] {
                    width: 250px;
                    height: 50px;
                    padding-left: 20px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-size: 18px;
                    color: #082567;
                    &::placeholder {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: #082567;
                        line-height: 30px;
                        text-align: left;
                        
                    }
                }
                input[name=question] {
                    width: 450px;
                    height: 50px;
                    padding-left: 20px;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-size: 18px;
                    color: #082567;
                    &::placeholder {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: #082567;
                        line-height: 30px;
                        text-align: left;
                    }
                }
                .month {
                    width: 200px;
                    height: 40px;
                }
                
                button {
                    @extend %button;
                    transition: 0.5s;
                }
                button:hover {
                    background-color: #082567;
                    color: white;
                }
            }
        }    
    }
}
</style>