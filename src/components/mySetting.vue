<template>
  <div class="hello">
    <div class="backgroud">
      <img class="backgroundImg" src="../assets/pic/top_bg.jpg" alt="background">
      <div class="user">
        <img class="userIcon" src="../assets/pic/default_photo.png" alt="usericon">
        <a href alt="phone number">1101191111****11541</a>
      </div>
    </div>
    <div class="list">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">收货地址</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">我的订单</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">购物车</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">系统通知</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">会员卡</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">优惠券</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">积分</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media listSpace">
          <div class="mui-media-body"></div>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/pic/shuijiao.jpg">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySetting",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.backgroundImg {
  height: 40vw;
  width: 100%;
  color: beige;
}

.user {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  margin-top: -36vw;
  margin-left: 9vw;
  .userIcon {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 4vw;
    margin-bottom: -5vw;
  }
  a {
    color: white;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    padding-top: 12vw;
    font-size: 4.5vw;
    margin-left: 3vw;
  }
}

.list {
  margin-top: 16vw;
  img {
    border-radius: 50%;
    overflow: hidden;
    height: 5vw;
    width: 5vw;
    /* margin-top: 3vw; */
    /* margin-right: 7vw; */
    /* margin-left: 1vw; */
    /* margin-bottom: 1vw; */
    margin: 3vw 7vw 1vw 1vw;
  }
  .mui-media-body {
    font-size: medium;
    margin-top: 4vw;
  }
  .listSpace {
    height: 0vw;
    margin-top: -3vw;
  }
}
</style>