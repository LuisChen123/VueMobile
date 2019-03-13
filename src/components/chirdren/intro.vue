<template>
  <div class="hello">
    <h1>
      妈妈厨房是一家24小时经营以港式粤菜为基础的中西融合菜，
      特聘香港融合菜大师主理，打造新派主题时尚餐厅。它专业的厨师团队，
      开发和研究新派融合菜，定期推出特色菜品，聘请专业艺术团队研发造型，
      让茉莉每一款菜品成为一件艺术品，让客人感受别样的饮食文化。
    </h1>
    <baidu-map class="map"></baidu-map>
  </div>
</template>

<script>
export default {
  name: "intro",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.hello {
  h1 {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    font-size: 4vw;
    letter-spacing: 1px;
    line-height: 6vw;
    font-weight: 500;
  }
}

/* 
 */

.map {
  width: 93vw;
  height: 70vw;
  display: flex;
  justify-content: center;
  margin-top: 5vw;
}
</style>