<template> 
    <div class="main">
        <div class="about">
            <div class="about-left">
                <span class="about-left__shadow">
                </span>
                <div class="about-left__content">
                    <h1>
                        Мы <br>
                        Группа Компаний «СФЕРА»
                    </h1>
                    <p>
                        Автоматизируем Ваш бизнес и внедрим лучшее решение для Вас 
                    </p>
                </div>
            </div>
            <div class="about-right">
                <div class="about-right__content">
                    <p>
                        Оставьте заявку и наш <br>
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
        </div>
        <section class="offer">
            <div class="offer-inner">
                <h1 class="offer-inner__header">МЫ ПРЕДЛАГАЕМ</h1>
                <div class="offer-inner__wrap">
                    <div class="offer-inner__wrap_box">
                        <img src="../assets/images/vned.svg" alt="">
                        <h1>Программы фирмы 1С</h1>
                        <button><span>Подробнее</span></button>
                    </div>
                    <div class="offer-inner__wrap_box">
                        <button><span>Подробнее</span></button>
                        <h1>1С: ИТС Казахстан</h1>
                        <img src="../assets/images/its.png" alt="">
                    </div>
                    <div class="offer-inner__wrap_box">
                        <img src="../assets/images/tillyp.jpg" alt="">
                        <h1>Tillypad</h1>
                        <button><span>Подробнее</span></button>
                    </div>
                </div>
                <div class="offer-inner__row">
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/update1.png" alt="">
                        <p>Внедрение и обновление 1С</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/consultant.png" alt="">
                        <p>Консультации по работе с 1С</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/service2.png" alt="">
                        <p>Доработка типовых конфигураций</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/equipment.png" alt="">
                        <p>Торговое оборудование и ПО</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/service1.png" alt="">
                        <p>Перенос данных</p>
                    </div>
                    <div class="offer-inner__row_box">
                        <img src="../assets/images/service.png" alt="">
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
                                10 
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
                                80
                            </h3>
                            заявок</span>
                    </div>
                    <div class="progress-inner__row_card">
                        <h2>
                            Обслуживаем
                        </h2>
                        <span>  
                            <h3>
                                16
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
                    <span class="cycle-inner__circle_cl"></span>
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
        <!-- <section class="review">
            <div class="review-inner">
                <h1 class="review-inner__header">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
                <slide-review></slide-review>
            </div>
        </section> -->
        <section class="connect">
            <div class="connect-inner">
                <h1 class="connect-inner__header">ОСТАВЬТЕ ЗАЯВКУ И ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ ОТ СПЕЦИАЛИСТА</h1>
                <callback-page></callback-page>
            </div>
        </section>
    </div>
</template> 

<script>
// import SlideReview from './components/slide-review.vue'
import CallbackPage from './components/callback-page.vue'

