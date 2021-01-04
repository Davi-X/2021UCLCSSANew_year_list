<template>
    <div>
        <div ref="printThis" class="end">
            <div v-if="wishes.length > 0">
                <br/><br/>
                <p class="h2">2021年</p>
                <p class="h2">{{name}}的新年目标:</p><br/>
                <div v-for="(wish, index) in wishes" :key="index" style="font-size: 120%; height: 80%">
                    <span style="width: 50%; text-align: center; display: inline-flex;">
                        <i>{{index + 1}}</i>.&nbsp;{{wish}}
                    </span>
                    <hr style="width: 40%; margin: auto;">
                    <br/>
                </div>
<!--                <div>-->
<!--                    <img class="scanLeft" src="../../public/scanLeft.png"  alt=""/>-->
<!--                    <img class="QR_code" src="../../public/QR.png" alt=""/>-->
<!--                    <img class="scanRight" src="../../public/scanRight.png" alt=""/>-->
<!--                </div>-->
            </div>
            <div v-else>
                <img src="../../public/logo.png" style="width: 45%; position: absolute; left: 17%; top: 5%"/>
                <br/><br/><br/><br/><br/>
                <p class="h2">2021年</p>
                <p>你还没有写下或选择愿望哦！</p>
                <br/><br/><br/>
                <p>点击这里，写下您的新年愿望吧！</p>
                <br/><br/><br/>
                <b-button @click="returnToGoals">点我，点我！</b-button>
                <br/><br/><br/><br/>
            </div>
        </div>
        <img class="canvas" :src="output" />
    </div>
</template>

<script>
    export default {
        name: "End.vue",
        data: function(){
            return {
                output: null,
                name: this.$store.state.name,
                wishes: this.$store.state.wishes,
            }
        },
        methods: {
            returnToGoals(){
                this.$router.push('/setGoals')
            },
            async print(){
                const el = this.$refs.printThis;
                const options = {
                    type: 'dataURL'
                }
                this.output = await this.$html2canvas(el, options);
                let htmlBlock = document.getElementsByClassName("end")[0]
               htmlBlock.parentNode.removeChild(htmlBlock);
            }
        },
        mounted() {
            if (this.wishes.length > 0) this.print()
        }
    }
</script>

<style scoped>
    .end{
        height:100vh;
        background-size: 100% 100%;
        background-image: url("../../public/bookright_side.png");
    }
    .canvas{
        width: 100%;
        height: 100vh;
        background-size: 100% 100%;
        background-image: url("../../public/bookright.png");

    }
    .scanLeft{
        width: 25%;
        left: 12%;
        position: fixed;
        bottom: 10%;
    }
    .QR_code{
        left: 36%;
        width: 25%;
        position: fixed;
        bottom: 5%;
    }
    .scanRight{
        width: 30%;
        position: fixed;
        bottom: 10%;
        right: 8%;
    }
    br{
        line-height: 10%;
    }
</style>