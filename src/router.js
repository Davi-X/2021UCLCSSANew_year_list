import VueRouter from "vue-router";
import Home from "@/components/Home";
import Goals from "@/components/Goals";
import Signature from "@/components/Signature";
import End from "@/components/End";

export default new VueRouter({
    routes :[
        {
            path: '/',
            name: "Page1",
            component: Home
        },
        {
            path: '/setGoals',
            name: "Page2",
            component: Goals},
        {
            path: '/signName',
            name: "Page3",
            component: Signature
        },
        {
            path: '/end',
            name: "page4",
            component: End
        }
    ]
})