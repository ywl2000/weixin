<template>
  <div>
    <!-- 顶部开始 -->
    <mt-header title="通讯录">
      <div slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <div slot="right">
        <router-link to>
          <mt-button>
            <img src="../assets/img/join_friend.png" alt slot="icon" />
          </mt-button>
        </router-link>
      </div>
    </mt-header>
    <!-- 头部搜索开始 -->
    <div class="search_section">
      <div class="search_box">
        <div class="search_icon">
          <img src="../assets/img/search.png" alt />
        </div>
        <div class="search_text">
          <span>搜索</span>
        </div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="main_content">
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/new_friend.png" alt />
        </div>
        <div class="list_2">新的朋友</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/group_chat.png" alt />
        </div>
        <div class="list_2">群聊</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/label.png" alt />
        </div>
        <div class="list_2">标签</div>
      </div>
      <div class="list" >
        <div class="list_1">
          <img src="../assets/img/official_account.png" alt />
        </div>
        <div class="list_2">公众号</div>
      </div>
      <div class="letter">A</div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/mayun.jpg" alt />
        </div>
        <div class="list_2">老马</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/mayun.jpg" alt />
        </div>
        <div class="list_2">老马</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
/* 顶部开始 */
.mint-header {
  background-color: #000;
}
/* 头部搜索 */
.search_section {
  height: 50px;
  width: 100%;
  background-color: #efeff4;
  display: flex;
  align-items: center;
}
.search_box {
  width: 90%;
  height: 32px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  justify-content: center;
}
.search_icon {
  margin-right: 10px;
}
.search_text {
  color: gray;
  font-size: 15px;
}
/* 页面中的主体内容 */
.main_content {
  width: 100%;
}
.list {
  height:50px;
  position:relative;
  border-bottom: 1px solid #e2e2e3;
}
.list_1 {
  position: absolute;
  left: 10px;
  top: 8px;
}
.list_2 {
  position: absolute;
  top: 17px;
  left: 50px;
}
/* 英语字母 */
.letter {
  height: 30px;
  background-color: #efeff4;
  line-height: 30px;
  text-indent: 10px;
}
</style>