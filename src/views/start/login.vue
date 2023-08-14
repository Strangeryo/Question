<template>
    <dv-border-box5>
        <div class="main">
            <div class="top">
                <span v-for="(char, index) in animatedText" :key="index" class="animated-char">{{ char }}</span>
            </div>
            <div class="bottom">
                <AdminLogin></AdminLogin>
            </div>
        </div>
    </dv-border-box5>
</template>
<script lang="ts">
import AdminLogin from "@/components/AdminLogin.vue"
export default {
    components: {
        AdminLogin
    },
    data() {
        return {
            animatedText: "",
            textToAnimate: 'Wecome to Question!',
        }
    },
    methods: {
        animateText(text: any) {
            let index = 0;
            const intervalId = setInterval(() => {
                this.animatedText = text.slice(0, index + 1);
                index++;
                if (index === text.length) {
                    clearInterval(intervalId);
                }
            }, 100);
        }
    },
    created() {
        this.animateText(this.textToAnimate);
    }

}
</script>

<style scoped lang="scss">
.main {
    width: 30rem;
    height: 58vh;
    border-radius: 1.5rem;
    background-color: transparent;
    position: absolute;
    inset: 0;
    margin: auto;
    margin-left: 55rem;

    .top {
        width: inherit;
        height: 4vh;
        color: #fff;
        margin-left: 5rem;

        span {
            font-size: 1.65rem;
        }
    }

    .bottom {
        width: inherit;
        height: 45vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

