<template>
  <div class="hello">
    <ul class="photoList">
      <router-link v-for="item in list" :key="item.id" :to ="'/order/photolist/photodetail' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">
            {{ item.title }}
            <h1 class="info-body">{{ item.zhaiyao }}</h1>
          </h1>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "photoList",
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getPhotoListByCateId(0);
  },
  methods: {
    getPhotoListByCateId(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
* {
  touch-action: pan-y;
}
.photoList {
  list-style: none;
  margin: 0;
  padding: 4vw;
  padding-bottom: 0;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 3vw;
    box-shadow: 0 0 2vw #999;
    position: relative;
    img{
      width: 100%;
      vertical-align: middle;

    }
    img {
      [lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
    }
    .info{
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      max-height: 25vw;
      
      .info-title{
        font-size: 4vw;
        line-height: 10vw;
      }
      .info-body{
        font-size: 3vw;
        line-height: 4vw;
      }
    }
  }
}
</style>