<template>
  <div>
    <!-- <h1>这是order组件</h1> -->
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item>
        <img src="../assets/pic/banner.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/pic/banner1.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> -->
    <div class="container">
      <input class="sousuo" type="search" value placeholder="开启你的美食之旅吧">
      <img src="../assets/pic/bj.png" alt>
      <div class="search"></div>
    </div>

    <div>
      <ul id="oneLine">
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/icon.jpg" alt>
            <div class="mui-media-body">最新推荐</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/icon1.jpg" alt>
            <div class="mui-media-body">热门菜谱</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/icon2.jpg" alt>
            <div class="mui-media-body">人气菜肴</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/icon3.jpg" alt>
            <div class="mui-media-body">优惠券</div>
          </router-link>
        </li>
      </ul>
    </div>

    <div id="secondPanel">
      <label>|积分菜品</label>
      <a href>more>></a>
    </div>

    <div class="mui-content" style="background-color:#fff">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="antiColapes">
              <img class="mui-media-object" src="../assets/pic/p.png">
            </div>

            <div class="mui-media-body firstLine">商务单人餐</div>
            <div class="secondLine">
              <p>$50</p>
              <img src="../assets/pic/yuantiao.jpg" alt>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="antiColapes">
              <img class="mui-media-object" src="../assets/pic/p1.png">
            </div>
            <div class="mui-media-body firstLine">虐狗情人杯</div>
            <div class="secondLine">
              <p>$50</p>
              <img src="../assets/pic/yuantiao.jpg" alt>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="antiColapes">
              <img class="mui-media-object" src="../assets/pic/p2.png">
            </div>
            <div class="mui-media-body firstLine">卤香滑鸡</div>
            <div class="secondLine">
              <p>$50</p>
              <img src="../assets/pic/yuantiao.jpg" alt>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <a href="#">
            <div class="antiColapes">
              <img class="mui-media-object" src="../assets/pic/p3.png">
            </div>
            <div class="mui-media-body firstLine">酷炫绵绵球</div>
            <div class="secondLine">
              <p>$50</p>
              <img src="../assets/pic/yuantiao.jpg" alt>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "order",
  data() {
    return {
      //   lunbotuList: [
      //   ]
    };
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
    // getLunbotu() {
    //   this.$http
    //     .get("http://www.liulongbin.top:3005/api/getlunbo")
    //     .then(result => {
    //       if (result.body.status === 0) {
    //         this.lunbotuList = result.body.message;
    //         Toast("加载数据成功");
    //       } else {
    //         Toast("获取数据失败");
    //       }
    //     });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.mui-active:hover {
  text-decoration: none;
}
.mint-swipe {
  height: 76vw;

  .mint-swipe-item {
    /* &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: red;
    } */
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  margin-top: 1vw;
  background-color: white;
  border: 0;
  img {
    width: 10vw;
    height: 10vw;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 0;
  border-bottom: 0;
}

#oneLine {
  list-style: none;
  display: flex;
  margin-top: 0vw;
  margin-bottom: 1vw;
  height: 31vw;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  background-color: #fafafa;

  div {
    text-align: center;
  }
  li {
    text-align: center;
    color: white;
  }
  .mui-media-body {
    color: black;
    font-weight: bold;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    font-size: 3.7vw;
  }
}

img {
  align-items: center;
  width: 50%;
  height: 50%;
}

.container {
  position: absolute;
  margin-top: -19vw;
  width: 95%;
  padding-left: 6vw;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 7vw;
    height: 7vw;
    padding-top: 1vw;
  }
}
.sousuo {
  background-color: white;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  font-weight: 700;
}
.search {
  background-image: "";
  position: absolute;
  width: 50px;
  height: 50px;
  top: 4px;
  left: 100px;
  z-index: 99;
}

.firstLine {
  text-align: start;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  text-align: start;
  font-size: 3.5vw;
  line-height: 7vw;
  height: 7vw;
  margin-top: 1.2vw;
}

.secondLine {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 4vw;
    color: red;
    margin-top: 1vw;
  }
  img {
    height: 5vw;
    width: 5vw;
  }
}

#secondPanel {
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 6vw;
  font-weight: 700;
  color: orange;
  font-size: 5.2vw;
  padding-top: 0.7vw;
  margin-top: 3vw;
  font-size: 5vw;
  a {
    color: orange;
  }
}

.antiColapes {
  width: 50vw;
  height: 50vw;
}
</style>