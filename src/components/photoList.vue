<template>
  <div class="hello">
   			<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>

    
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// import mui from '../lib/MUI/js/mui.min.js';

// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });
export default {
  name: "photoList",
  data() {
    return {
      

    };
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
 
    // getLunbotu() {
    // //   this.$http
    // //     .get("http://www.liulongbin.top:3005/api/getlunbo")
    // //     .then(result => {
    // //       if (result.body.status === 0) {
    // //         this.lunbotuList = result.body.message;
    // //         Toast("加载数据成功");
    // //       } else {
    // //         Toast("获取数据失败");
    // //       }
    // //     });
    //  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang= "scss" scoped>





</style>