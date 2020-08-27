<template>
  <div>
    <!-- 顶部开始 -->
    <mt-header title="发现" fixed>
      <div slot="left">
        <mt-button icon="back"></mt-button>
      </div>
      <div slot="right">
        <router-link to="/search">
          <mt-button>
            <img src="../assets/img/search.png" />
          </mt-button>
        </router-link>
        <router-link to="/">
          <mt-button>
            <img src="../assets/img/join.png" />
          </mt-button>
        </router-link>
      </div>
    </mt-header>

    <!-- 面板区域开始 -->
    <div class="list_section">
      <div class="list" @click="list">
        <div class="list_1">
          <img src="../assets/img/friends.png" alt />
        </div>
        <div class="list_2">朋友圈</div>
      </div>

      <div class="list">
        <div class="list_1">
          <img src="../assets/img/scan.png" alt />
        </div>
        <div class="list_2">扫一扫</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/shake_it.png" alt />
        </div>
        <div class="list_2">摇一摇</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/friends.png" alt />
        </div>
        <div class="list_2">看一看</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/friends.png" alt />
        </div>
        <div class="list_2">附近的人</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/shopping.png" alt />
        </div>
        <div class="list_2">购物</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/game.png" alt />
        </div>
        <div class="list_2">游戏</div>
      </div>
      <div class="list">
        <div class="list_1">
          <img src="../assets/img/friends.png" alt />
        </div>
        <div class="list_2">小程序</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    list() {
      this.$router.push("/friend");
    },
  },
};
</script>
<style scoped>
/* 页面顶部 */
a:nth-of-type(1) {
  margin-right: 15px;
}
.mint-header {
  background: #e2e2e3;
  color: #000;
}
/* list_section */
.list_section {
  background: #e2e2e3;
  margin: 40px 0 55px 0;
}
.list {
  height: 50px;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 6px;
}
.list_1 {
  position: absolute;
  top: 15px;
  left: 10px;
}
.list_2 {
  position: absolute;
  top: 15px;
  left: 40px;
}
a {
  text-decoration: none;
  color: #000;
}
</style>