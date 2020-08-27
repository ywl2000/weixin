<template>
  <div>
    <!-- 顶部开始 -->
    <mt-header title="微信" fixed>
      <div slot="right">
        <router-link to="/search">
          <mt-button>
            <img src="../assets/img/search.png" slot="icon" />
          </mt-button>
        </router-link>
        <router-link to>
          <mt-button>
            <img src="../assets/img/join.png" slot="icon" />
          </mt-button>
        </router-link>
      </div>
    </mt-header>
    <!-- 消息部分 -->
    <div class="message">
      <div class="message_content" v-for="(v,k) of 5" :key="k" @click="information">
        <div class="list_content">
          <div class="list_img">
            <img src="../assets/img/126.jpg" />
          </div>
          <div class="text_conit">
            <h3 class="nickName">塞班</h3>
            <span class="text_conent">小短腿</span>
          </div>
          <div class="time">18:56</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
   information(){
     this.$router.push('/wveuie')
   }
  }
};
</script>

<style scoped>
/* 导航顶部*/
a:nth-of-type(1) {
  margin-right: 15px;
}
.mint-header {
  background-color: #000;
}
/* 消息部分 */
.message {
  margin: 45px 0 55px 0;
}
.message_content {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e2e2e3;
  margin: 8px 0 2px 0;
}
.list_content {
  display: flex;
  width: 96%;
  margin: 0 auto;
}
.list_img {
  flex: 0.8;
}
.text_conit {
  flex: 4.6;
}
/*昵称 */
.nickName {
  font-size: 16px;
  margin-bottom: 6px;
}
/* 聊天提示内容 */
.text_conent {
  font-size: 8px;
  color: gray;
}
/* 时间 */
.time {
  flex: 0.6;
  font-size: 8px;
  color: gray;
}

</style>