<template>
    <dv-border-box5>
        <div class="maits">
            <div class="left">
                <img src="../../assets/Logo.svg" alt="">
            </div>
            <div class="right">
                <div class="right-title">
                    <h1>我们的产品致力于用户高效、便<br>捷使用，打造专属于用户的答题软件</h1>
                </div>
                <div class="right-content">
                    <p>您的智慧之友——Question，为您提供了精心编制的题库，涵盖广泛领域，从科学、文学到技术、艺术，无所不包。
                        在繁忙的日常中，随时随地，通过小程序投身于知识的海洋，让学习成为一种乐趣。
                        与此同时，我们致力于创造出色的用户体验。
                        无论您是想提升竞争力，还是拓展视野，Question小程序将成为您的贴心助手。
                    </p>
                </div>
                <div class="right-button">
                    <div class="right-button-product">
                        <RouterLink to="/start/product">
                            <span>Acquire</span>
                        </RouterLink>
                    </div>
                    <div class="right-button-document">
                        <a href="https://github.com/Strangeryo/Question">GitHub</a>
                    </div>
                </div>
            </div>
        </div>

    </dv-border-box5>
</template>
  
<script lang="ts">
export default {
    data() {
        return {

        }
    },
    methods: {

    }

};
</script>
  
<style scoped lang="scss">
.maits {
    width: inherit;
    height: 92vh;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    .left {
        width: 50%;
        height: inherit;
    }

    .right {
        width: 50%;
        height: 72vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-bottom: 10vh;

        .right-title {
            width: 40vw;
            height: 20vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-size: 0.8rem;
            margin: 0.1rem;
        }

        .right-content {
            width: 40vw;
            height: 20vh;
            font-size: 1rem;
            text-indent: 2rem;
            margin: 0.1rem;
        }

        .right-button {
            width: 40vw;
            height: 5vh;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;

            .right-button-document {
                width: 6vw;
                height: 5vh;
                margin-left: 2rem;
                border-radius: 3vw;
                border: 0.1rem solid #fff;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
            }

            .right-button-product {
                @extend .right-button-document;
                background-color: #68d4cd;
                border: none;
            }

            .right-button-product:hover {
                box-shadow: 0 0 1rem #68d4cd;
            }

            .right-button-document:hover {
                box-shadow: 0 0 1rem #fff;
            }
        }
    }
}

a {
    color: #fff;
}

a:hover {
    color: #fff;
}
</style>
  