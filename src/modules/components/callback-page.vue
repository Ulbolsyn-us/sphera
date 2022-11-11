<template>
    <div class="connect">
        <div class="connect-inner">
            <div class="connect-inner__call">
                <input type="text" name="name" placeholder="Имя" v-model="name">
                    <span class="connect-inner__call_border"></span>
                <input type="tel" name="phone" placeholder="Контакты" v-model="phone">
                <input type="text" name="question" placeholder="Ваш вопрос" v-model="question">
                <button @click="submitHandler">
                    Позвоните мне!
                </button>
            </div>
        </div>
     </div>
</template>

<script>
export default {
   data() {
        return {
            name: '',
            phone: '',
            question: '',
        }
   },
   methods: {
        submitHandler() {
            const data = {
                name: this.name,
                phone: this.phone,
                question: this.question
            }
            fetch("http://localhost:3000/post",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data)
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                alert('Ожидайте звонка')
        }
   }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.connect {
    &-inner {
        &__call {
            padding-left: 40px;
            display: flex;
            justify-content: space-between;
            @media (max-width: 768px) {
                    flex-wrap: wrap;
                }
            input[name=name],[name=phone] {
                width: 250px;
                height: 50px;
                padding-left: 20px;
                margin-bottom: 20px;
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
                margin-bottom: 20px;
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