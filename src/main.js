import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import $ from 'jquery'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import RouterConfig from './routerConfig'
Vue.use(Mint);
Vue.use(VueRouter)
Vue.use(VueResource)
//开启debug模式(默认值false)
Vue.config.debug = true;
// ES6 模板字符串(默认值['{{','}}'])
// Vue.config.delimiters=['${','}']
// 修改原生HTML插值的定界符(默认值['{{{','}}}'])
// Vue.config.unsafeDelimiters=['{!!','!!}']
// 取消Vue.js所有的日志与警告(默认值false)
// Vue.config.silent=true
// 是否关闭异步模式(默认值true)
// Vue.config.async=false
// 是否允许vue-devtools检查代码(开发环境为true，生产版默认为false)
// Vue.config.devtools=true
/* eslint-disable no-new */
var router = new VueRouter();
router.map(RouterConfig);
router.start(App,'#app')
// new Vue({
//   el: 'body',
//   components: { App }
// })
function autoPage() {
  //移动端适配
  return (function (desW, fs) {
    var html = document.getElementsByTagName('html')[0], winW = html.clientWidth;
    winW >= desW ? html.style.fontSize = fs + 'px' : html.style.fontSize = fs / desW * winW + 'px';
  })('750', '40')
}
$(document).ready(function(){
  if($(window).width()<375){
    console.log($(window).width)
    $('.topMain div:first-child').css('margin-right','0')
  }
  autoPage();
})