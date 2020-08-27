<template>
  <div class="search_page">
    <div class="search_section">
      <div class="search_search">
        <div class="search_img">
          <img src="../../assets/img/search.png" />
        </div>
        <div class="search_input">
          <input type="search" placeholder="搜索" />
        </div>
      </div>
      <div class="cancel" @click="cancel">取消</div>
    </div>
    <!-- 搜索指定的内容的部分 -->
    <div class="specify_search">
      <div class="content">搜索指定内容</div>
      <ul>
        <li>朋友圈</li>
        <li>文章</li>
        <li>公众号</li>
      </ul>
      <ul>
        <li>小程序</li>
        <li>音乐</li>
        <li>表情</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
     cancel(){
        window.history.back()
     }
  }
};
</script>
<style scoped>
.search_page {
  width: 100%;
}
.search_section {
  width: 90%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.search_search {
  display: flex;
  align-items: center;
  width: 90%;
}
.search_img {
  margin-right: 10px;
}
.search_input input {
  outline: 0;
  border: 0;
}
.cancel {
  width: 10%;
}
/* 面板区域 */
.content {
  text-align: center;
  color: #bcbcbc;
  margin-bottom: 15px;
}
ul {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
li {
  flex: 2;
  text-align: center;
  margin-bottom: 16px;
  color: blue;
}
</style>
