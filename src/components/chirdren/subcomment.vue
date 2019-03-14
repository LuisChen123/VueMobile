<template>
  <div class="outer-container">
    <h1>发表评论</h1>
    <hr>
    <textarea placeholder="请输入要差评的内容，虽然我们并不在乎，请保持120字以内" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat}}
          <div class="cmt-body">{{ item.content === "'undefined' ? '此用户很懒，什么都没说'" }}</div>
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "subcomment",
  data() {
    return {
      pageIndex: 1, //默认展示第一页数据
      comments: [],
      msg: ""
    };
  },
  created() {
    //记得加上this  否则不会生效
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            console.log("这是getcomments" + result);
            // this.comments = result.body.message;
            this.comments = this.comments.concat(result.body.message); //加载更多评论，而且不覆盖上一页的评论
          } else {
            Toast("获取评论失败，请检查网络配置");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim() === 0) {
        return Toast("评论不能为空");
      }

      this.$http
        .post("api/postcomment/:" + this.id, { content: this.msg.trim() })
        .then(function(result) {
          var cmt = {
            user_name: "匿名用户",
            add_time: Date.now(),
            content: this.msg.trim()
          };
          this.comments.unshift(cmt);
          this.msg = "";
        })
        
    }
  },
  props: ["id"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.outer-container {
  h1 {
    font-size: 6vw;
    margin-top: 4vw;
  }
  hr {
    height: 0.5vw;
    background-color: black;
    margin: 2vw 0vw;
  }
  textarea {
    height: 17vw;
    font-size: 3vw;
    border: 1px solid gray;
  }
  .cmt-list {
    margin: 3vw 0;
  }
  .cmt-title {
    background-color: #ccc;
    font-size: 2vw;
    line-height: 5vw;
    .cmt-body {
      line-height: 5vw;
      font-size: 4vw;
      background-color: white;
      text-indent: 2em;
    }
  }
}
</style>