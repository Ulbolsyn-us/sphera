<template>
    <div class="cloud">
        <section class="info">
            <div class="info-inner">
                <div class="info-inner__header">
                    <h1>
                        Аренда 1С в Облаке
                    </h1>
                    <p>
                        1С в Облаке — это сервис, с помощью которого весь ваш учет можно перенести
в облачное хранилище. Все специалисты, которые работают в базе или занимаются
ее обслуживанием, смогут работать одновременно из любой точки.
Для этого нужен только компьютер и стабильное Интернет-подключение.
                    </p>
                </div>
            </div>
        </section>
        <section class="sltn">
            <div class="sltn-inner">
                <div class="sltn-inner__header">
                    <h1>Пользуясь этим решением, Вам не нужно:</h1>
                </div>
                <div class="sltn-inner__wrap">
                    <div class="sltn-inner__wrap_cnt">
                        <img src="./../../assets/images/alert.png" alt="">
                        <h3>Покупать оборудование</h3>
                    </div>
                    <div class="sltn-inner__wrap_cnt">
                        <img src="./../../assets/images/alert.png" alt="">
                        <h3>Обновлять ПО</h3>
                    </div>
                    <div class="sltn-inner__wrap_cnt">
                        <img src="./../../assets/images/alert.png" alt="">
                        <h3>Арендовать помещение
под ЦОД</h3>
                    </div>
                    <div class="sltn-inner__wrap_cnt">
                        <img src="./../../assets/images/alert.png" alt="">
                        <h3>Оплачивать
электроэнергию</h3>
                    </div>
                    <div class="sltn-inner__wrap_cnt">
                        <img src="./../../assets/images/alert.png" alt="">
                        <h3>Содержать IT штат</h3>
                    </div>
                </div>
                <div class="sltn-inner__sub">
                    <h1>Мы сделаем это за Вас!</h1>
                    <button @click="handle"><a href="#connect">Попробовать 14 дней
