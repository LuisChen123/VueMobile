<template>
  <div id="app">
    <nav class="mui-bar mui-bar-tab" hover: text-decoration = "none">
      <router-link class="mui-tab-item" to="/order"  >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">点餐</span>
      </router-link>
      <router-link class="mui-tab-item" to="/comment">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">客说</span>
      </router-link>
      <router-link class="mui-tab-item" to="/us">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我们</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mysetting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      
    </nav>

     



    <!-- 上面是底部栏 -->
 
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app{
   /* overflow-x: hidden; */
  padding-bottom: 15vw; 
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
   
}

.v-enter{
  opacity:0;
  transform: translateX(100%);
  
}
.v-leave-to{
  opacity:0;
  transform: translateX(-100%);
  position: absolute;
  
}

.v-enter-active,
.v-leave-active{
  transition: all  0.3s ease;
}

.mui-tab-label{
  padding-top: 1.4vw;
    height: 4.5vw;
}
.mui-bar-tab{
  z-index: 100 0;
}



</style>
