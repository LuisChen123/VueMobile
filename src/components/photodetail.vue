<template>
  <div class="photoinfo-container">
    <h1>{{ photoinfo.title }}</h1>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dataFormat}}</span>
      <span>点击次数：{{ photoinfo.click }}</span>
    </p>

    <hr>

    <div class="thumbs">
      <vue-preview
        :list="list"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
      />
    </div>

    <div class="content" v-html="photoinfo.content"></div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../components/chirdren/subcomment.vue";

export default {
  name: "photodetail",
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [
        {
          src: "https://placekitten.com/600/400",
          w: 600,
          h: 600
        },
        {
          src: "https://placekitten.com/1200/900",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getphotoInfo();
    this.getThumbs();
  },
  methods: {
    getphotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
          console.log(this.id)
        } else {
          Toast("图片传输出错，请检查设置");
        }
      });
    },
    closeHandler() {
      console.log("closeHandler");
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log("destroyHandler");
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.photoinfo-container {
  padding: 1vw;
  h1 {
    color: #26a2ff;
    font-size: 5vw;
    text-align: center;
    margin: 5vw 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 3vw;
  }

  .content {
    font-size: 3vw;
    line-height: 10vw;
  }
  .thumbs{
      img{
          margin: 2vw;
          box-shadow: 0 0 3vw #999;
      }

  }
}
</style>