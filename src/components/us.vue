<template>
  <div class="hello">
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item>
        <img src="../assets/pic/banner3.png" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/pic/banner4.png" alt>
      </mt-swipe-item>
    </mt-swipe>

    <div id="title">
      <router-link to="/us/intro">
        <h1>店铺介绍</h1>
      </router-link>
      <router-link to="/us/advices" >
        <h1>建议留言</h1>
      </router-link>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>

    
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "us",
  data() {
    return {
      

    };
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
 
    // getLunbotu() {
    // //   this.$http
    // //     .get("http://www.liulongbin.top:3005/api/getlunbo")
    // //     .then(result => {
    // //       if (result.body.status === 0) {
    // //         this.lunbotuList = result.body.message;
    // //         Toast("加载数据成功");
    // //       } else {
    // //         Toast("获取数据失败");
    // //       }
    // //     });
    //  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.router-link-exact-active{
  border-bottom:1px solid red; 
}
.mint-swipe {
  height: 40vw;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

#title {
  display: flex;
  justify-content: flex-start;
  margin-left: 4vw;
    margin-top: 3vw;
  h1 {
    color: red;
    font-size: 4vw;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    font-weight: 100;
    /* padding-left: 4vw; */
    padding: 0 3vw;
  }
}

#main {
  margin: 5vw 4vw;
}


</style>