БЕСПЛАТНО</a></button>
                </div>
            </div>
        </section>
        <section class="tip">
            <div class="tip-inner">
                <div class="tip-inner__header">
                    <h1>Аренда 1С в Облаке подходит СФЕРАМ:</h1>
                </div>
                <div class="tip-inner__wrap">
                    <div class="tip-inner__wrap_card">
                        <h1>Аутсорсинг</h1>
                        <p>Вы можете работать в 1С, находясь дома или в офисе</p>
                        <p>Все базы доступны онлайн 24\7</p>
                        <p>Мы регулярно обновляем базы и создаем резервные копии данных</p>
                    </div>
                    <div class="tip-inner__wrap_card">
                        <h1>Малый бизнес и стартап</h1>
                        <p>Полный функционал платформы 1С за меньшую стоимость</p>
                        <p>Онлайн поддержка в открытом доступе</p>
                        <p>Легальный и лицензированный продукт без затрат на коробку</p>
                    </div>
                    <div class="tip-inner__wrap_card">
                        <h1>Холдинг</h1>
                        <p>Оперативное получение информации по всем точкам продаж и складам</p>
                        <p>Увеличение числа пользователей без дополнительных затрат</p>
                        <p>Доступ к 1С с компьютера, ноутбука, планшета или телефона</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="tarif">
            <div class="tarif-inner">
                <div class="tarif-inner__header">
                    <h1>Тариф «БАЗОВЫЙ» в МЕСЯЦ</h1>
                </div>
                <div class="tarif-inner__wrap">
                    <div class="tarif-inner__wrap_card">
                        <p>1 рабочее место</p>
                        <p>До 5 инф. баз</p>
                        <p>9500 тг/чел</p>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="tarif-inner__wrap_card">
                        <p>2-5 рабочих мест</p>
                        <p>До 5 инф. баз</p>
                        <p>8 900 тг/чел</p>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="tarif-inner__wrap_card">
                        <p>6-10 рабочих мест</p>
                        <p>До 5 инф. баз</p>
                        <p>8 700 тг/чел</p>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="tarif-inner__wrap_card">
                        <p>более 11 рабочих мест</p>
                        <p>До 5 инф. баз</p>
                        <p>8 500 тг/чел</p>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="calc">
            <div class="calc-inner">
                <div class="calc-inner__header">
                    <h1>Калькулятор расчета стоимости</h1>
                </div>
                <div class="calc-inner__cnt">
                    <div class="calc-inner__cnt_mult">
                        <div><h3>Рабочие места: {{ place }} рабочее место</h3> 
                        <input name="place" v-model="place" placeholder="число рабочих мест" /></div>
                        <img src="./../../assets/images/mult.png" alt="">
                        <div><h3>Период активации: {{ month }} месяц</h3></div>
                            <select v-model="month" class="calc-inner__cnt_mult_month">
                                <option>1 </option>
                                <option>6 </option>
                                <option>12 </option>
                            </select>
                    </div>

                    <img src="./../../assets/images/equal.png" alt="">
                    <div class="calc-inner__cnt_eq">
                        <input type="number" name="result"  v-model="result">
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
            connect: false,
            place: '',
            month: '',
        }
    },
    methods: {
        handle() {
           this.connect = true;
        }

    },
    computed: {
        result: function() {
            return this.place * this.month
        } 
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.cloud {
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
    .sltn {
        &-inner {
            @extend %container;
            &__header {
                h1 {
                    @extend %header;
                    padding-top: 50px;
                }
            }
            &__wrap {
                display: flex;
                justify-content: space-around;
                
                &_cnt {
                    width: 150px;
                    height: auto;
                    align-items: center;
                    img {
                        width: 100px;
                        height: 100px;
                        display: block;
                        margin: auto;
                    }
                    h3 {
                        font-family: 'Roboto';
                        text-align: center;
                        font-size: 18px;
                    }
                }
            }
            &__sub {
                h1 {
                    @extend %header;
                    padding-top: 30px;
                    font-size: 62px;
                }
                button {
                    @extend %button;
                    height: 70px;
                    margin: auto;
                    display: block;
                    a {
                        color: black;
                        font-size: 16px;
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
                    height: 400px;
                    background-color: #F5AC6D;
                    h1 {
                        text-align: center;
                        background-color: #00AB94;
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: white;
                        width: 100%;
                        height: 80px;
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
        }
    }
    .tarif {
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
                align-items: center;
                &_card {
                    display: block;
                    width: 250px;
                    height: 260px;
                    border: 2px solid #008B95;
                    border-radius: 10%;
                    text-align: center;
                    font-family: 'Roboto';
                    font-weight: 800;
                    color: #082567;
                    font-size: 28px;
                    line-height: 25px;
                    box-shadow: #082567 0.2em 0.2em 0.3em;
                    p {
                        font-family: 'Roboto';
                        font-size: 18px;
                        text-align: center;
                        padding-top: 20px;
                    }
                    button {
                        background-color: #025962;
                        border: none;
                        width: 100px;
                        height: 30px;
                        cursor: pointer;
                        a {
                            color: white;
                            font-size: 16px;
                        }
                    }
                    button:hover {
                        border: 3px solid #025962;
                        background-color: white;
                        color: black;
                        transition: .5s;
                        a {
                            color: black;
                        }
                    }
                } 
            }
        }
    }
    .calc {
        &-inner {
            @extend %container;
            &__header {
                h1 {
                    @extend %header;
                }
            }
            &__cnt {
                display: flex;
                justify-content: space-around;
                align-items: center;
                &_mult {
                    h3 {
                        font-family: 'Roboto';
                        font-size: 28px;
                        padding-top: 20px;
                    }
                    input[name=place] {
                        width: 300px;
                        height: 40px;
                        padding-left: 10px;
                        border: 2px solid #00AB94;
                        font-family: 'Roboto';
                        font-size: 18px;
                    }
                    img {
                        width: 90px;
                        height: 90px;
                        padding-top: 30px;
                        padding-left: 50px;
                    }
                    &_month {
                        width: 60px;
                        height: 40px;
                        border: 2px solid #00AB94;
                        option {
                            font-family: 'Roboto';
                            font-size: 18px;
                        }
                    }
                }
                img {
                    width: 90px;
                    height: 90px;
                }
                &_eq {
                    input[name=result] {
                        width: 200px;
                        height: 40px;
                        padding-left: 10px;
                        font-family: 'Roboto';
                        font-size: 18px;
                        border: 2px solid #00AB94;
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