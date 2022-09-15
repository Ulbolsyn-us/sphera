<template> 
    <div class="main">
        <section class="about">
            <div class="about-left">
                <span class="about-left__shadow">
                </span>
                <div class="about-left__content">
                    <h1>
                        Мы <br>
                        Группа Компаний "СФЕРА"
                    </h1>
                    <p>
                        Автоматизируем бизнес-процессы и внедряем лучшие решение для Вас 
                    </p>
                </div>
            </div>
            <div class="about-right">
                <div class="about-right__content">
                    <p>
                        Оставьте заявку на сайте и наш <br>
                            специалист свяжется с Вами!
                    </p>
                    <form action="callback">
                        <input type="tel" placeholder="+7" name="tel" value="">
                        <button class="callback-btn"><span>Позвоните мне!</span></button>
                    </form>
                </div>
                <span class="about-right__shadow">
                </span>
            </div>
        </section>
        <section class="offer">
            <div class="offer-inner">
                <h1 class="offer-inner__header">МЫ ПРЕДЛАГАЕМ</h1>
                <div class="offer-inner__wrap">
                    <div class="offer-inner__wrap_box">
                        <img src="" alt="">
                        <h1>Программы фирмы 1С</h1>
                        <button><span>Подробнее</span></button>
                    </div>
                    <div class="offer-inner__wrap_box">
                        <button><span>Подробнее</span></button>
                        <h1>1С: ИТС Казахстан</h1>
                        <img src="" alt="">
                    </div>
                    <div class="offer-inner__wrap_box">
                        <img src="" alt="">
                        <h1>Tillypad</h1>
                        <button><span>Подробнее</span></button>
                    </div>
                </div>
                <div class="offer-inner__row">
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Внедрение и обновление 1С</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Консультации по работе с 1С</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Доработка типовых конфигураций</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Торговое оборудование и ПО</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Перенос данных</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="" alt="">
                        <p>Диагностика</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="progress">
            <div class="progress-inner">
                <h1 class="progress-inner__header">ПОЧЕМУ МЫ?</h1>
                <div class="progress-inner__row">
                    <div class="progress-inner__row_card">
                        <h2>
                            Работаем с 
                        </h2>
                        <span>
                                <h3>
                                    2013
                                </h3>  
                                года
                        </span>
                    </div>
                    <div class="progress-inner__row_card">
                        <h2>
                            Средний опыт работы
                        </h2>
                        <span>
                            <h3>
                                8
                            </h3>  
                            лет</span>
                    </div>
                    <div class="progress-inner__row_card">
                        <h2>
                            Более
                        </h2>
                        <span>
                            <h3>
                                500 
                            </h3>
                            довольных клиентов</span>
                    </div>
                    <div class="progress-inner__row_card">
                        <h2>
                            Ежедневно закрываем более
                        </h2>
                        <span> 
                            <h3>
                                25
                            </h3>
                            заявок</span>
                    </div>
                    <div class="progress-inner__row_card">
                        <h2>
                            Обслуживаем
                        </h2>
                        <span>  
                            <h3>
                                14
                            </h3>
                            областей
                            Казахстана</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="cycle">
            <div class="cycle-inner">
                <div class="cycle-inner__circle">
                    <h1 class="cycle-inner__circle_header">КАК НАЧАТЬ
РАБОТУ С НАМИ?</h1> 
                    <span class="cycle-inner__circle_point"></span>
                    <div class="cycle-inner__circle_arrow"></div>
                    <div class="cycle-inner__circle_num1">
                        <h1>1</h1> <p>Вы оставляете заявку на
нашем сайте</p>
                    </div>
                    <div class="cycle-inner__circle_num2">
                    <h1>2</h1> <p>С Вами связывается наш
специалист</p>
                    </div>
                    <div class="cycle-inner__circle_num3">
                    <h1>3</h1> <p>Консультация, определяем
порядок действий</p>
                    </div>
                    <div class="cycle-inner__circle_num4">
                    <h1>4</h1> <p>Отправляем Вам
индивидуальное КП</p>
                    </div>
                    <div class="cycle-inner__circle_num5">
                    <h1>5</h1> <p>Согласовываем условия и
заключаем Договор</p>
                    </div>
                </div> 
            </div>
        </section>
        <section class="review">
            <div class="review-inner">
                <div class="review-inner__header">
                    <h1>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                </div>

            </div>
        </section>

    </div>
