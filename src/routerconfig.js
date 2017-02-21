/**
 * Created by admin on 2017/1/16.
 */
import App from './App.vue'
import Home from './components/Home.vue'
import ProductList from './components/ProductList.vue'
import My from './components/My.vue'
import More from './components/More.vue'
import ActivityDetail from './components/ActivityDetail.vue'
import active from './components/active.vue'
import News from './components/news.vue'
import Ndetail from './components/ndetail.vue'
export default {
  '/ActivityDetail': {
    component: ActivityDetail
  },
  '/active':{
  	component:active
  },
  '/':{
  	component:Home
  },
  '/Home':{
  	component:Home
  },
  '/ProductList':{
  	component:ProductList
  },
  '/My':{
  	component:My
  },
  '/More':{
  	component:More
  },
  '/News':{
    component:News
  },
  '/Ndetail':{
    component:Ndetail
  }
}