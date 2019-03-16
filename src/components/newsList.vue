<template>
  <div class="newsinfo-container">
    <h1 class="title">{{ newsinfo.title }}</h1>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat}}</span>
      <span>点击次数：{{ newsinfo.click }}</span>
    </p>
    <hr id="aLine">
    <div class="content" v-html="newsinfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import subcomment from './chirdren/subcomment.vue'
export default {
  name: "newList",
  data() {
    return {
      id: this.$route.params.id, //将URL地址中传递过来的ID值，挂载到id中,方便以后调用
      newsinfo:{}
    };
  },
  created() {
    this.getNewsInfo()

  },
  methods: {
    getNewsInfo(){
      this.$http.get('api/getnew/' +  this.id).then(
        result =>{
          if(result.body.status === 0){
            console.log(this.id)
            this.newsinfo = result.body.message[0];
          }
          else{
            Toast('新闻获取失败，请检查网络连接')
          }
        }
      )
    }    
  },
  components: {
    'comment-box':subcomment
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" >
.newsinfo-container {
  padding: 0 2px;

  .title {
    font-size: 6vw;
    text-align: center;
    margin: 10vw 0;
    color: red;
  }
  .subtitle {
    font-size: 3.5vw;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
 #aLine{
       height: 0.5vw;
    background-color: black;
    margin: 2vw 0vw;
 }
  .content {
  }
}
</style>