<template>
	<div>
		<header>{{title}}</header>
		<div class="content">
			{{{content}}}
		</div>
	</div>
</template>
<style scoped>
  header {
    width: 100%;
    height: 2.25rem;
    font-size: 0.9rem;
    text-align: center;
    line-height: 2.25rem;
    background-color: #fff;
    margin-bottom: 0.5rem;
  }
  .content{
  	background:#fff;
  }
</style>
<style>
  .content img{
    max-width: 100%;
  }</style>
<script>
export default{
    data(){
        return{
        	title:'',
        	content:''
        }
    },
    ready(){
    	var id=this.$route.query.id
    	var url='https://api.hzjcb.com/rest/article/'+id
    	this.$http.get(url).then(
              function(res){
              	this.title=res.body.title
              	this.content=res.body.content
              },function(){
                alert('请求错误！')
              }
            )
    }
}
</script>