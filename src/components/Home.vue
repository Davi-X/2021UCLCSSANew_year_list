<template>
    <v-touch v-on:tap="tapToNext">
        <img src="../../public/logo.png" style="width: 50%; position: absolute; left: 24%; top: 10%"/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div style="font-size: 2.6rem">2021已经到来了</div>
        <br/><br/><br/>
        <p style="font-size: 2.5rem">{{days}}天</p><br/><br/>
        <p style="font-size: 2.2rem">{{hours}}时{{minutes}}分{{seconds}}秒</p><br>
        <p>
            点击屏幕 写下新年目标<br/><br/>
            开启属于你的2021吧
        </p>
        <br/><br/><br/><br/>
    </v-touch>
</template>

<script>
    const moment = require("moment");
    export default {
        name: "Home",
        prop: {},
        data: function(){
            return {
                moment: moment,
                baseTime: moment('2021-01-01'),
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        },
        methods: {
            updateTime() {
                this.hours = moment().hour();
                this.minutes = moment().minute();
                this.days = moment().diff(this.baseTime, 'days');
                this.seconds = moment().second();
            },
            tapToNext(){
                this.$router.push('/setGoals')
            }
        },
        mounted(){
            setInterval(() => (this.updateTime()), 1000);

        },
    }
</script>

<style scoped>
</style>