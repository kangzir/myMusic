import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import('../views/Home')
const Found = () => import('../views/found/Found')
const Recommend = () => import('../views//recommend/Recommend')
const NewMusic = () => import('../views/newMusic/NewMusic')
const NewMV = () => import('../views/newMV/NewMV')

const Result = () =>import('../views/result/Result')
const DetailsRecommend = () =>import('../views/DetailsRecommend/DetailsRecommend')
const mvDetails =() =>import('../views/mvdetails/mvDetails')
// 登录注册
const Login = ()=> import('../views/login/Login')
const ToLogin = ()=> import('../views/login/ToLogIn')

Vue.use(VueRouter)

  const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        redirect:'/found',
      },
      {
        path:'/found',
        component:Found,
        meta: { title:'发现音乐'}
      },
      {
        path:'/recommend',
        component:Recommend,
        meta: { title:'推荐歌单'}
      },
      {
        path:'/newMusic',
        component:NewMusic,
        meta: { title:'最新音乐'}
      },
      {
        path:'/newMV',
        component:NewMV,
        meta: { title:'最新MV'}
      },
      {
        path:'/result/:key',
        component:Result,
        meta: { title:'结果'}
      },
      {
        path:'/detailsRecommend/:id',
        component:DetailsRecommend,
        meta: { title:'专辑'}
      },
      {
        path:'/mvdetails/:id',
        component:mvDetails,
        meta: { title:'视频'}
      },
      {
        path:'/login',
        component:Login,
        meta: { title:'登录'}
      },
      {
        path:'/tologin',
        component:ToLogin,
        meta: { title:'注册'}
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[1].meta.title
  next()
})
export default router
