<template>
    <div class="header">
        <div class="header-logo">
            <img src="./../assets/images/logo.png" alt="">
        </div>
        <div class="header-info">
            <div class="header-info__contacts">
                <h1><img src="./../assets/images/phone.svg" alt="">+7 778 870 10 42</h1>
                <h1><img src="./../assets/images/mail.svg" alt="">office@spheregroup.kz</h1>
                <h1><img src="./../assets/images/maps.svg" alt="">ул. Кажымукана 12 А</h1>
                <h1><img src="./../assets/images/calendar.svg" alt="">пн - пт с 9:00 ч до 18:00 ч</h1>
            </div>
            <div class="header-info__menu">
                <span class="header-info__menu_nav">
                    <a href="#">Главная</a>
                    <a href="#">О нас</a>
                    <a href="#">Услуги</a>
                    <a href="#">Продукты</a>
                    <a href="#">Контакты</a>
                </span>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.header {
    margin: 0;
    display: flex;
    width: 100%;
    &-logo {
    width: 20%;
        padding-left: 60px;
        padding-right: 60px;
        img {
            padding-left: 70px;
            padding-top: 20px;
            width: 160px;
            height: 190px;
        }
    }
    &-info {
            width: 80%;
        &__contacts {
            float: right;
            padding-right: 60px;
            
            h1 {
                font-family: 'Roboto';
                font-size: 14px;
                padding-top: 0;
                img {
                    width: 25px;
                    height: 25px;
                    vertical-align: middle;
                    padding-right: 10px;
                }
            }
        }
        &__menu {
            position: static;
            margin-top: 20px;
            float: right;
            display: flex;
            width: 100%;
            clip-path: polygon(5% 5%, 100% 0, 100% 100%, 0% 100%);
            height: 50px;
            display: flex;
            align-items: center;
            background-color: #E15517;
            
            &_nav {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding-left: 140px;
                padding-right: 60px;
                a {
                    font-family: 'Roboto';
                    color: white;
                    font-size: 20px;
                }
                
            }
        }
    }
    
}
</style>