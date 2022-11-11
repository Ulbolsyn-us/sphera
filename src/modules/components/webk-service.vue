<template>
    <div class="webk">
        <section class="info">
             <div class="info-inner">
                <div class="info-inner__header">
                    <h1>
                        1С: Webkassa
                    </h1>
                    <p>
                        Это интеграция кассового аппарата онлайн в платформу 1С. ККМ обеспечивает передачу
данных фискальных чеков в ОФД в режиме реального времени. В государственном реестре
ККМ он зарегистрирован под номером 188.
                    </p>
                </div>
            </div>
        </section>
        <section class="reason">
            <div class="reason-inner">
                <div class="reason-inner__header">
                    <h1>
                        Возможности:
                    </h1>
                    <div class="reason-inner__top">
                        <div class="reason-inner__top_cnt">
                            <img src="./../../assets/images/sell.png" alt="">
                            <h2>Продажа
                            </h2>
                        </div>
                        <div class="reason-inner__top_cnt">
                            <img src="./../../assets/images/buy.png" alt="">
                            <h2>Покупка
                            </h2>
                        </div>
                        <div class="reason-inner__top_cnt">
                            <img src="./../../assets/images/exc.png" alt="">
                            <h2>
                                Возврат
                            </h2>
                        </div>
                        <div class="reason-inner__top_cnt">
                            <img src="./../../assets/images/input.png" alt="">
                            <h2>
                                Внесение
                            </h2>
                        </div>
                        <div class="reason-inner__top_cnt">
                            <img src="./../../assets/images/withdr.png" alt="">
                            <h2>
                                Изъятие
                            </h2>
                        </div>
                    </div>
                    <div class="reason-inner__bottom">
                        <div class="reason-inner__bottom_cnt">
                            <img src="./../../assets/images/passw.png" alt="">
                            <h2>Закрытие
смены
                            </h2>
                        </div>
                        <div class="reason-inner__bottom_cnt">
                            <img src="./../../assets/images/report.png" alt="">
                            <h2>X-отчет
Z-отчет
                            </h2>
                        </div>
                        <div class="reason-inner__bottom_cnt">
                            <img src="./../../assets/images/pay.png" alt="">
                            <h2>
                                Различные
типы оплаты
                            </h2>
                        </div>
                        <div class="reason-inner__bottom_cnt">
                            <img src="./../../assets/images/tax.png" alt="">
                            <h2>
                                Налоговые
ставки на
товары
                            </h2>
                        </div>
                        <div class="reason-inner__bottom_cnt">
                            <img src="./../../assets/images/price.png" alt="">
                            <h2>
                                Маркировка
                            </h2>
                        </div>
                    </div>
                     <h1 class="reason-inner__header_sub">
                        Получите ВСЁ за 29 500 тг в ГОД
                    </h1>
                    <button @click="handle"><a href="#connect">купить</a> </button>
                </div>
            </div>
        </section> 
        <section class="tip">
            <div class="tip-inner">
                <div class="tip-inner__header">
                    <h1>1С: WEBKASSA подходит СФЕРАМ:</h1>
                </div>
                <div class="tip-inner__wrap">
                        <div class="tip-inner__wrap_card">
                            <h1>Розничная торговля</h1>
                            <p>Бензин, дизельное топливо, алкогольная продукция</p>
                            <p>Лесоматериалы, строительные материалы, сантехническое оборудование</p>
                            <p>Металлические изделия, водопроводное и отопительное оборудование, инвентарь</p>
                        </div>
                        <div class="tip-inner__wrap_card">
                            <h1>Оптовая торговля</h1>
                            <p>Бензин, дизельное топливо, алкогольная продукция</p>
                            <p>Компьютеры, периферийное оборудование, программное обеспечениее</p>
                            <p>Аудио- и видеотехника</p>
                            <p>Электрические бытовые приборы</p>
                            <p>Мебель, осветительное оборудование и прочие бытовые принадлежности</p>
                        </div>
                        <div class="tip-inner__wrap_card">
                            <h1>Услуги</h1>
                            <p>Рестораны</p>
                            <p>Гостиницы</p>
                            <p>Доставка продуктов питания</p>
                            <p>Кинотеатры</p>
                            <p>Парикмахерские и салоны красоты</p>
                        </div>
                </div>
                <div class="tip-inner__btn">
                    <button @click="handle"><a href="#connect">купить</a></button>
                </div>
            </div>
        </section>
        <section class="int">
            <div class="int-inner">
                <div class="int-inner__header">
                    <h1>Интеграция с типовыми решениями:</h1>
                </div>
                <div class="int-inner__wrap">
                    <div class="int-inner__wrap_cont">
                        <img src="./../../assets/images/integration.png" alt="">
                        <p>1С:Бухгалтерия 8 для Казахстана</p>
                    </div>
                    <div class="int-inner__wrap_cont">
                        <img src="./../../assets/images/integration.png" alt="">
                        <p>1С:Предприятие 8. Розница для Казахстана</p>
                    </div>
                    <div class="int-inner__wrap_cont">
                        <img src="./../../assets/images/integration.png" alt="">
                        <p>1С:Предприятие 8. Управление торговлей для Казахстана</p>
                    </div>
                    <div class="int-inner__wrap_cont">
                        <img src="./../../assets/images/integration.png" alt="">
                        <p>1С:Предприятие 8. Управление нашей фирмой для Казахстана</p>
                    </div>
                    <div class="int-inner__wrap_cont">
                        <img src="./../../assets/images/integration.png" alt="">
                        <p>1С:Аптека для Казахстана</p>
                    </div>
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
.webk {
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
            }
            
        }
    }
    .reason {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
                font-size: 52px;
                &_sub {
                    font-size: 46px;
                }
            }
            &__top {
                display: flex;
                justify-content: space-between;
                &_cnt {
                    width: 300px;
                    height: 200px;
                    align-items: center;
                    img {
                        width: 85px;
                        height: 85px;
                    }
                    h2 {
                        font-size: 20px;
                        padding-left: 20px; 
                    }
                }
            }
             &__bottom {
                display: flex;
                justify-content: space-between;
                &_cnt {
                    width: 300px;
                    height: 200px;
                    align-items: center;
                    img {
                        width: 85px;
                        height: 85px;
                    }
                    h2 {
                        font-size: 20px;
                        padding-left: 20px; 
                    }
                }
            }
            button {
                @extend %button;
                display: block;
                margin: auto;
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
    .tip {
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
                &_card {
                    width: 300px;
                    height: 430px;
                    background-color: #F5AC6D;
                    h1 {
                        text-align: center;
                        background-color: #00AB94;
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: white;
                        width: 100%;
                        height: 60px;
                        padding-top: 20px;
                        margin: 0;
                        font-size: 28px;
                    }
                    p {
                        font-family: 'Roboto';
                        padding-left: 20px;
                        font-size: 18px;
                    }
                } 
            }
            &__btn {
                padding-top: 50px;
                display: flex;
                justify-content: center;
                button {
                    @extend %button;
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
    .int {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
                font-size: 65px;
                h1 {
                    margin: 0;
                }
            }
            &__wrap {
            padding: 100px 100px;
                &_cont {
                display: flex;
                align-items: center;
                padding-bottom: 40px;
                    img {
                        width: 95px;
                        height: 95px;
                    }
                    p {
                        font-family: 'Roboto';
                        padding-left: 20px;
                        font-size: 24px;
                        font-weight: bold;
                    }
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