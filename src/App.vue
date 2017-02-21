<template>
  <div class="app">
    <!-- <component :is="active" keep-alive></component> -->
    <router-view></router-view>
    <bottoms></bottoms>
<!--     <footer>
      <div class="tab" v-for="value in tabs" @click="toggle($event, $index)" >
        <div class="tab_wrap">
        <a v-link=value.tabpath >
          <img :src="value.imgUrl">
          <div :class="{font_red: value.flag}" transition="fade">{{value.tabName}}</div>
          </a>
        </div>
      </div>
    </footer> -->

  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import ProductList from './components/ProductList.vue'
// import My from './components/My.vue'
/*
 import Test1 from './components/Test1.vue'
 import Test2 from './components/Test2.vue'*/
// import More from './components/More.vue'
import bottoms from './components/footer.vue'
export default {
  components: {
    // Home, ProductList, My, More
    bottoms
  },
  data(){
    return{
      active: "Home",
      tabs: [
        {imgUrl:require('./assets/index_r.png'), tabName: '金储宝', flag: true,tabpath:'/Home'},
        {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
        {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
        {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
      ]
    }
  },
  methods:{
    toggle (eve, index) {
      switch (index) {
        case 0:
          this.active = "Home",
          this.tabs = [
            {imgUrl:require('./assets/index_r.png'), tabName: '金储宝', flag: true,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ]
          break;
        case 1:
          this.active = "ProductList",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_r.png'), tabName: '产品', flag: true,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ];
          break;
        case 2:
          this.active = "My",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_r.png'), tabName: '我的', flag: true,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ];
          break;
        case 3:
          this.active = "More",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_r.png'), tabName: '更多', flag: true,tabpath:'/More'}
          ];
          break;
      }

    }
  },
  // created:function(){
  //   console.log(this.$route.path)
  //     switch(this.$route.path){
  //       case '/' : case '/Home':
  //         this.active = "Home",
  //         this.tabs = [
  //           {imgUrl:require('./assets/index_r.png'), tabName: '金储宝', flag: true,tabpath:'/Home'},
  //           {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
  //           {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
  //           {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
  //         ]
  //         break;
  //       case '/ProductList':
  //         this.active = "ProductList",
  //         this.tabs = [
  //           {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
  //           {imgUrl:require('./assets/obj_r.png'), tabName: '产品', flag: true,tabpath:'/ProductList'},
  //           {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
  //           {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
  //         ];
  //         break;
  //       case '/My':
  //         this.active = "My",
  //         this.tabs = [
  //           {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
  //           {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
  //           {imgUrl:require('./assets/money_r.png'), tabName: '我的', flag: true,tabpath:'/My'},
  //           {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
  //         ];
  //         break;
  //       case '/More': case '/News':
  //         this.active = "More",
  //         this.tabs = [
  //           {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
  //           {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
  //           {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
  //           {imgUrl:require('./assets/more_r.png'), tabName: '更多', flag: true,tabpath:'/More'}
  //         ];
  //         break;
  //     }
  // },
  ready(){
    // console.log(this.$route.path)
      switch(this.$route.path){
        case '/' : case '/Home':
          this.active = "Home",
          this.tabs = [
            {imgUrl:require('./assets/index_r.png'), tabName: '金储宝', flag: true,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ]
          break;
        case '/ProductList':
          this.active = "ProductList",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_r.png'), tabName: '产品', flag: true,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ];
          break;
        case '/My':
          this.active = "My",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_r.png'), tabName: '我的', flag: true,tabpath:'/My'},
            {imgUrl:require('./assets/more_g.png'), tabName: '更多', flag: false,tabpath:'/More'}
          ];
          break;
        case '/More': case '/News':
          this.active = "More",
          this.tabs = [
            {imgUrl:require('./assets/index_g.png'), tabName: '金储宝', flag: false,tabpath:'/Home'},
            {imgUrl:require('./assets/obj_g.png'), tabName: '产品', flag: false,tabpath:'/ProductList'},
            {imgUrl:require('./assets/money_g.png'), tabName: '我的', flag: false,tabpath:'/My'},
            {imgUrl:require('./assets/more_r.png'), tabName: '更多', flag: true,tabpath:'/More'}
          ];
          break;
      }

  }
}
</script>

<style>
  body {
    font-family:SimHei,Source Sans Pro, Helvetica, sans-serif;
  }
#app {
  background-color: #f2f2f2;
  padding-bottom: 50px;
}
  footer {
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: #ffffff;
    color: #333333;
    font-size: 0;
    border-top: 1px solid #e7e7e7;
    text-align: center;
    box-sizing: border-box;
  }
  footer .tab {
    width: 25%;
    height: 100%;
    font-size: 0.6rem;
    font-family: "黑体";
    box-sizing: border-box;
    display: inline-block;
  }
  footer .tab .tab_wrap{
    width:100%;
    margin-top:0.3rem;
  }
  footer .tab .tab_wrap a{
    display:inline-block;
    width: 100%;
    margin:0 auto;
    text-decoration: none;
    color:#000;
  }
  footer .tab img {
    width: 1.25rem;
    height: 1.25rem;
  }
  .red div {
    color: #ef3e44;
  }
  .font_red {
    color: #ef3e44;
  }
  .fade-transition {
    transition: color 3s ease;
  }
/*#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}*/
</style>
