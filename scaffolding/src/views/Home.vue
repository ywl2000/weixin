<template>
  <div>
    <!-- 顶部导航栏开始 -->
    <mt-header title="学前端">
      <div slot="right" class="zhu">
        <router-link to="/Field">注册</router-link>
        <router-link to="/">注册</router-link>
      </div>
    </mt-header>
    <!-- 顶部导航栏结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="d1">HTML</mt-tab-item>
      <mt-tab-item id="d2">css3</mt-tab-item>
      <mt-tab-item id="d3">javascript</mt-tab-item>
      <mt-tab-item id="d4">jquery</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="mian">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="d1">
          <p v-for="(v,k) of 50" :key="k">11--{{v}}</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="d2">
          <p>22</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="d3">
          <p>33</p>
        </mt-tab-container-item>
        <mt-tab-container-item id="d4">
          <p>44</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>  
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
    <!-- <div class="di">
        <mt-tabbar v-model="xuanzhong" fixed>
            <mt-tab-item id="d1">首页
                <img src="../assets/oa-t-housef.png" alt="" slot="icon" v-if="xuanzhong=='d1'">
                <img src="../assets/oa-t-house.png" alt="" slot="icon" v-else>
            </mt-tab-item>
            <mt-tab-item id="d2">购物车
                <img src="../assets/gouwuche.png" alt="" slot="icon" v-if="xuanzhong=='d2'">
                <img src="../assets/gouwuchef.png" alt="" slot="icon" v-else>
                </mt-tab-item>
            <mt-tab-item id="d3">个人中心
                <img src="../assets/oa-person.png" alt="" slot="icon" v-if="xuanzhong=='d3'">
                <img src="../assets/oa-personf.png" alt="" slot="icon" v-else>
            </mt-tab-item>
        </mt-tabbar>     
    </div> -->
    <!-- 底部选项卡结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:'1',
      xuanzhong:"d1"
    } 
  },
  watch:{
      xuanzhong(){
          switch(this.xuanzhong){
              case 'd1':
                  this.$router.push('/');
                  break;
              case 'd2':
                  this.$router.push('/List');
                  break;
              case 'd3':
                  this.$router.push('/tabbar')
          }
      }
  }
}
</script>

<style scoped>
  .zhu a{
    color:#fff;
    text-decoration: none;
    display: inline-block;
    margin-left: 10px                                                                                   
  }
  .mian{
    margin-top: 10px;
  }
  .di{
    margin-top: 55px;
  }
</style>