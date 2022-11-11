<template>
    <div class="header">
        <div class="header-logo">
            <router-link to="/"><img src="./../assets/images/logo.png" alt=""></router-link>
        </div>
        <div class="header-info">
            <div class="header-info__contacts" >
                <h1><img src="./../assets/images/phone.svg" alt="">+7 778 870 10 42</h1>
                <h1><img src="./../assets/images/mail.svg" alt="">office@spheregroup.kz</h1>
                <h1><img src="./../assets/images/maps.svg" alt="">ул. Кажымукана, 12а</h1>
                <h1><img src="./../assets/images/calendar.svg" alt="">пн - пт с 9:00 ч до 18:00 ч</h1>
            </div>
            <div class="header-info__menu" :class="{'header-info__menu_active': state}">
                <span class="header-info__menu_nav" >
                    <div class="header-info__menu_nav_it"><router-link to="/">Главная</router-link></div>
                    <div class="header-info__menu_nav_it"><router-link to="/about">О нас</router-link></div>
                    <div class="header-info__menu_nav_it"><DropdownPage title="Услуги" :items="services"></DropdownPage></div> 
                    <div class="header-info__menu_nav_it"><DropdownPage2 title="Продукты" :items="products"></DropdownPage2></div>
                </span>
            </div>
            <div @click="openMobileMenu" class="header-info__gam">
                <span :class="{'header-info__gam_span': state}"></span>
                <span :class="{'header-info__gam_span': state}"></span>
                <span :class="{'header-info__gam_span': state}"></span>
            </div>
        </div>
        
    </div>
    
</template>

<script>
import DropdownPage from '../modules/components/DropdownPage.vue'
import DropdownPage2 from '../modules/components/DropdownPage2.vue'
export default {
    components: {
        DropdownPage,
        DropdownPage2
    },
    data () {
        return {
            services: [
                {
                    title: 'Услуги 1С: ИТС',
                    link: '/Services'
                },
                {
                    title: 'Услуги 1С:Вебкасса',
                    link: '/Webkassa'
                },
                {
                    title: 'Услуги 1С аренда в облаке',
                    link: '/CloudService'
                },
                {
                    title: 'Услуги обслуживания 1С',
                    link: '/srvpage'
                }
                
            ],
            products: [
                {
                    title: 'Продукты подробно Tillypad',
                    link: '/tillypad'
                },
                {
                    title: 'Продукты подробно 1С',
                    link: '/product1C'
                }
            ],
            state: false
        }
    },
    methods: {
        openMobileMenu() {
            this.state = !this.state
            console.log("openMobileMenu");
        }
    }
}
</script>

<style lang="scss" scoped>

.header {
    position: relative;
    margin: 0;
    display: flex;
    width: 100%;
    z-index: 9999;
    &-logo {
        width: 20%;
        padding-left: 60px;
        padding-right: 60px;
        img {
            padding-left: 80px;
            padding-top: 40px;
            padding-bottom: 40px;
            width: 220px;
            height: 260px;
            @media (max-width: 1024px) {
                padding-left: 20px;
            }
            @media (max-width: 768px) {
                width: 180px;
                height: 200px;
            }
        }
         @media (max-width: 768px) {
            padding-left: 10px;
            img {
                width: 130px;
                height: 160px;
            }    
        }
    }
    &-info {
            width: 80%;
            position: relative;
        &__contacts {
            float: right;
            padding-right: 60px;
            padding-top: 20px;
            h1 {
                font-family: 'Roboto Slab', serif;
                font-size: 18px;
                padding-top: 0;
                img {
                    width: 35px;
                    height: 35px;
                    vertical-align: middle;
                    padding-right: 10px;
                }
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        &__menu {
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            clip-path: polygon(5% 0%, 100% 0, 100% 100%,0% 100% );
            height: auto;
            align-items: center;
            background-color:#082567;
            padding-top: 20px;
            padding-bottom: 20px;
            &_nav {
                float: right;
                display: flex;
                justify-content: space-between;
                padding-left: 180px;
                padding-right: 180px;
                position: relative;
                width: 75%;
                &_it {
                    position: relative;
                    a {
                        font-family: 'Roboto Slab', serif;
                        color: white;
                        font-size: 20px;
                        display: block;
                        padding-bottom: 10px;
                    } 
                    :hover {
                        height: auto;
                    }
                }
                @media (max-width: 1024px) {
                    padding-left: 80px;
                    padding-right: 80px;
                }
            }
        }
        &__gam {
            display: none;
            span {
                width: 35px;
                height: 3px;
                margin-bottom: 4px;
                display: block;
                background-color: #082567;
            }
        }
        @media (max-width: 768px) {
            &__menu {
                top: 0;
                right: 0;
                clip-path: none;
                width: 100%;
                left: 90%;
                display: block;
                height: auto;
                &_active {
                    left: 0;
                    transition: 1s;
                }
                &_nav {
                    display: inline-block;
                    padding-top: 40px;
                    background-color: #082567;
                    width: 70.6%;
                }
            }
            &__gam {
                display: block;
                position: absolute;
                left: 60%;
                top: 40%;
                &_span {
                    opacity: 0;
                    transition: .5s;
                }
            }
        }
        @media (max-width: 475px) {
            &__menu {
                left: 80%;
                width: 500px;
                &_it {
                    width: 200px;
                }
                &_active {
                    left: -60%;
                    transition: 1s;
                }
                &_nav {
                    width: 68%;
                }
            }
        }
    }
}
@media (max-width: 1024px) {
    
}
</style>