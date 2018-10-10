<template>
    <div class="showbox">
        <el-row class="swindows">
            <el-col v-for="(window,index) in currentWindow" :key="index" :span="6">
                <swindow :title="window.name" :img="window.img" :id="window.id"></swindow>
            </el-col>
        </el-row>
        <el-pagination 
            background 
            layout="prev,pager,next" 
            :page-size="pageSize" 
            :page-count="total"
            @next-click="pageAdd"
            @prev-cclick="pageLow"
            @current-change="changeCurrentPage"></el-pagination>
    </div>

</template>
<script>
    import swindow from '@/components/Swindow'
    export default {
        data() {
            return {
                swindows: [],
                total: 0,
                currentPage: 0,
                pageSize: 12,
            }
        },
        mounted: function () {
            this.$http.get('/api/home')
                .then(res => {
                    console.log(res)
                    this.swindows = res.data.homeContent
                    console.log(res.data.homeContent.length)
                    this.total = Math.floor(res.data.homeContent.length /this.pageSize)
                })
        },
        computed: {
            currentWindow: function () {
                return this.swindows.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize)
            }
        },
        methods: {
            pageAdd: function () {
                this.currentPage += 1;
            },
            pageLow: function () {
                this.currentPage -= 1;
            },
            changeCurrentPage: function (val) {
                this.currentPage = val
            }
        },
        components: {
            swindow
        }
    }

</script>

<style scoped>
    .swindows {
        margin-bottom: 24px;
    }
</style>

