<template>
    <div class="video-background">
        <video autoplay loop muted>
            <source src="../assets/fireworks.mp4" type="video/mp4"> <!-- 背景视频 -->
        </video>

        <div class="main">
            <el-row class="nav">
                <el-col :span="2" class="nav-title">
                    <img src="../assets/heart.gif" alt="" style="width: 8rem;height: 8rem;"></el-col>
                <el-col :span="14" class="nav-title"></el-col>
                <el-col :span="8" class="nav-title">
                    <RouterLink class="nav-list" v-for="(item, index) in navList" :key="index" :to="item.path">
                        {{ item.title }}
                    </RouterLink>
                </el-col>
            </el-row>

            <div class="content">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

        <div class="overlay" v-if="showlr">
            <transition name="fade">
                <div v-if="showlr" class="left"></div>
            </transition>
            <transition name="fade">
                <div v-if="showlr" class="right"></div>
            </transition>
        </div>

        <transition name="fade">
            <div v-if="showcenter" class="center"></div>
        </transition>

    </div>
</template>
  
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            showlr: true,
            showcenter: true,
            animatedText: "",
            textToAnimate: 'Discover the endless treasure of knowledge, all in our question bank website!',
            navList: [{
                path: "/",
                title: "首页"
            },
            {
                path: "/start/introduce",
                title: "产品介绍"
            },
            {
                path: "/start/product",
                title: "使用指南"
            },
            {
                path: "/start/login",
                title: "管理"
            }]
        };
    },
    created() {
        setTimeout(() => {
            this.showcenter = false;
            setTimeout(() => {
                this.showlr = false
            }, 2500);
        }, 1500);
    },
    methods: {

    }
}
</script>
  
<style scoped lang="scss">
.video-background {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000;
}

.nav {
    width: inherit;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-title {
        width: 40vw;
        height: inherit;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        .nav-list {
            width: 10vw;
            height: 4vh;
            text-align: center;
            font-size: 1.05rem;
            font-weight: 600;
            color: #fff;
        }
    }
}

.content {
    width: 98vw;
    height: 92vh;
    margin: 0 auto;
}

.overlay {
    position: absolute;
    inset: 0;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;

    .left {
        width: 50vw;
        height: 100vh;
        background-color: #1a1a1a;
        animation: welcome 0.5s 2s ease-out 1 forwards;
    }

    .right {
        @extend .left;
    }
}

@keyframes welcome {
    from {
        width: 50vw;
    }

    to {
        width: 0;
    }
}

.center {
    width: 0.2rem;
    height: 0vh;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: opendown 0.8s 1.2s ease 1 forwards;
    z-index: 10;
}

@keyframes opendown {
    from {
        height: 0;
    }

    to {
        height: 100vh;
    }
}
</style>
  