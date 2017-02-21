<template>
    <div>
        <header>更多</header>
        <div class="announce box">
          <a v-link='{path:"/News"}'><div class="box_content">消息公告</div></a>
        </div>
      <div class="about box">
        <div class="box_content">关于我们</div>
      </div>
      <div class="help box">
        <div class="box_content">帮助中心</div>
      </div>
      <div class="customer box">
        <div class="box_content">客服中心</div>
      </div>
      <div class="suggest box">
        <div class="box_content">意见反馈</div>
      </div>
      <div class="set box">
        <div class="box_content">设置</div>
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
  .box {
    width: 100%;
    height: 3rem;
    font-size: 0.9rem;
    box-sizing: border-box;
    padding-left: 2.3rem;
    line-height: 3rem;
  }
  .about .box_content, .help .box_content, .suggest .box_content   {
    border-bottom: 1px solid #f5f5f5;
  }
  .box_content {
    box-sizing: border-box;
    background:#ffffff url("../assets/right.png") 95% center no-repeat;
    background-size: 0.35rem 0.75rem;
    height: 3rem;
  }
  .announce {
    margin-bottom: 0.5rem;
    background:#ffffff url("../assets/more_03.png") 0.6rem center no-repeat;
    background-size: 1rem;
  }
  .about {
    background:#ffffff url("../assets/more_06.png") 0.6rem center no-repeat;
    background-size: 1rem;
  }
  .help {
    background:#ffffff url("../assets/more_08.png") 0.6rem center no-repeat;
    background-size: 1rem;
  }
  .customer {
    background:#ffffff url("../assets/more_11.png") 0.6rem center no-repeat;
    background-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .suggest {
    background:#ffffff url("../assets/more_13.png") 0.6rem center no-repeat;
    background-size: 1rem;
  }
  .set {
    background:#ffffff url("../assets/more_16.png") 0.6rem center no-repeat;
    background-size: 1rem;
  }
</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
