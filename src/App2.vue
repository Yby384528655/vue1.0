<template>
	<div id="app">
		hello {{name}}!
		<header1></header1>
		<banner1></banner1>
		<span>This will never change: {{* msg }}</span>
		<div>{{{ raw_html }}}</div>
		<my-component></my-component>
		<a :href.literal="url">a={{a}}</a>
		<a @click='xxx'>b={{b}}</a>
		<div id="demo">{{fullName}}</div>
		<div class="static" :class="{'class-a':isA,'class-b':isB }">asdfasdfasdfasdfadsfadfs</div>
		<div v-if="ok">hello</div>
		<ul id="exmaplea">
			<li v-for='item in items' track-by='message'>{{parentMessage}} - {{$index}} -{{item.message}}</li>
			<template v-for='item in items' track-by='message'>
				<li>{{item.message}}</li>
				<li class="divider">|</li>
			</template>
		</ul>
		<div>
			<button @click="say('hi')">say hi</button>
			<button @click="say('what')">say what</button>
			<button @click="says('hello',$event)">says</button>
		</div>
		<div>
<!-- 			<input type="checkbox" id="jack" value='jack' v-model='checkedNames'>
			<label for="jack">jack</label>
			<input type="checkbox" id="john" value='john' v-model='checkedNames'>
			<label for='john'>john</label>
			<input type="checkbox" id="mike" value='mike' v-model='checkedNames'>
			<label for='mike'>mike</label> -->
			<template v-for='checkname in checknames'>
				<input type="checkbox" v-bind:id=checkname.name v-bind:value=checkname.name v-model='checkedNames' >
				<label v-bind:for="checkname.name">{{checkname.name}}</label>
			</template><br>
			<span>checked names:{{checkedNames|json}}</span>
		</div>
		<div v-if="show" transition="my-transition">asdf</div>
		<div v-if="true" transition='expand'>asdf</div>
	</div>
</template>
<script>
import Vue from 'vue'
import header1 from './components/header'
import banner1 from './components/banner'
// var vm=new Vue({
// 	data(){
// 		return{
// 			firstName:'foo',
// 			lastName:'bar',
// 			fullName: 'foo bar'
// 		}
// 	}
// })
export default({
	components: { header1,banner1 },
	data(){
	 	return{
	 		name: 'Vue.js',
	 		msg:'123456789',
	 		url:'#1234',
	 		a:1,
			firstName:'foo',
			lastName:'bar',
	 		raw_html:'<p>asdfjasdlfkj</p>',
	 		isA:true,
	 		isB:false,
	 		parentMessage:'parent',
	 		items:[
	 			{message:'foo'},
	 			{message:'bar'}
	 		],
	 		checknames:[
	 			{name:'jack'},
	 			{name:'john'},
	 			{name:'mike'}
	 		],
	 		checkedNames:[],
	 		show:true
	 	}
	},
	methods:{
		xxx:function(){
			console.log(123);
		},
		say:function(msg){
			alert(msg)
		},
		says:function(msg,event){
			event.preventDefault()
		}
	},
	computed:{
		b:function(){
			return this.a+1
		},
		// fullName:function(){
		// 	return this.firstName + ' ' + this.lastName
		// }
		fullName:{
			get:function(){
				return this.firstName + ' ' + this.lastName
			},
			set:function(newValue){
				var names=newValue.split(' ')
				this.firstName=names[0]
				this.lastName=names[names.length-1]
			}
		}
	}
})
// vm.$watch('firstName',function(val){
// 	console.log(val)
// 	// this.fullName=val+' '=this.lastName
// })
// vm.$watch('lastName',function(val){
// 	// this.fullName=this.firstName+ ' ' +val
// })
var MyComponent = Vue.extend({
  // 选项...
  template: '<div>A custom component!</div>'
})
Vue.component('my-component', MyComponent)
</script>
<style type="text/css">
	*{margin:0;padding:0;text-align: center;}
	body{font-size:0.625;}
	#app{font-size:4em;}
	#app button{height:2em;font-size:1em;}
	/* 必需 */
	#app .expand-transition {
	  transition: all .3s ease;
	  height: 70px;
	  padding: 10px;
	  background-color: #eee;
	  overflow: hidden;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	#app .expand-enter,#app  .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
</style>