export default {
    name: 'App',
    components: {
        // SlideReview, 
        CallbackPage,
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
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
                            font-family: 'Roboto Slab', serif;
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
                        font-family: 'Roboto Slab', serif;
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
                            font-family: 'Roboto Slab', serif;
                            font-weight: bold;
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
                    font-size: 22px;
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
        @media (max-width: 1024px) {
            .about-left__content {
                width: 500px;
                h1 {
                    font-size: 45px;
                }
                p {
                    font-size: 22px;
                }
            }
            .about-right {
                width: 50%;
                left: 50%;
            }
        }
        @media (max-width: 768px) {
            .about-left__content {
                width: 350px;
                left: 20px;
                h1 {
                    font-size: 38px;
                    line-height: 50px;
                }
                p {
                    font-size: 20px;
                }
            }
            .about-right {
                width: 60%;
                left: 40%;
            }
        }
        @media (max-width: 475px) {
            .about-left {
                top: 10%;
                &__shadow {
                width: 100%;
                }
                &__content {
                    width: 350px;
                    h1 {
                        font-size: 38px;
                        line-height: 50px;
                    }
                    p {
                        font-size: 20px;
                    }
                }
            }
            .about-right {
                width: 70%;
                left: 0;
                bottom: 11%;
                &__shadow {
                    width: 474px;
                }
                &__content {
                    left: 160px;
                }
                form {
                    left: 100px;
                }
            }

        }

    }
    .offer {
        .offer-inner {
            @extend %container;
            &__header {
                @extend %header
            }
            &__wrap {
                display: flex;
                justify-content: space-around;
                width: 100%;
                align-items: center;
                &_box {
                    width: 300px;
                    height: auto;
                    position: relative;
                    display: block;
                    margin: auto;
                    img {
                        width: 220px;
                        height: 160px;
                        display: block;
                        margin: auto;
                    }
                    h1 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #025962;
                        font-size: 42px;
                        text-align: center; 
                        padding-top: 20px;
                    }
                    button {
                        width: 180px;
                        height: 40px;
                        clip-path: polygon(10% 1%, 100% 0, 92% 100%, 0% 100%);   
                        border: none; 
                        background-color: #008B95;
                        font-family: 'Roboto';
                        font-size: 14px;
                        position: absolute;
                        margin: auto;
                        color: white;
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
                        color: black;
                        }
                    button:hover::after {
                        width: 100%;
                        }
                }
                @media (max-width: 475px) {
                    flex-wrap: wrap;
                }
            }
            &__row {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                text-align: center;
                padding-top: 100px;
                &_box {
                    width: 180px;
                    img {
                        width: 110px;
                        height: 110px;
                    }
                    p {
                    font-family: 'Roboto Slab', serif;
                    font-style: normal;
                    font-size: 22px;
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
                @extend %header
           }
           &__row {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                &_card {
                    width: 220px;
                    margin-bottom: 40px;
                    margin-right: 20px;
                    h2 {
                        font-family: 'Roboto';
                        font-weight: 800;
                        color: #082567;
                        font-size: 28px;
                        text-align: center;
                        height: 80px;
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
                        box-shadow: #082567 0.2em 0.2em 0.3em;
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
                @media (max-width: 1024px) {
                    width: 90%;
                }
            }
        }

    }
    .cycle {
        &-inner {
            @extend %container;
            &__circle {
                position: relative;
                width: 600px;
                height: auto;
                left: 35%;
                &_cl {
                    display: block;
                    width: 550px;
                    height: 550px;
                    border: 20px solid #008B95;
                    border-radius: 50%;
                }
                &_header {
                    font-family: 'Roboto';
                    font-weight: 800;
                    color: #025962;
                    font-size: 52px;
                    text-align: center;
                    background-color: white;
                    width: 500px;
                    height: 150px;
                    position: absolute;
                    padding-top: 15px;
                    top: 25%;
                    left: -50%;
                }
                &_point {
                    display: block;
                    background-color: #008B95;
                    width: 80px;
                    height: 80px;
                    position: relative;
                    border-radius: 50%;
                    position: absolute;
                    top: 45%;
                    left: 45%;
                }
                &_arrow {
                    position: absolute;
                    width: 290px;
                    height: 290px;
                    border: 10px solid #E15517;
                    border-radius: 50%;
                    display: block;
                    border-left-color: transparent;
                    border-bottom-color: transparent;
                    transform: rotate(45deg);
                    top: 25%;
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
                    top: -20px;
                    left: 56%;
                    display: flex;
                    align-items: center;
                    h1 {
                        @extend %circle_num;
                    }
                    p {
                        @extend %circle_info;
                    }
                }
                &_num2 {
                    position: absolute;
                    top: 90px;
                    left: 73%;
                    display: flex;
                    align-items: center;
                    h1 {
                        @extend %circle_num;
                    }
                    p {
                        @extend %circle_info;
                    }
                }
                &_num3 {
                    position: absolute;
                    top: 200px;
                    left: 83%;
                    display: flex;
                    align-items: center;
                    h1 {
                        @extend %circle_num;
                    }
                    p {
                        @extend %circle_info;
                    }
                }
                &_num4 {
                    position: absolute;
                    top: 320px;
                    left: 73%;
                    display: flex;
                    align-items: center;
                    h1 {
                        @extend %circle_num;
                    }
                    p {
                       @extend %circle_info;
                    }
                }
                &_num5 {
                    position: absolute;
                    top: 420px;
                    left: 56%;
                    display: flex;
                    align-items: center;
                    h1 {
                        @extend %circle_num;
                    }
                    p {
                        @extend %circle_info;
                    }
                }
            }
            @media (max-width: 1024px) {
                &__circle {
                height: auto;
                    &_cl {
                        width: 380px;
                        height: 380px;
                        margin-left: -20%;
                    }
                    &_header {
                        font-size: 35px;
                        width: 300px;
                        top: 23%;
                        height: 100px;
                    }
                    &_point {
                        display: none;
                    }
                    &_arrow {
                        display: none;
                    }  
                    // &_arrow::after {
                    //     left: 154px;
                    //     top: 154px;
                    // }
                    // &_arrow::before {
                    //     left: 134px;
                    //     top: 134px;
                    // }
                    &_num1 {
                        top: -10px;
                        left: 8%;
                        h1 {
                            font-size: 50px;
                        }
                        p {
                            font-size: 16px;
                            height: 40px;
                        }
                    }
                    &_num2 {
                        top: 60px;
                        left: 8%;
                        h1 {
                            font-size: 50px;
                        }
                        p {
                            font-size: 16px;
                            height: 40px;
                        }
                    }
                    &_num3 {
                        top: 130px;
                        left: 8%;
                        h1 {
                            font-size: 50px;
                        }
                        p {
                            font-size: 16px;
                            height: 40px;
                        }
                    }
                    &_num4 {
                        top: 200px;
                        left: 8%;
                        h1 {
                            font-size: 50px;
                        }
                        p {
                            font-size: 16px;
                            height: 40px;
                        }
                    }
                    &_num5 {
                        top: 270px;
                        left: 8%;
                        h1 {
                            font-size: 50px;
                        }
                        p {
                            font-size: 16px;
                            height: 40px;
                        }
                    }
                }
            }
            @media (max-width: 768px) {
                &__circle {
                    width: 100%;
                    left: 0;
                    height: 450px;
                    &_cl {
                        display: none;
                    }
                    &_header {
                        position: static;
                        font-size: 50px;
                        width: 100%;
                    }
                    &_num1 {
                        top: 130px;
                    }
                    &_num2 {
                        top: 200px;
                    }
                    &_num3 {
                        top: 270px;
                    }
                    &_num4 {
                        top: 340px;
                    }
                    &_num5 {
                        top: 410px;
                    }
                }
            }
        }
        @media (max-width: 475px) {
             display: none;   
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
                @media (max-width: 1024px) {
                    padding-top: 60px;
                }
            }
            &__call {
                padding-left: 40px;
                display: flex;
                justify-content: space-between;
                input[name=name],[name=tel] {
                    width: 170px;
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
                    width: 400px;
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
                }
                button:hover {
                    background-color: #082567;
                    color: white;
                    
                }
            }
        }
    }
    
</style>