</template> 

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .main {
        .about {
            margin: 0;
            width: 100%;
            height: 100vh;
            background: url(../assets/images/section1.png) center, no-repeat;
            background-size: cover;
            position: relative;
                &-left {
                    position: absolute;
                    width: 100%;
                    top: 20%;

                    &__shadow {
                        display: block;
                        width: 65%;
                        height: 400px;
                        background-color: #017881;
                        position: absolute;
                        top: 25%;
                        clip-path: polygon(0 1%, 100% 0, 80% 100%, 0% 100%);
                        opacity: .7
                    }
                    &__content {
                        width: 1000px;
                        top: -10px;
                        left: 80px;
                        z-index: 1;
                        position: absolute;
                        h1 {
                            font-family: 'Roboto';
                            font-size: 80px;
                            color: white;
                            line-height: 80px;
                        }
                        p {
                            font-family: 'Roboto';
                            font-style: normal;
                            font-size: 24px;
                            color: white;
                            line-height: 25px;
                        }
                    }
                }
                &-right {
                    position: absolute;
                    width: 40%;
                    left: 60%;
                    right: 0;
                    bottom: 10%;
                    &__shadow {
                        display: block;
                        width: 100%;
                        height: 215px;
                        background-color: #017881;
                        position: absolute;
                        top: 25%;
                        clip-path: polygon(20% 1%, 100% 0, 100% 100%, 0% 100%);
                        opacity: .7;
                    }
                    &__content {
                        float: right;
                        z-index: 9;
                        bottom: -40px;
                        position: relative;
                    }
                    p {
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 28px;
                        color: white;
                        line-height: 35px;
                        text-align: right;
                        padding-right: 40px;
                        z-index: 9;
                    }
                    form {
                        position: relative;
                        left: -80px;
                        width: 100%;
                        display: flex;
                        input[name=tel] {
                            width: 220px;
                            height: 40px;
                            clip-path: polygon(10% 1%, 100% 0, 92% 100%, 0% 100%);
                            border: none;
                            padding-left: 50px
                        }
                        input::placeholder {
                            font-family: 'Roboto';
                            font-weight: 700;
                            font-size: 14px;
                            color: #E15517;
                        }
                        .callback-btn {
                            width: 180px;
                            height: 40px;
                            clip-path: polygon(10% 1%, 100% 0, 92% 100%, 0% 100%);   
                            border: 1px solid #E15517; 
                            background-color: white;
                            font-family: 'Roboto';
                            font-size: 14px;
                            color: #082567;
                            display: block;
                            position: relative;
                            transition: all .35s;
                            span {
                                position: relative;
                                z-index: 2;
                            }
                        }
                        .callback-btn::after {
                            position: absolute;
                            content: "";
                            top: 0;
                            left: 0;
                            width: 0;
                            height: 100%;
                            background-color: #E15517;
                            transition: all .35s;
                            transform: translateY(-50%,100%) rotate(-45deg);
                        }
                        .callback-btn:hover {
                            color: white;
                        }
                        .callback-btn:hover::after {
                            width: 100%;
                        }
                        
                    }
                }
        }
        @media (max-width: 1440px) {
                .about-left__content {
                    width: 600px;
                  
                    h1 {
                        padding-top: 20px;
                        font-size: 62px;
                        line-height: 70px;
                        margin-bottom: 0;
                    }
                    p {
                        padding-top: 5px;
                        font-size: 24px;
                        line-height: 35px;
                    }
                }
                .about-right__content {
                    width: 500px;
                    p {
                        font-size: 21px;
                    }
                    form {
                        left: 80px;
                        input[name=tel] {
                        width: 120px;
                    }
                    }
                }
                .about-right__shadow {
                    top: 18.5%;
                }
            }
    }
    .offer {
        width: 100%;
        .offer-inner {
            padding-top: 30px;
            padding-left: 20px;
            padding-right: 20px;
            &__header {
                font-family: 'Roboto';
                font-weight: 800;
                color: #082567;
                font-size: 75px;
                text-align: center;
            }
            &__wrap {
                display: flex;
                justify-content: space-around;
                width: 100%;
                align-items: center;
                flex-wrap: wrap;
                &_box {
                    width: 600px;
                    height: 200px;
                    position: relative;
                    img {
                    
                    }
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #082567;
                        font-size: 42px;
                        text-align: center; 
                        padding-top: 20px;
                    }
                    button {
                        width: 180px;
                        height: 40px;
                        clip-path: polygon(10% 1%, 100% 0, 92% 100%, 0% 100%);   
                        border: 2px solid #E15517; 
                        background-color: #E15517;
                        font-family: 'Roboto';
                        font-size: 14px;
                        background-color: white;
                        position: absolute;
                        left: 33%;
                        color: #082567;
                        display: block;
                        position: relative;
                        transition: all .35s;
                        span {
                            position: relative;
                            z-index: 2;
                        }
                    }
                    button::after {
                        position: absolute;
                        content: "";
                        top: 0;
                        left: 0;
                        width: 0;
                        height: 100%;
                        background-color: #E15517;
                        transition: all .35s;
                        transform: translateY(-50%,100%) rotate(-45deg);
                    }
                    button:hover {
                        color: white;
                        }
                    button:hover::after {
                        width: 100%;
                        }
                }
            }
            &__row {
                display: flex;
                justify-content: space-around;
                align-items: center;
                text-align: center;
                padding-top: 40px;
                &_box {
                    width: 200px;
                    img {
                
                    }
                    p {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-size: 28px;
                    color: #082567;
                    line-height: 30px;
                    }
                }
            }
        }
    }
    .progress {
        &-inner {
            padding: 40px 20px;
            &__header {
                font-family: 'Roboto';
                font-weight: 800;
                color: #082567;
                font-size: 75px;
                text-align: center;
           }
           &__row {
                display: flex;
                justify-content: space-around;
                align-items: center;
                &_card {
                    width: 200px;
                    h2 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #082567;
                        font-size: 28px;
                        text-align: center;
                        height: 90px;
                    }
                    span {
                        display: block;
                        width: 220px;
                        height: 150px;
                        border: 2px solid #008B95;
                        border-radius: 15%;
                        text-align: center;
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #082567;
                        font-size: 28px;
                        line-height: 25px;
                        h3 {
                            font-family: 'Roboto';
                            font-weight: 800;
                            color: #E15517;
                            font-size: 67px;
                            text-align: center;
                            margin-bottom: 20px;
                            margin-top: 40px;
                            text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                        }
                    }
                }
           }
        }

    }
    .cycle {
        &-inner {
            width: 100%;
            &__circle {
                position: relative;
                display: block;
                width: 550px;
                height: 550px;
                border: 20px solid #008B95;
                border-radius: 50%;
                left: 35%;
                top: 100px;
                &_header {
                    font-family: 'Roboto';
                    font-weight: 800;
                    color: #082567;
                    font-size: 52px;
                    text-align: center;
                    background-color: white;
                    width: 500px;
                    height: 150px;
                    position: absolute;
                    padding-top: 15px;
                    top: 25%;
                    left: -60%;
                }
                &_point {
                    display: block;
                    background-color: #008B95;
                    width: 80px;
                    height: 80px;
                    position: relative;
                    border-radius: 50%;
                    top: 42%;
                    left: 42%;
                }
                &_arrow {
                    position: relative;
                    width: 290px;
                    height: 290px;
                    border: 10px solid #E15517;
                    border-radius: 50%;
                    display: block;
                    border-left-color: transparent;
                    border-bottom-color: transparent;
                    transform: rotate(45deg);
                    top: 5%;
                    left: 20%;
                }
                &_arrow::after {
                    content: '';
                    position: absolute;
                    width: 50px;
                    height: 10px;
                    background-color: #E15517;
                    top: 244px;
                    left: 248px;
                    
                }
                &_arrow::before {
                    content: '';
                    position: absolute;
                    width: 50px;
                    height: 10px;
                    background-color: #E15517;
                    top: 222px;
                    left: 228px;
                    transform: rotate(-90deg);
                }
                &_num1 {
                    position: absolute;
                    top: -40px;
                    left: 56%;
                    display: flex;
                    align-items: center;
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #E15517;
                        font-size: 64px;
                        text-align: center;
                        text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                    }
                    p {
                        width: 300px;
                        height: 60px;
                        background-color: #008B95;
                        margin-left: 20px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        border-radius: 30px;
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: white;
                        line-height: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                }
                &_num2 {
                    position: absolute;
                    top: 80px;
                    left: 76%;
                    display: flex;
                    align-items: center;
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #E15517;
                        font-size: 64px;
                        text-align: center;
                        text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                    }
                    p {
                        width: 300px;
                        height: 60px;
                        background-color: #008B95;
                        margin-left: 20px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        border-radius: 30px;
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: white;
                        line-height: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                }
                &_num3 {
                    position: absolute;
                    top: 200px;
                    left: 83%;
                    display: flex;
                    align-items: center;
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #E15517;
                        font-size: 64px;
                        text-align: center;
                        text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                    }
                    p {
                        width: 300px;
                        height: 60px;
                        background-color: #008B95;
                        margin-left: 20px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        border-radius: 30px;
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: white;
                        line-height: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                }
                &_num4 {
                    position: absolute;
                    top: 320px;
                    left: 73%;
                    display: flex;
                    align-items: center;
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #E15517;
                        font-size: 64px;
                        text-align: center;
                        text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                    }
                    p {
                        width: 300px;
                        height: 60px;
                        background-color: #008B95;
                        margin-left: 20px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        border-radius: 30px;
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: white;
                        line-height: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                }
                &_num5 {
                    position: absolute;
                    top: 420px;
                    left: 53%;
                    display: flex;
                    align-items: center;
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #E15517;
                        font-size: 64px;
                        text-align: center;
                        text-shadow: #E1B57C 0.1em 0.1em 0.2em;
                    }
                    p {
                        width: 300px;
                        height: 60px;
                        background-color: #008B95;
                        margin-left: 20px;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        border-radius: 30px;
                        font-family: 'Roboto';
                        font-style: normal;
                        font-size: 18px;
                        color: white;
                        line-height: 20px;
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                }
            }
        }
    }
</style>

