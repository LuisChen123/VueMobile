<template>
  <div class="goods-list">
   <div class="goods-item">
     <img src="../assets/pic/detail.png" alt="">
     <h1 class="title">小米手机Note16 青春版</h1>
     <div class="info">
       <p class="price">
         <span class="new">￥2199</span>
         <span class="old">￥1999</span>
       </p>
       <p class="sell">
         <span>热卖中</span>
         <span>剩60件</span>
       </p>
     </div>
   </div>
   <div class="goods-item">
     <img src="../assets/pic/detail.png" alt="">
     <h1 class="title">小米手机Note16 青春版</h1>
     <div class="info">
       <p class="price">
         <span class="new">￥2199</span>
         <span class="old">￥1999</span>
       </p>
       <p class="sell">
         <span>热卖中</span>
         <span>剩60件</span>
       </p>
     </div>
   </div>
   <div class="goods-item">
     <img src="../assets/pic/detail.png" alt="">
     <h1 class="title">小米手机Note16 青春版</h1>
     <div class="info">
       <p class="price">
         <span class="new">￥2199</span>
         <span class="old">￥1999</span>
       </p>
       <p class="sell">
         <span>热卖中</span>
         <span>剩60件</span>
       </p>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "placeOrder",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 2.5vw;
  justify-content: space-between;
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 0.5vw;
    margin: 1.25vw 0;
    padding: 0.5vw;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    min-height: 295px;
    
    img{
      width: 100%;
    }
    .title{
      font-size: 4.7vw;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 1vw;
      }
      .price{
        margin: 0;
        .new{
          color: red;
          font-weight: bold;
          font-size: 5vw;

        }
        .old{
          text-decoration: line-through;
          font-size: 3vw;
          margin-left: 2vw;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size:3vw;
      }
    }
  }
}
</style>