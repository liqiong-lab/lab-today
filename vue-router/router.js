import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router=new Router({
    mode:"hash",//1、hash哈希：有#号。2、history历史：没有#号
    base:process.env.BASE_URL, //自动获取根目录路径
    routes:[
        {
            path:"/",
            name:"info",
            component:()=>import("./pagesAddress/list/info")//路由懒加载解决首屏加载慢，性能优化
        },
        {
            path:"/curd/add",
            name:"curd-add",
            component:()=>import("./pagesAddress/curd/add")
        },
        {
            path:"/news/details/:id/:title",
            name:"news-details",
            component:()=>import("./pages/news/details")
        },
        {
            path:"/news/article",
            name:"news-article",
            component:()=>import("./pages/news/article")
        }
    ]
});

export default router;