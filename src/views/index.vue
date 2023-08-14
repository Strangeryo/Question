<template>
    <div class="mainnn">
        <el-container>
            <el-aside class="left">
                <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                    default-active="2" text-color="#fff">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-aside>
            <el-container class="right">
                <el-header class="top">

                </el-header>
                <el-main class="content">

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
export default {
    components: {
        Document, IconMenu, Location, Setting
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.mainnn {
    width: 100vw;
    height: 100vh;

    .left {
        width: 20vw;
        height: 100vh;
        background-color: aquamarine;
    }

    .right {
        width: 80vw;
        height: 100vh;

        .top {
            width: inherit;
            height: 8vh;
            background-color: beige;
        }

        .content {
            width: inherit;
            height: 92vh;
            background-color: #fff;
        }
    }
}
</style>