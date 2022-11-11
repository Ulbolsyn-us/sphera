<template>
    <div class="tillypad">
        <section class="info">
            <div class="info-inner">
                <div class="info-inner__header">
                    <h1>
                        Tillypad. Автоматизация сфер HoReCa
                    </h1>
                    <p>
                        Комфортное решение для развития Вашего бизнеса
                    </p>
                    <div class="info-inner__header_wrap">
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/interface.png" alt="">
                            <p>Понятный интерфейс</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/info.png" alt="">
                            <p>Привлекательный визуал</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/equipment.png" alt="">
                            <p>Сопутствующее
оборудование</p>
                        </div>
                        <div class="info-inner__header_wrap_cnt">
                            <img src="./../../assets/images/integration.png" alt="">
                            <p>Интеграция</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="fit">
            <div class="fit-inner">
                <div class="fit-inner__header">
                    <h1>Tillypad подходит для:</h1>
                </div>
                <div class="fit-inner__wrap">
                    <div class="fit-inner__wrap_top">
                        <div class="fit-inner__wrap_top_cnt">
                            <img src="./../../assets/images/rest.png" alt="">
                            <h3>Ресторан</h3>
                        </div>
                        <div class="fit-inner__wrap_top_cnt">
                            <img src="./../../assets/images/coffee.png" alt="">
                            <h3>Кафе</h3>
                        </div>
                        <div class="fit-inner__wrap_top_cnt">
                            <img src="./../../assets/images/bar.png" alt="">
                            <h3>Бар</h3>
                        </div>
                    </div>
                    <div class="fit-inner__wrap_btm">
                        <div class="fit-inner__wrap_btm_cnt">
                            <img src="./../../assets/images/canteen.png" alt="">
                            <h3>Столовая</h3>
                        </div>
                        <div class="fit-inner__wrap_btm_cnt">
                            <img src="./../../assets/images/delivery.png" alt="">
                            <h3>Cлужба
    доставки</h3>
                        </div>
                        <div class="fit-inner__wrap_btm_cnt">
                            <img src="./../../assets/images/set.png" alt="">
                            <h3>Cетевые
    заведения</h3>
                        </div>
                    </div>
                </div>
                <div class="fit-inner__sub">
                    <h1>Вы только начали свой бизнес? <br> Мы ПОДБЕРЕМ и УСТАНОВИМ торговое оборудование!</h1>
                    <button @click="handle"><a href="#connect">Получить консультацию</a> </button>
                </div>
            </div>
        </section>
        <section class="func">
            <div class="func-inner">
                <div class="func-inner__header">
                    <h1>Возможности Tillypad:</h1>
                </div>
                <div class="func-inner__wrap">
                    <div class="func-inner__wrap_cnt">
                        <h1>Продажи</h1>
                        <p>В Tillypad XL есть все, чтобы сделать обслуживание гостей в вашем заведении эталонным:
                        </p>
                        <p>Контроль финансов</p>
                        <p>Организация доставки и банкетов </p>  
                        <p>Мобильные решения</p>   
                    </div>
                    <div class="func-inner__wrap_cnt">
                        <h1>Склад</h1>
                        <p>Единый справочник товаров, продуктов и рецептов</p>
                        <p>Документы по товародвижению</p>
                        <p>Протокол изменения всех документов</p>
                        <p>Товарные остатки в режиме онлайн, на дату, по закрытию торгового дня</p>
                        <p>Лимиты товарных остатков, рецепты,</p>
                        <p>ТТК и калькуляционные карты, возможность редактирования с учетом пересортицы и качества партий ингредиентов</p>
                        <p>История изменения рецептов</p>
                        <p>Удобный механизм перепроизводства продуктов и рецептов, поиск по вхождению в рецепты, замены</p>
                        <p> Анализ себестоимости рецептов</p>
                        <p>Цена закупки,оценочная стоимость, плановая себестоимость</p>
                        <p>Контроль цен закупки в отдельных ресторанах и всей сети</p>
                        <p>Централизованные закупки, заказы на производств, распределительные центры</p>
                        <p>Отчетность по продажам в разрезе себестоимости и продуктов</p>
                        <p>Отчетность по закупкам в разрезе поставщиков, продуктов и цен</p>
                        <p>Сравнительный анализ покупок</p>
                    </div>
                    <div class="func-inner__wrap_cnt">
                        <h1>Программы лояльности</h1>
                        <p>Дисконт для постоянных клиентов</p>
                        <p>Предоставление дисконтных карт постоянным клиента</p>
                        <p>Разовые и периодические акции </p>
                        <p>Организация различных акций в зависимости от дня недели и времени суток</p>
                        <p>Бонусные системы</p>
                        <p>Предоставление скидок и подарков в зависимости от суммы набранных баллов</p>
                        <p>Подарки и комплименты</p>
                        <p>Индивидуальные подарки для любимых гостей</p>
                    </div>
                    <div class="func-inner__wrap_cnt">
                        <h1>Аналитика</h1>
                        <p>С Tillypad вы всегда будете иметь актуальные данные о работе вашего заведения:</p>
                        <p>Широкий выбор отчетности затрагивающий работу всех отделов предприятия</p>
                        <p>Отправка отчетов руководителям по электронной почте, а также просмотр в режиме онлайн посредством мобильного устройства</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="price">
            <div class="price-inner">
                <div class="price-inner__header">
                    <h1>Стоимость</h1>
                </div>
                <div class="price-inner__top">
                    <div class="price-inner__top_wrap">
                        <div class="price-inner__top_wrap_box">
                            <div class="price-inner__top_wrap_box_cnt">
                                <h1>Tillypad Front (F)</h1>
                                <p>Обслуживание посетителей:</p>
                                <p>прием заказов, оплата четов; работа бармена, официанта, кассира, хостес, доставка</p>
                                <div class="price-inner__top_wrap_box_cnt_pr">
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            14 400 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            навсегда <br>
                                            144 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__top_wrap">
                        <div class="price-inner__top_wrap_box">
                            <div class="price-inner__top_wrap_box_cnt">
                                <h1>Tillypad Back (B)</h1>
                                <p>Работа с менеджерской частью системы (бэк-офис):</p>
                                <p>составление меню, подготовка прейскуранта, настройка правил продаж и систем лояльности, отчеты по выручке и реализации; работа управляющего, администратора зала.</p>
                                <div class="price-inner__top_wrap_box_cnt_pr">
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            14 400 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            навсегда <br>
                                            144 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__top_wrap">
                        <div class="price-inner__top_wrap_box">
                            <div class="price-inner__top_wrap_box_cnt">
                                <h1>Tillypad Stock (S)</h1>
                                <p>Работа со складом:</p>
                                <p>складские документы, движение товаров, инвентаризация, отчеты по себестоимости; работа бухгалтера-калькулятора, кладовщика, закупщика.</p>
                                <div class="price-inner__top_wrap_box_cnt_pr">
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            14 400 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            навсегда <br>
                                            144 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__top_wrap">
                        <div class="price-inner__top_wrap_box">
                            <div class="price-inner__top_wrap_box_cnt">
                                <h1>Tillypad KDS (K)</h1>
                                <p>Интерактивное управление производством и выдачей, организация электронной очереди.</p>
                                <div class="price-inner__top_wrap_box_cnt_pr">
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            4 800 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            навсегда <br>
                                        48 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__top_wrap">
                        <div class="price-inner__top_wrap_box">
                            <div class="price-inner__top_wrap_box_cnt">
                                <h1>Tillypad Read-only (R)</h1>
                                <p>Доступ ко всей информации и справочникам в режиме «только чтение».</p>
                                <div class="price-inner__top_wrap_box_cnt_pr">
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            7 700 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__top_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            77 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    
                </div>
                <div class="price-inner__btm">
                    <div class="price-inner__btm_wrap">
                        <div class="price-inner__btm_wrap_box">
                            <div class="price-inner__btm_wrap_box_cnt">
                                <h1>Tillypad Front + <br> Back (FB)</h1>
                                <p>Объединяет возможности лицензий F и B в рамках одного рабочего места.</p>
                                <div class="price-inner__btm_wrap_box_cnt_pr">
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            16 800 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            168 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__btm_wrap">
                        <div class="price-inner__btm_wrap_box">
                            <div class="price-inner__btm_wrap_box_cnt">
                                <h1>Tillypad Front + Stock (FS)</h1>
                                <p>Объединяет возможности лицензий F и S в рамках одного рабочего места.</p>
                                <div class="price-inner__btm_wrap_box_cnt_pr">
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            16 800 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            168 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__btm_wrap">
                        <div class="price-inner__btm_wrap_box">
                            <div class="price-inner__btm_wrap_box_cnt">
                                <h1>Tillypad Back + Stock (BS)</h1>
                                <p>Объединяет возможности лицензий B и S в рамках одного рабочего места.</p>
                                <div class="price-inner__btm_wrap_box_cnt_pr">
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            16 800 <br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            168 000 <br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__btm_wrap">
                        <div class="price-inner__btm_wrap_box">
                            <div class="price-inner__btm_wrap_box_cnt">
                                <h1>Tillypad Full (FBS)</h1>
                                <p>Полный доступ ко всем возможностям системы.</p>
                                <div class="price-inner__btm_wrap_box_cnt_pr">
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            21 400<br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            214 000<br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                    <div class="price-inner__btm_wrap">
                        <div class="price-inner__btm_wrap_box">
                            <div class="price-inner__btm_wrap_box_cnt">
                                <h1>Tillypad M (M)</h1>
                                <p>Лицензия «M-лицензия (мобильный официант)» позволяет работать только в режиме Ресторан-официант. Создавать счета и регистрировать их. Изменять привилегии, места размещения и все, что не связано с пречеками и чеками.</p>
                                <div class="price-inner__btm_wrap_box_cnt_pr">
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            7 700<br>
                                            тенге
                                        </p>
                                    </div>
                                    <div class="price-inner__btm_wrap_box_cnt_pr_inf">
                                        <p>
                                            в месяц <br>
                                            77 000<br>
                                            тенге
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button @click="handle"><a href="#connect">купить</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section class="choise">
            <div class="choise-inner">
                <div class="choise-inner__header">
                    <h1>Нас выбрали</h1>
                </div>
                <div class="choise-inner__top">
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                </div>
                <div class="choise-inner__bottom">
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
                    <h3>LOGO</h3>
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

