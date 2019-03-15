<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">
            {{ item.title }}
            <h1 class="info-body">{{ item.zhaiyao }}</h1>
          </h1>
        </div>
      </li>
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
.hello {
  margin: 0 5vw;
  li {
    margin-bottom: 1vw;
    box-shadow: 0 0 2vw #999;
    position: relative;
    
    img {
      width: 100%;
      height: auto;
      
      vertical-align: middle;
    }
    img {
      [lazy="loading"] {
        width: 40px;
        height: 100px;
        margin: auto;
      }
    }
    .info {
      .info-title {
        color: white;
        text-align: left;
        font-size: 4vw;
        position: abosolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4)
      }
      .info-body {
        font-size: 2vw;
      }
    }
  }
}
</style>