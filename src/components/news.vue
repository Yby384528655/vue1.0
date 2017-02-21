<template>
	<div>
		<header>消息公告</header>
		<div v-for='list in lists' class="newlist">
			<a v-link=('/Ndetail?id='+list.id)>{{list.title}}</a>
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
  .newlist{
  	background:#fff;
  	line-height: 40px;
  	padding-left: 10px;
  	width:100%;
  	box-sizing: border-box;
  	overflow:hidden;
  }
  .newlist a{
  	text-decoration: none;
  	color:#000;
  }
</style>
<script>
    export default{
        data(){
            return{
            	lists:[]
            }
        },
        ready(){
        	this.$http.get('https://api.hzjcb.com/rest/articleList/app_site_notice?pager.pageNumber=1').then(
              function(res){
              	this.lists=res.body.articleItemList

                // rel = JSON.parse(res.body);
                // alert(typeof(rel))
              },function(){
                alert('00000000')
              }
            )
        }

    }
</script>