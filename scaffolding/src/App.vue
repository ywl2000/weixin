<template>
  <div id="app">
    <router-view />
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab"  v-if="$route.meta.showTab" fixed>
      <mt-tab-item id="home">
        微信
        <img src="./assets/information_enable.png" slot="icon" v-if="selectedTab == 'home'" />
        <img src="./assets/information_disable.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="cart">
        通讯录
        <img src="./assets/mail_enable.png" slot="icon" v-if="selectedTab == 'cart'" />
        <img src="./assets/mail_disable.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="center">
        发现
        <img src="./assets/find_enable.png" slot="icon" v-if="selectedTab == 'center'" />
        <img src="./assets/find_disable.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="information">
        我
        <img src="./assets/me_enable.png" slot="icon" v-if="selectedTab == 'information'" />
        <img src="./assets/me_disable.png" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //默认被选定的底部选项卡
      selectedTab:localStorage.getItem("home")
        ? localStorage.getItem("home")
        : "home"
    };
  },
  watch: {
    //监听底部选项卡的变化
    selectedTab(e) {
      localStorage.setItem("home",e);
      switch (e) {
        case "home":
          this.$router.push("/wechat");
          break;
        case "cart":
          this.$router.push("/address");
          break;
        case "center":
          this.$router.push("/discover");
          break;
        case "information":
          this.$router.push("/me");
          break;
      }
    },
  },
  mounted() {
  //  this.isLogin=this.$store.state.isLogin/
  }
};
</script>