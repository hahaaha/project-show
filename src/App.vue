<template>
    <div id="app">
        <el-container class="container">
            <el-header class="bg" height="300px">
                <div class="typedcontent">
                    <div style="text-align: center;">
                        <p>hello,I like</p>
                        <span id="greeting"></span>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside>
                    <el-menu default-active="/" class="menustyle" router @open="handleOpen" @close="handleClose">
                        <el-menu-item index="/">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>主页面</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="css">
                            <i class="el-icon-menu"></i>
                            <span slot="title">css</span>
                        </el-menu-item>
                        <el-menu-item index="java">
                            <i class="el-icon-document"></i>
                            <span slot="title">java</span>
                        </el-menu-item>
                        <el-menu-item index="html">
                            <i class="el-icon-setting"></i>
                            <span slot="title">html</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
    import Typed from 'typed.js'
    export default {
        name: 'App',
        data() {
            return {
                typedOptions: ["CODE", "BASKETBALL", "SPORT"]
            }
        },
        mounted: function () {
            const typed = new Typed('#greeting', {
                strings: this.typedOptions,
                typeSpeed: 100,
                loop: true,
                backDelay: 800,
                smartBackspace: true
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .menustyle {
        height: 100%;
    }

    .bg {
        width: 100%;
        background: url("./assets/bg.jpg") no-repeat center;
        background-size: cover;
    }

    .typedcontent {
        justify-content: center;
        align-items: center;
        height: 100%;
        display: flex;
        font-size: 32px;
        color: white;
        font-weight: bold;
    }

</style>
