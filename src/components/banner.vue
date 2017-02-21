<template>
<div class="banner">
	<div v-if="show" transition="transitionName">hello</div>
	<button @click='togglec'>toggle</button>
	<p transition="fade">hahah</p>
	<my-component1></my-component1>
	<div>
		<input v-model='parentMsg'><br>
		<child :my-message='parentMsg'></child>
	</div>
</div>
</template>
<script>
	import Vue from 'vue'
	export default{
		data(){
			return{
				show:true,
				transitionName:'fade',
				parentMsg:'2017'
			}
		},
		methods:{
			togglec:function(){
				this.show=false
			}
		}
	}
	var MyComponent1=Vue.extend({
		template:'<div>A custom componen</div>'
	})
	Vue.component('my-component1',MyComponent1)
	Vue.component('child',{
		props:['myMessage'],
		template:'<span>{{myMessage}}</span>'
	})
</script>
<style type="">
	.banner button{
		width:100%;
		border:0;
	}
	.banner .expand-transition {
	  transition: all .3s ease;
	  height: 30px;
	  padding: 10px;
	  background-color: #eee;
	  overflow: hidden;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.banner .expand-enter, .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
</style>