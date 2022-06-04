import Vue from 'vue'
import VueRouter from 'vue-router'

import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path:'/',component:showBlogs},
        {path:'/add',component:addBlog},
        {path:'/blog/:id', component:singleBlog},
    ],
    mode: 'history',
});
