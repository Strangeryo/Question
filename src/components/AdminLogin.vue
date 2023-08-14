<template>
    <div class="mainis">
        <div class="center">
            <input type="text" name="" placeholder="Username"
                :style="{ width: inputWidth1, border: inputBorder1, color: '#fff' }" @focus="Inputwidth1" @blur="Resewidth1"
                v-model="username">
            <input type="password" name="" placeholder="Password"
                :style="{ width: inputWidth2, border: inputBorder2, color: '#fff' }" @focus="Inputwidth2" @blur="Resewidth2"
                v-model="password" @keyup.enter="login">
        </div>

        <div class="buttons">
            <input type="button" value="Login" :class="{ clicked: isClicked }" class="login" @click="login">
        </div>
    </div>
</template>

<script lang="ts">
import request from "@/common/request"
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'
export default {
    data() {
        return {
            inputWidth1: '',
            inputWidth2: '',
            inputBorder1: '0.15rem solid #fff',
            inputBorder2: '0.15rem solid #fff',
            isClicked: false,
            username: "",
            password: ""
        }
    },
    methods: {
        Inputwidth1() {
            this.inputWidth1 = '22.5rem';
            this.inputBorder1 = '0.225rem solid #fff'
        },
        Resewidth1() {
            this.inputWidth1 = '';
        },
        Inputwidth2() {
            this.inputWidth2 = '22.5rem';
            this.inputBorder2 = '0.225rem solid #d3eaf6'
        },
        Resewidth2() {
            this.inputWidth2 = ''
        },
        login() {   //  管理员登陆接口
            const loading = ElLoading.service({
                lock: true,
                text: 'Logging in...',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            setTimeout(() => {  //  延时登录防止刷接口
                request.post("/admin/login", {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    loading.close()
                    if (res.data.code == 200) {
                        ElMessage({
                            message: '登录成功!',
                            type: 'success',
                            duration: 1000,
                            customClass: 'custom-icon-size'
                        })
                        localStorage.setItem("token", res.data.data.token)
                        this.$router.push('/index')
                    } else {
                        this.inputWidth2 = '19rem';
                        this.inputBorder2 = '0.225rem solid #ef5236'
                        if (this.username == "") {
                            this.inputWidth1 = '19rem';
                            this.inputBorder1 = '0.225rem solid #ef5236'
                        }
                        ElMessage({
                            message: '账号或密码错误!',
                            duration: 1000,
                            type: "error",
                            customClass: 'custom-icon-size'
                        })
                    }
                })
            }, 1000)
        }
    }
}
</script>

<style lang="scss">
.mainis {
    width: 30rem;
    height: 45vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .center {
        width: 20rem;
        height: 34vh;
        padding: 2.5rem 0 3rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        input {
            width: 17rem;
            height: 6vh;
            background: transparent;
            text-align: center;
            border-radius: 2.5rem;
            font-size: 1.2rem;
            transition: 0.28s;
        }

        input:hover {
            width: 22.5rem;
            border: 0.225rem solid #d3eaf6;
        }

    }

    .buttons {
        width: 20rem;
        height: 11vh;
        margin: -5rem 10rem 0 10rem;
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 7.5rem;
            height: 6vh;
            border-radius: 2.5rem;
            font-size: 1rem;
            border: 0.15rem solid #ffffff7b;
            cursor: pointer;
        }

        input:hover {
            box-shadow: 0 0 1rem rgba(202, 202, 202, 0.7);
        }

        .login:active {
            width: 10rem;
            height: 5.8vh;
            border-radius: 2.4rem;
            font-size: 1.2rem;
            box-shadow: -0.15rem -0.15rem 0.75rem rgba(255, 255, 255, .5),
                0.5rem 0.5rem 0.75rem rgba(70, 70, 70, .12),
                inset -0.15rem -0.15rem 0.15rem rgba(255, 255, 255, .5),
                inset 0.15rem 0.15rem 0.15rem rgba(70, 70, 70, .12);
        }
    }
}

::placeholder {
    color: rgb(200, 198, 198);
    font-size: 1.25rem;
    font-style: italic;
}

.custom-icon-size .el-message__icon {
    font-size: 1.2rem;
}
</style>

