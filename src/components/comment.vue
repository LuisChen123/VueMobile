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

    <div>
      <ul id="oneLine">
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/ms.jpg" alt>
            <div class="mui-media-body">美食快拍</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/cy.jpg" alt>
            <div class="mui-media-body">厨艺交流</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/mmp.jpg" alt>
            <div class="mui-media-body">妈妈派</div>
          </router-link>
        </li>
        <li>
          <router-link to="/logIn">
            <img src="../assets/pic/ys.jpg" alt>
            <div class="mui-media-body">饮食健康</div>
          </router-link>
        </li>
      </ul>
    </div>

  <div id="titel">
    <h1 id="titleFont">功效</h1>
  </div>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/comment/newsList' + item.id">
          <img class="mui-media-object mui-pull-left" src="../assets/pic/p.png">
          <div class="mui-media-body">
            <p class="Large">{{ item.title }}</p>
            <p class="mui-ellipsis">吐血推荐五中种让你喝吐血的果汁</p>
            <div class="dataAndzan">
              <p>{{ item.add_time | dataFormat('YYYY-MM-DD')}}</p>
              <div class="dataAndzan">
                <img class="dianzan" src="../assets/pic/icon2.jpg">
                <p>点赞: {{item.click}} </p>
              </div>
            </div>
          </div>
        </router-link>
      </li>
  
 
 

   
 

    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "comment",
  data() {
    return {
      newslist:[]
    };
  },
  created() {
    // this.getLunbotu();
    this.getNewsList();
    
    
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
 


    getNewsList() {
      this.$http.get('api/getnewslist').then(result=> {
        if(result.body.status === 0){
          
          this.newslist = result.body.message

        }else{
          Toast('获取列表失败，请检查网络连接配置')
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss"scoped>
.mint-swipe {
  height: 40vw;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}

#oneLine {
  list-style: none;
  display: flex;
  height: 31vw;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  background-color: #fafafa;
  img {
    align-items: center;
    width: 54%;
    height: 69%;
    margin-top: 2vw;
  }
  div {
    text-align: center;
  }
  li {
    text-align: center;
  }
}

#titel{
  height: 12vw;
    width: 100%;
    #titleFont{
    font-size: 4.5vw;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    padding-top: 4.2vw;
    padding-left: 2vw;
    color: #66667e;
    }
}

.mui-media-body {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  font-size: 3.9vw;
  margin-top: 1.5vw;
  color: #66667e;
}
.mui-table-view .mui-media-object {
  height: 19vw;
  width: 20vw;
  max-width: 20vw;
}
.Large {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  font-size: large;
  font-weight: 500;
  color: black;
  margin-bottom: 2vw;
}

.mui-ellipsis {
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  font-size: 3.5vw;
  color: black;
  margin-bottom: 3vw;
}

.dataAndzan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .dianzan {
    height: 5vw;
    width: 5vw;
    align-items: center;
  }
}
</style>