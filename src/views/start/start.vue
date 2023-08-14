<template>
    <div class="mains">

        <div class="specified-position">
            <span v-for="(char, index) in animatedText" :key="index" class="animated-char">{{ char }}</span>
        </div>

        <div class="intro">
            <div class="intro-action">
                <div class="intro-box">
                    <h2 class="intro-jie">
                        解锁
                        <br>
                        知识密码
                    </h2>
                    <p class="intro-en"><span> ABOUT </span></p>
                </div>
            </div>

        </div>


        <div class="center">
            <div class="center-width">
                <div class="concept">
                    <h3 class="ttl">理念</h3>
                    <p class="catch">创造你想要的答题软件</p>
                    <h3 class="ttl">概要</h3>
                    <p class="txt">
                        收录了2000多所高校历年期末考试的题目，真正的海量题库
                        <br>
                        既能看网课又能刷题，适用于大学平时课后习题、备考期未考试，
                        <br>
                        英语四六级、考研真题以及高数、物理、医学等学科都适用
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            animatedText: "",
            textToAnimate: 'Discoverㅤtheㅤendlessㅤtreasureㅤofㅤknowledge,ㅤallㅤinㅤourㅤquestionㅤbankㅤwebsite!',
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
.mains {
    width: 100%;
    height: 100%;

    .specified-position {
        width: 35vw;
        height: 8vh;
        margin-top: 7vh;
        margin-bottom: 7vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .specified-position span:first-of-type {
        margin-left: 2.4rem;
    }

    .specified-position span {
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
    }

    .intro {
        width: 100%;
        height: 23vh;
        display: flex;

        .intro-action {
            position: relative;
            width: 55rem;
            margin: 0 auto;

            .intro-box {
                display: flex;
                justify-content: center;
                margin: 0 0 1.15rem;
                color: #fff;

                .intro-jie {
                    writing-mode: vertical-rl;
                    font-size: 1.2rem;
                    font-weight: 500;
                    letter-spacing: 0.25rem;
                    margin: 1rem 1.2rem 0 0;
                }

                .intro-en {
                    writing-mode: vertical-rl;
                    font-family: 'Ultra';
                    font-size: 0.6rem;

                    span {
                        font-size: 0.6rem;
                        font-family: 'Courier New', Courier, monospace;
                        position: relative;
                        display: inline-block;
                        padding: 0 0 2.8rem;
                        font-weight: 600;
                    }

                    span::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0.11rem;
                        width: 0.1rem;
                        height: 2rem;
                        border-radius: 499.95rem;
                        background: #171717;
                    }
                }
            }
        }

    }

    .center {
        display: flex;
        margin: auto;
        width: 100%;
        height: 46vh;

        .center-width {
            width: auto;
            max-width: 55rem;
            height: 46vh;
            margin: 0 auto;
            z-index: 1;

            .concept {
                width: 70rem;
                max-width: 40rem;
                border: 0.1rem solid #171717;
                border-radius: 0.4rem;
                padding: 2rem;
                margin: 0 auto 4rem;
                color: #fff;
                // background-color: aqua;
            }

            .ttl {
                font-size: 0.8rem;
                font-weight: 500;
                line-height: 2;
                margin: 0 0 0.8rem 6rem;
            }

            .catch {
                font-size: 1.4rem;
                line-height: 1.2;
                margin: 0 0 1.6rem;
                text-indent: 2.8rem;
                margin-left: 6rem;
            }

            .txt {
                font-size: 0.8rem;
                line-height: 2;
                text-indent: 1.6rem;
                margin-left: 6rem;
            }
        }
    }
}

h1,
h2 {
    line-height: 1.5;
}

.animated-char {
    opacity: 0;
    animation: fadeIn 1s ease-in-out 1 forwards;
    font-size: 1.2rem;
    font-family: "Gill Sans", sans-serif;
    color: #fff;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
    