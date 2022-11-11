<template>
    <div class="contacts">
            <div class="contacts-inner">
                <div class="contacts-inner__info">
                    <h1>Наши контакты</h1>
                    <div class="contacts-inner__info_cnt">
                        <div class="contacts-inner__info_cnt_titl">
                            <h2>Контакты:</h2>
                            <h2>Почта:</h2>
                            <h2>График работы:</h2>
                            <h2>Адрес:</h2>
                        </div>
                        <div class="contacts-inner__info_cnt_sub">
                            <h2>+7 778 870 10 42</h2>
                            <h2>office@spheregroup.kz</h2>
                            <h2>Пн-Пт: 09:00 - 18:00</h2>
                            <h2>ул. Кажымукана 12А <br> 905,906 кабинеты</h2>
                        </div>
                    </div>
                </div>
                <div class="contacts-inner__map">
                    <div ref="cap" class="2GisMap" style="width:100%; height:100%"></div>
                </div>
            </div>
    </div>
</template>

<script>
import DG from "2gis-maps"

export default {
    name: 'App',
    components: {
       
    },
    data: () => ({
    map: null
    }),
    mounted() {
        this.map = new DG.map(this.$refs.cap, {
            'center': [71.46762208362824, 51.15378237434865],
            'zoom': 13,
            'minZoom': 10,
            'fullscreenControl': false
        });
        DG.marker([71.46762208362824, 51.15378237434865],{}).addTo(this.map)
    },
    beforeUnmount () {
        if (this.map) this.map.remove()
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.contacts {
        &-inner {
            @extend %container;
            display: flex;
            justify-content: space-between;
            padding-left: 200px;
            &__info {
                h1 {
                    font-size: 40px;
                    text-transform: uppercase;
                    @extend %header
                }
                &_cnt {
                    display: flex;
                    justify-content: space-around;
                    &_titl {
                        h2 {
                            font-family: 'Roboto';
                            font-weight: 800;
                            color: #082567;
                            font-size: 24px;
                            text-transform: uppercase;
                        }
                    }
                    &_sub {
                        padding-left: 180px;
                        h2 {
                            font-family: 'Roboto';
                            font-weight: 800;
                            font-size: 22px;
                        }
                    }
                }
            }
            &__map {
                width: 600px;
                height: 400px;
            }
        }
    }
</style>