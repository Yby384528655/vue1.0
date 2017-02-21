<template>
	<div>
	<header>产品列表</header>
	<form>
		<ul class="producttype">
			<li><p @click='shownext(1)'>产品类型<i><img src="../assets/triangle.png"></i></p>
				<ul v-show=shownext1><li v-for='list in list1' @click='showsql(list.index)' :class='{font_red:list1red==list.index}'>{{list.name}}</li></ul>
			</li>
			<li><p @click='shownext(2)'>产品类型<i><img src="../assets/triangle.png"></i></p>
				<ul v-show=shownext2><li v-for='list in list2' @click='showsql(list.index)' :class='{font_red:list2red==list.index}'>{{list.name}}</li></ul>
			</li>
			<li><p @click='shownext(3)'>产品类型<i><img src="../assets/triangle.png"></i></p>
				<ul v-show=shownext3><li v-for='list in list3' @click='showsql(list.index)' :class='{font_red:list3red==list.index}'>{{list.name}}</li></ul>
			</li>
		</ul>
	</form>
	<div class="product_content">
      <div class="title">
        <span class="name">金鑫宝1号第12期</span>
        <span class="pay">按期付息</span>
      </div>
      <div class="detail">
        <div class="detail_box">
          <div class="detail_box_num font60">10.80<span>%</span></div>
          <div class="detail_box_font">年化收益</div>
        </div>
        <div class="detail_box">
          <div class="detail_box_num">180天</div>
          <div class="detail_box_font">投资期限</div>
        </div>
        <div class="detail_box">
          <div class="detail_box_num">100元</div>
          <div class="detail_box_font">起购金额</div>
        </div>
      </div>
      <div class="progress">
        <div class="now">47%</div>
        <div class="value"></div>
      </div>
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
  }
  .content{
  	background:#fff;
  }
  .producttype{
  	display:inline-block;
  	width:100%;
  	background:#fff;
  	height:36px;
  	line-height:36px;
  	border-top:1px solid #c4c4c4;
  	color:#787878;
  }
  .producttype>li{
  	float:left;
  	width:33.3%;
  	list-style: none;
  	font-size:0.8rem;
  }
  .producttype>li p{
  	text-align: center;
  }
  .producttype>li li{
  	list-style: none;
  	text-align: center;
  	background:#fff;
  }
	.producttype>li i{
	margin-left: 0.5rem;
	vertical-align: baseline;
	display: inline-block;
	width: 0.625rem;
	height: 0.325rem;
	}
	.producttype>li i img{
	width: 100%;
	height: 100%;
	}
	.product_content {
    width: 100%;
    height: 9.375rem;
    background-color: #fff;
    margin-top: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
  }
  .product_content .title {
    margin-left: 0.55rem;
    margin-top: 0.7rem;
    margin-bottom: 0.75rem;
    text-align: left;
  }
  .product_content .title .name {
    font-family: '黑体';
    font-size: 0.8rem;
    color: #333333;
    margin-right: 2px;
  }
  .product_content .title .pay {
    font-family: '黑体';
    font-size: 0.6rem;
    color: #787878;
  }
  .product_content .detail {
    background-color: #ffffff;
    font-size: 0;
    box-sizing: border-box;
  }
  .product_content .detail .detail_box {
    width: 33%;
    font-size: 0.75rem;
    color: #787878;
    display: inline-block;
    text-align: center;
  }
  .product_content .detail .detail_box .detail_box_num{
    color: #333;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
  .product_content .detail .detail_box .font60 {
    color: #ef3e44;
    font-size: 1.5rem;
  }
  .product_content.new img.flag {
    position: absolute;
    top:0;
    right: 0;
    width: 2.75rem;
    height: 2.75rem;
    display: none;
  }
  .product_content.new img.flag {
    display: block;
  }
  .product_content.over img.flag {
    position: absolute;
    top:0;
    right: 0;
    width: 2.75rem;
    height: 2.75rem;
    display: none;
  }
  .product_content.over img.flag {
    display: block;
  }
  .progress {
    width: 80%;
    height: 0.15rem;
    margin-top:2.4rem;
    margin-left: 0.8rem;
    background-color: #d9d9d9;
    position: relative;
  }
  .progress .value {
    width: 47%;
    height: 100%;
    background-color: #ef3e44;
  }
  .progress .now {
    position: absolute;
    left: 47%;
    top: -1.525rem;
    margin-left: -0.84rem;
    width: 1.775rem;
    height: 1.525rem;
    background: url("../assets/icon2.png") no-repeat;
    background-size: 1.775rem 1.525rem;
    color: #ffffff;
    text-align: center;
    line-height: 1.025rem;
    font-size: 0.7rem;
  }
</style>
<script>
	export default{
		data(){
			return{
				list1:[{name:"全部",index:11},{name:"新手标",index:12},{name:"进行中",index:13},{name:"已完结",index:14},{name:"投标中",index:15}],
				list2:[{name:'全部',index:21},{name:'一周',index:22},{name:'15天',index:23},{name:'30天',index:24},{name:'180天',index:25},{name:'365天',index:26}],
				list3:[{name:'全部',index:31}],
				shownext1:false,
				shownext2:false,
				shownext3:false,
				list1red:11,
				list2red:21,
				list3red:31,
			}
		},
		methods:{
			shownext(shown){
				switch(shown){
					case 1:
					this.shownext1=true;
					this.shownext2=false;
					this.shownext3=false;
					break;
					case 2:
					this.shownext1=false;
					this.shownext2=true;
					this.shownext3=false;
					break;
					case 3:
					this.shownext1=false;
					this.shownext2=false;
					this.shownext3=true;
					break;
				}
			},
			showsql(value){
				this.shownext1=false;
				this.shownext2=false;
				this.shownext3=false;
				if(value==this.list1red ||value==this.list2red || value==list3red){
					return false;
				}
				switch(value){
					case 11:
					this.list1red=11;
					break;
					case 12:
					this.list1red=12;
					break;
					case 13:
					this.list1red=13;
					break;
					case 14:
					this.list1red=14;
					break;
					case 15:
					this.list1red=15;
					break;
					case 21:
					this.list2red=21;
					break;
					case 22:
					this.list2red=22;
					break;
					case 23:
					this.list2red=23;
					break;
					case 24:
					this.list2red=24;
					break;
					case 25:
					this.list2red=25;
					break;
					case 26:
					this.list2red=26;
					break;
					case 31:
					this.list3red=31;
					break;
				}
			}
		}
	}
</script>