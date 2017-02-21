<template>
  <dir class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="img in images" v-link="{path: '/ActivityDetail'}" target="_blank">
        <img :src="img.src">
      </mt-swipe-item>
    </mt-swipe>
    <!--理财人数总计-->
    <div class="total">
      <div class="people">睿智理财人已加入 <span>46,160</span></div>
      <div class="money">累计投资金额 <span>5,502,245</span></div>
    </div>
    <!--最新活动-->
    <div class="activity">
      <a v-link='{path:"/active"}'><div class="more">更多</div></a>
      <p class="title">参与即送红包！</p>
      <div class="content">文字介绍文字介绍文文字</div>
    </div>
    
    <!--新手标详情-->
    <div class="detail">
      <div class="more">更多</div>
      <div class="title">金鑫宝1号第12期</div>
      <div class="rate">10.80<span> %</span>
          <div class="extra">+1.08%</div>
      </div>
      <div class="tips">预期年化收益</div>
      <div class="home_detail">
        <div class="box">
          <div class="number">7天</div>
          <div class="font">投资期限</div>
        </div>
        <div class="box center">
          <div class="number">10万</div>
          <div class="font">总金额</div>
        </div>
        <div class="box">
          <div class="number">6.6万</div>
          <div class="font">剩余金额</div>
        </div>
      </div>
    </div>
    <!--好友邀请-->
    <div class="home_invest">
      邀请好友立送<span>280</span>元红包！
      <button class="invest_button">马上邀请</button>
    </div>
  </div>
</template>
<style >
  .home {
    background-color: #f2f2f2;
  }

  /*邀请好友*/
  .home_invest {
    width: 100%;
    height: 2.9rem;
    background: #ffffff url("../assets/moneyBick.png") 0.5rem 0.5rem no-repeat;
    background-size: 2.125rem 1.6rem;
    font-size: 0.75rem;
    color: #333;
    padding-left: 3.175rem;
    line-height: 2.9rem;
    position: relative;
    margin-bottom: 0.4rem;
    overflow: hidden;
    box-sizing: border-box;
  }
  .home_invest span {
    color: #ff9000;
  }
  .home_invest .invest_button {
    width: 4.15rem;
    height: 1.65rem;
    border:none;
    border-radius: 0.4rem;
    background-color: #ef3e44;
    color: #ffffff;
    font-family: "黑体";
    font-size: 0.75rem;
    line-height: 1.65rem;
    text-align: center;
    position: absolute;
    top: 0.65rem;
    right: 1.1rem;
    outline: none;
  }
  /*新手标详情*/
  .home .detail {
    width: 100%;
    height: 9.6rem;
    margin: 0.5rem 0;
    background: #ffffff url("../assets/circle_yellow.png") 0.5rem 0.9rem no-repeat;
    background-size: 0.4rem;
    position: relative;
    padding-bottom: 0.8rem;
    overflow: hidden;
  }
  .home .detail .title {
    text-align: center;
    margin-top: 0.65rem;
  }
  .home .detail .rate {
    width: 100%;
    height: 2.5rem;
    text-align: center;
    color: #ef3e44;
    font-size: 2rem;
    font-weight: 600;
    font-family: '宋体';
    position: relative;
    margin:0.7rem 0 0.5rem 0;
  }
  .home .detail .rate span {
    font-size: 0.8rem;
    font-family: '黑体';
  }
  .home .detail .rate .extra {
    position: absolute;
    right: 3rem;
    top: 0.5rem;
    width: 3.25rem;
    height: 1.275rem;
    font-size: 0.6rem;
    color: #ffffff;
    text-align: center;
    font-family: "Microsoft YaHei";
    line-height: 1.275rem;
    background: url("../assets/tipBack.png") no-repeat;
    background-size: 3.25rem 1.275rem;
  }
  .home .detail .tips {
    font-size: 0.6rem;
    color: #999999;
    text-align: center;
  }
  .home_detail {
    box-sizing: border-box;
    width: 100%;
    padding:0 2.25rem;
    margin-top: 0.8rem;
    font-size: 0;
    text-align: center;
  }
  .home_detail .box {
    width: 4.7rem;
    display: inline-block;
    line-height: 1.5rem;
  }
  .home_detail .box .number{
    color: #666;
    font-size: 0.9rem;
  }
  .home_detail .box .font{
    color: #999;
    font-size: 0.6rem;
  }
  .home_detail .center {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  /*最新活动*/
  .home .activity {
    width: 100%;
    height: 2.75rem;
    box-sizing: border-box;
    padding-left: 6.5rem;
    background: #ffffff url("../assets/activityImg.png") left center no-repeat;
    background-size:  5.5rem 2.75rem;
    position: relative;
    overflow: hidden;
  }
  .home .more {
    position: absolute;
    top: 0.6rem;
    right:0.6rem;
    padding-right: 0.5rem;
    font-size: 0.7rem;
    color: #a6a6a6;
    background: url("../assets/right.png") right center no-repeat;
    background-size:  0.35rem 0.75rem;
  }
  .home .title {
    font-size: 0.75rem;
    color: #333333;
    margin-top: 0.5rem;
  }
  .home .activity .content {
    font-size: 0.6rem;
    color: #a6a6a6;
    margin-top: 0.4rem;
  }
  /*人数总计*/
  .home .total {
    width: 100%;
    height: 2.25rem;
    background-color: #ffffff;
    font-size: 0;
    margin-top: 0.6rem;
    margin-bottom: 0.4rem;
  }
  .home .total .people, .home .total .money {
    display: inline-block;
    width: 50%;
    font-size: 0.6rem;
    color: #999999;
    box-sizing: border-box;
    line-height: 2.25rem;
  }
  .home .total .people {
    padding-left: 0.65rem;
  }
  .home .total .money {
    text-align: right;
    padding-right: 0.65rem;
  }
  .home .total .people span, .home .total .money span {
    display: inline-block;
    height: 100%;
    font-size: 0.8rem;
    color: #ef3e44;
  }
  /*轮播图*/
.home .swipe{
  width: 100%;
  height: 10rem;
}
.home .swipe .swipe-item {
    width: 100%;
    height: 100%;
}
.home .swipe .swipe-item img{
  width: 100%;
  height: 100%;
}
  .home .swipe-indicator {
    background: #dbd7d8;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    opacity: 1;
    margin: 0 20px;
  }
  .home .swipe-indicator.active  {
  width: 20px;
  height: 8px;
  border-radius: 10px;
  opacity: 1;
  background-color: #e92100;
}

</style>
<script>
  import { Swipe, SwipeItem } from 'mint-ui'

  export default {
    data () {
    return {
      images: [{src: require("../assets/banner1.png")},{src: require("../assets/banner2.png")},{src: require("../assets/banner1.png")}]
    }
    }
  }

</script>
