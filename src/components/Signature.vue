<template>
    <v-touch class="v-touch" @swiperight="toPreviousPage">
        <img src="../../public/logo.png" style="width: 45%; position: absolute; left: 12%; top: 8%"/>
        <br/><br/><br/><br/><br/><br/><br/>
        <p class="h4">拾起2020的幸福与遗憾</p><br/>
        <p class="h4">打包整理</p><br/>
        <p class="h4">新的一年</p><br/>
        <p class="h4">我一定会认真生活</p><br/>
        <p  class="h4">拥抱2021</p><br/>
        <p class="h4">新的一年继续努力鸭！</p><br/>
            <v-container>
                <v-text-field
                        v-model="userName"
                        label="写下你的名字吧~"
                        :rules="rules"
                        style="width:90%; padding-left: 10%">
                    <template v-slot:append>
                        <v-btn :disabled="!userName || !inputState" @click="addName">I am ready!</v-btn>
                    </template>
                </v-text-field>
            </v-container>
        <b-icon icon="chevron-double-left" animation="cylon"></b-icon>
        左划上一页
        <b-icon icon="chevron-double-left" animation="cylon"></b-icon>
        <br/><br/><br/>
    </v-touch>
</template>

<script>
    export default {
        name: "Signature",
        data: function() {
            return {
                userName: "",
                rules:[
                    value => !!value || 'Required',
                    value => (value && value.length <= 15) || '最多15个字'
                ]
            }
        },
        computed: {
            inputState() {
                let len = this.userName.length
                return len <= 15 && len > 0
            }
        },
        methods: {
            addName() {
                this.$store.commit('addName', this.userName)
                console.log("Added Name", this.$store.state)
                this.$router.push('/end')
            },
            toPreviousPage() {
                this.$router.push('/setGoals')
            }
        }
    }
</script>

<style scoped>
    .v-touch{
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 100% 100%;
        height: 100vh;
        touch-action: pan-y!important;
        overflow: scroll;
    }
</style>