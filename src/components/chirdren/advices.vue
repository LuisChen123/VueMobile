<template>
  <div class="hello">
    <div class="mui-input-row">
      <input  class = "textinput" type="text" placeholder="姓名">
      <input class = "textinput" type="text" placeholder="电话">
      <textarea class = "textinput textarea" type="text"  placeholder="建议"></textarea>
      <!-- <mt-button calss = "largeButton" type="danger">danger</mt-button> -->
    </div>
    <div >
    <mt-button  class = "largeButton" type="danger">提交</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "advices",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.mui-input-row{
    font-size: large;
    font-weight: bold;
}
.textarea{
    height: 30vw;
    padding-left: 3.6vw;
    padding-top: 3vw;
}

.largeButton{
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    width: 100%;
    margin-top: 2vw
    
}
</style>