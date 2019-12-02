import VueRouter from "vue-router";
import layoutsty from '@/globle/layoutsty/components';

const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            component: home,
            redirect: "/home",
            children: [{
                path: "/home",
                name: "home",
                component: home,
            }]
        },


    ]
});
export default router;