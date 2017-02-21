<template>
	<div id="header">
		<child msg='hello'></child>
	</div>
</template>
<script type="">
	import Vue from 'vue'
	Vue.component('child',{
		props:['msg'],
		template:'<span>{{msg}}</span>'
	})
</script>