.tillypad {
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
    .fit {
        &-inner {
        @extend %container;
            &__header {
                h1 {
                    @extend %header;
                }
            }
            &__wrap {
                &_top {
                    display: flex;
                    justify-content: space-between;
                    &_cnt {
                        img {
                            width: 350px;
                            height: 350px; 
                        }
                        h3 {
                            text-align: center;
                            font-family: 'Roboto';
                            font-style: normal;
                            font-size: 28px;
                            color: #082567;
                        }
                    }
                }
                &_btm {
                    display: flex;
                    justify-content: space-between;
                    &_cnt {
                        img {
                            width: 350px;
                            height: 350px;
                        }
                        h3 {
                            text-align: center;
                            font-family: 'Roboto';
                            font-style: normal;
                            font-size: 28px;
                            color: #082567;
                        }
                    }
                }
            }
            &__sub {
                padding-top: 40px;
                h1 {
                    @extend %header;
                    font-size: 60px;
                }
                button {
                    @extend %button;
                    width: 300px;
                    display: block;
                    margin: auto;
                    a {
                        color: white;
                    }
                }
            }
        }
    }
    .func {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
                font-size: 52px;
                h1 {
                    margin-top: 0;
                }
            }
            &__wrap {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                &_cnt {
                    width: 250px;
                    height: 350px;
                    align-items: center;
                    padding: 25px;
                    background-color: #F5AC6D;
                    border: none;
                    overflow: hidden;
                    cursor: pointer;
                    align-items: flex-start;
                    transition: .7s;
                    h1 {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 28px;
                        text-align: center;
                    }
                    p {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 16px;
                        line-height: 21px;
                    }
                }
                :hover {
                    height: auto;
                    overflow-x: visible;
                    white-space: normal;
                    transition: .7s;
                    transform: translateY(-10px);
                }
            }
        }
    }
    .price {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
            }
            &__top {
                display: flex;
                justify-content: space-between;
                width: 100%;
                &_wrap {
                    &_box {
                        width: 230px;
                        height: 410px;
                        background-color: #F5AC6D;
                        position: relative;
                        display: block;
                        margin-bottom: 20px;
                        &_cnt {
                            h1 {
                                width: 100%;
                                height: 60px;
                                font-family: 'Roboto';
                                font-style: normal;
                                font-size: 22px;
                                text-align: center;
                                border-bottom: 2px solid black;
                                padding-top: 20px;
                            }
                            p {
                                padding-left: 10px;
                                font-family: 'Roboto';
                                font-style: normal;
                                font-size: 14px;
                                line-height: 21px;
                            }
                            &_pr {
                                display: flex;
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                                &_inf {
                                    width: 50%;
                                    height: auto;
                                    text-align: center;
                                    border: 2px solid black;
                                }
                            }
                        }
                    }
                    button {
                        @extend %button;
                        width: 170px;
                        height: 50px;
                        margin: auto;
                        a {
                            color: white;
                        }
                    }
                }
            }
            &__btm {
                display: flex;
                justify-content: space-between;
                padding-top: 60px;
                width: 100%;
                &_wrap {
                
                    &_box {
                        width: 210px;
                        height: 410px;
                        background-color: #F5AC6D;
                        position: relative;
                        margin-bottom: 20px;
                        &_cnt {
                            h1 {
                                width: 100%;
                                height: 60px;
                                font-family: 'Roboto';
                                font-style: normal;
                                font-size: 22px;
                                text-align: center;
                                border-bottom: 2px solid black;
                                padding-top: 20px;
                            }
                            p {
                                padding-left: 10px;
                                font-family: 'Roboto';
                                font-style: normal;
                                font-size: 14px;
                                line-height: 21px;
                            }
                            &_pr {
                                display: flex;
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                                &_inf {
                                    width: 100px;
                                    height: auto;
                                    text-align: center;
                                    border: 2px solid black;
                                }
                            }
                        }
                    }
                    button {
                        @extend %button;
                        width: 170px;
                        height: 50px;
                        margin: auto;
                        a {
                            color: white;
                        }
                    }
                }
            }
        }
    }
    .choise {
        &-inner {
            @extend %container;
            &__header {
                @extend %header;
            }
            &__top {
                display: flex;
                justify-content: space-between;
                h3 {
                    font-family: 'Roboto';
                    font-weight: 800;
                    color: #082567;
                    font-size: 32px;
                    padding-top: 20px;
                }
            }
            &__bottom {
                display: flex;
                justify-content: space-between;
                h3 {
                    font-family: 'Roboto';
                    font-weight: 800;
                    color: #082567;
                    font-size: 32px;
                    padding-top: 20px;
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