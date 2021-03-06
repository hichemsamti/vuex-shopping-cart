import Router from "vue-router";
import Vue from "vue";




Vue.use(Router);


export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "Product",
        component: () => import("../components/Product.vue"),
      }
     /* {
        path: "/order",
        name: "Order",
        component: () => import("../components/Order.vue"),
       }*/
    ]
})