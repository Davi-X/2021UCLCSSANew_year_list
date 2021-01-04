<template>
    <v-touch class="v-touch" @swipeleft="toNextPage" @swiperight="toPreviousPage" >
        <img src="../../public/logo.png" style="max-width: 200px;
                                                padding-top: 50px;
                                                margin-left: -70px;" alt=""/>
        <br/><br/>
        <span><strong>请选中或写下你最心目中排名最高的8个</strong></span><br/><br/>
        <p>
            立下你的新年目标
            <v-container>
                <v-text-field
                        v-model="ownGoal"
                        placeholder="写在这里！"
                        counter="25">
                    <template v-slot:append>
                        <v-btn v-if="inputState" @click="addWish">确认</v-btn>
                    </template>
                </v-text-field>
            </v-container>
        </p>

        <div>
            也可以在下面选择<span style="padding: 3%"></span>
            <v-btn @click="changeSet" rounded color="#B0E0E6">换一换</v-btn><br/><br/>
            <span v-for="(choice, index) in currentSet" :key="index">
                <span class="choices">{{index + 1}}.{{choice.value}}</span>
                <input class="wishCheckBoxes" type="checkbox" :id="choice.key" @click="selectWish(choice.key, choice.value)">
                <label :for="choice.key" class="switch"></label>
                <br/><br/>
            </span>
            <v-btn @click="clearAll" rounded color="#B0E0E6">清空</v-btn>
        </div>
        <v-container>
            <v-textarea
                    id="list"
                placeholder="你的愿望表"
                :value="allGoals"
                :readonly="true"
            >
            </v-textarea>
            <b-icon icon="chevron-double-right" animation="cylon"></b-icon>
            右划下一页
            <b-icon icon="chevron-double-right" animation="cylon"></b-icon>
        </v-container>
        <br/><br/>
    </v-touch>
</template>

<script>
    export default {
        name: "Goals",
        data: function() {
            return {
                i: 0,
                ownGoal: "",
                currentIndex: 0,
                currentSet: "",
                set1: [
                    { key: 0, value: "拿到Distinction！", selected: false, switchID: "0ID"},
                    { key: 1, value: "硕士申请如愿以偿", selected: false, switchID: "1ID"},
                    { key: 2, value: "开始做手账！", selected: false, switchID: "2ID"},
                    { key: 3, value: "早睡早起身体好", selected: false, switchID: "3ID"},
                    { key: 4, value: "少吃甜食多喝水", selected: false, switchID: "4ID"},
                    { key: 5, value: "战胜脱发！！", selected: false, switchID: "5ID"}
                ],
                set2: [
                    { key: 6, value: "学会一门新语言", selected: false, switchID: "6ID"},
                    { key: 7, value: "战胜拖延症！", selected: false, switchID: "7ID"},
                    { key: 8, value: "找一份新实习", selected: false, switchID: "8ID"},
                    { key: 9, value: "变瘦变美", selected: false, switchID: "9ID"},
                    { key: 10, value: "精致社交圈", selected: false, switchID: "10ID"},
                    { key: 11, value: "不再熬夜赶due", selected: false, switchID: "11ID"}
                ],
                set3: [
                    { key: 12, value: "多联系在国内的家人", selected: false, switchID: "12ID"},
                    { key: 13, value: "拥有一只狗子", selected: false},
                    { key: 14, value: "学会拒绝❌", selected: false},
                    { key: 15, value: "认真护肤！", selected: false},
                    { key: 16, value: "学做料理 喂饱自己", selected: false},
                    { key: 17, value: "我想要甜甜的恋爱", selected: false}
                ],
                set4: [
                    { key: 18, value: "保持单身吧 单身快乐", selected: false},
                    { key: 19, value: "读很多很多书", selected: false},
                    { key: 20, value: "行万里路！✈️", selected: false},
                    { key: 21, value: "学会摄影📷", selected: false},
                    { key: 22, value: "在seminar上多发言", selected: false},
                    { key: 23, value: "战胜🦠保护自己", selected: false}
                ],
                set5: [
                    { key: 24, value: "2021世界和平", selected: false},
                    { key: 25, value: "能在伦敦面基好友", selected: false},
                    { key: 26, value: "学一种新乐器", selected: false},
                    { key: 27, value: "少打游戏", selected: false},
                    { key: 28, value: "学习理财知识", selected: false},
                    { key: 29, value: "多多运动！", selected: false}
                ],
                choices: [],
                allGoals: [],
            }
        },
        created(){
            this.choices = [this.set1, this.set2, this.set3, this.set4, this.set5];
            this.currentSet = this.set1
        },
        mounted(){
            this.allGoals = this.$store.getters.getCurrentWishes;
        },
        computed: {
            inputState() {
                let len = this.ownGoal.length
                return len < 25 && len > 2
            }
        },
        methods: {
            toNextPage() {
                this.$router.push('/signName')
            },
            toPreviousPage() {
                this.$router.push('/')
            },
            addWish() {
                if(this.$store.getters.getCurrentWishes.length > 7) alert("把剩下的记在心中哦")
                else {
                    this.$store.commit('append', this.ownGoal);
                    this.ownGoal = "";
                    console.log("Append a wish", this.$store.state);
                }
            },
            selectWish(index, choice){
                if (document.getElementById(index).checked){
                    if(this.$store.getters.getCurrentWishes.length > 7) alert("把剩下的记在心中哦")
                    else {
                        this.$store.commit('append', choice);
                        console.log("Append selected wish", choice)
                    }
                }
                else {
                    this.$store.commit('deleteWish', choice)
                    console.log("Delete selected wish")
                }
            },
            clearAll() {
                this.$store.commit('clearAll');
                this.switchOffALlBoxes();
                console.log("Deleted all wishes");
            },
            changeSet() {
                if(this.currentIndex > 3) this.currentIndex = -1;
                this.currentIndex++;
                this.currentSet = this.choices[this.currentIndex];
                console.log(this.currentIndex)
                this.switchOffALlBoxes()
            },
            switchOffALlBoxes(){
                let boxes = document.getElementsByClassName("wishCheckBoxes")
                for (let i = 0; i < boxes.length; i++) {
                    if (boxes[i].checked) boxes[i].checked = false
                }
            }
        }
    }
</script>

<style scoped>
    .v-touch{
        touch-action: pan-y!important;
        /*-moz-background-size:100% 100%;*/
        background-size:100% 100%;
        background-image: url("../../public/bookright.png");
        overflow: scroll;
    }
    .wishCheckBoxes{
        text-align: center;
        display: none;
    }
    .choices{
        width: 50%;
        text-align: center;
        display: inline-flex;
    }
    .switch{
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        background-color: #4e555b;
        border-radius: 20px;
        transition: all 0.3s;
        top: 16px;
    }
    .switch::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 70%;
        background-color: white;
        top: 2px;
        left: 3px;
        transition: all 0.3s;
    }
    .wishCheckBoxes:checked + .switch::after {
        left: 20px;
    }
    .wishCheckBoxes:checked + .switch {
        background-color: rgb(3, 170, 38);
    }
    .v-input{
        width: 90%;
        padding-left: 12%;
    }

</style>