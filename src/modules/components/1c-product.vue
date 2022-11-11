<template>
    <div class="product">
        <section class="info">
            <div class="info-inner">
                <div class="info-inner__header">
                    <h1>
                        Продукты фирмы 1С
                    </h1>
                    <div class="info-inner__header_wrap">
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/report.png" alt="">
                            <p>Бухгалтерский учет</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/report.png" alt="">
                            <p>Кадровый учет</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/report.png" alt="">
                            <p>Управленческий учет</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/report.png" alt="">
                            <p>Финансовый учет</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pssb">
            <div class="pssb-inner">
                <div class="pssb-inner__header">
                    <h1>Возможности 1С:</h1>
                </div>
                <div class="pssb-inner__wrap">
                        <div class="pssb-inner__wrap_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <p>автоматизация организационной и хозяйственной деятельности</p>
                        </div>
                        <div class="pssb-inner__wrap_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <p>учет и аналитика по организации;</p>
                        </div>
                        <div class="pssb-inner__wrap_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <p>планирование, ведение бюджета, анализ финансов предприятия</p>
                        </div>
                        <div class="pssb-inner__wrap_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <p>расчет зарплаты и других выплат сотрудникам</p>
                        </div>
                        <div class="pssb-inner__wrap_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <p>управление персоналом</p>
                        </div>
                </div>
            </div>
        </section>
        <section class="give">
            <div class="give-inner">
                <div class="give-inner__header">
                    <h1>Покупая лицензию 1С у нас, <br> Вы получаете:</h1>
                </div>
                <div class="give-inner__wrap">
                        <div class="give-inner__wrap_cnt">
                            <img src="./../../assets/images/bonus.png" alt="">
                            <h3>Доставка коробки или онлайн лицензия</h3>
                        </div>
                        <img class="give-inner__wrap_img" src="./../../assets/images/right.png" alt="">
                        <div class="give-inner__wrap_cnt">
                            <img src="./../../assets/images/service2.png" alt="">
                            <h3>Установка </h3>
                        </div>
                        <img class="give-inner__wrap_img" src="./../../assets/images/right.png" alt="">
                        <div class="give-inner__wrap_cnt">
                            <img src="./../../assets/images/service1.png" alt="">
                            <h3>Настройка</h3>
                        </div>
                        <img class="give-inner__wrap_img" src="./../../assets/images/right.png" alt="">
                        <div class="give-inner__wrap_cnt">
                            <img src="./../../assets/images/consultant.png" alt="">
                            <h3>Консультация</h3>
                        </div>
                        <img class="give-inner__wrap_img" src="./../../assets/images/right.png" alt="">
                        <div class="give-inner__wrap_cnt">
                            <img src="./../../assets/images/service.png" alt="">
                            <h3>Техническая поддержка</h3>
                        </div>
                </div>
            </div>
        </section>
        <section class="products">
            <div class="products-inner">
                <div class="products-inner_header">
                    <h1>Продукты 1С:</h1>
                </div>
            </div>
        </section>
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

export default {
    components: {
        CallbackPage,
    },
    data() {
         return {
            connect: false
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
.product {
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
                &_wrap {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 30px;
                    &_cnt {
                        display: flex;
                        align-items: center;
                        width: 200px;
                        img {
                            width: 90px;
                            height: 90px;
                        }
                        p {
                            padding-left: 20px;
                            font-weight: bold;
                            font-size: 24px;
                        }
                    }
                }
            }     
        }
    }
    .pssb {
        &-inner {
        @extend %container;
            &__header {
                h1 {
                    @extend %header;
                }
            }
            &__wrap {
                display: flex;
                justify-content: space-around;
                
                &_cnt {
                    width: 200px;
                    height: auto;
                    img {
                        width: 120px;
                        height: 120px; 
                    }
                    p {
                        text-align: center;
                        font-family: 'Roboto';
                        font-weight: bold;
                        font-size: 18px;
                    }
                }
            }
        }
    }
    .give {
        &-inner {
        @extend %container;
            &__header {
                h1 {
                    @extend %header;
                }
            }
            &__wrap {
                display: flex;
                justify-content: space-around;
                &_cnt {
                    width: 200px;
                    height: auto;
                    img {
                        width: 130px;
                        height: 130px; 
                        display: block;
                        margin: auto;
                    }
                    h3 {
                        text-align: center;
                        font-family: 'Roboto';
                        font-weight: bold;
                        font-size: 18px;
                        color: #082567;
                    }
                }
                &_img {
                    padding-top: 40px;
                    width: 70px;
                    height: 70px;
                }
            }
        }
    }
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