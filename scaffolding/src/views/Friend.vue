<template>
  <div>
    <!-- 头部开始 -->
    <mt-header>
      <div slot="left">
        <router-link to="/discover">
          <mt-button icon="back"></mt-button>
        </router-link>
      </div>
      <div slot="right" @click="xiang()">
        <img src="../assets/img/camera.png" alt />
      </div>
    </mt-header>
    <!-- 头部结束 -->
    <!-- 轮播图开始 -->
    <div class="geng" @click="geng()">更换</div>
    <div class="geng1">
      马化腾
      <img src="../assets/img/unnamed.jpg" alt />
    </div>
    <div class="lun" v-if="ok">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/timg (1).jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/timg (2).jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/timg (3).jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/timg (4).jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="lun" v-else>
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/dog1.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/dog2.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/dog3.jpg" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="c1" src="../assets/pengyouquan/dog4.jpg" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <!-- 发表朋友圈开始 内容content-->
    <div class="content">
      <!-- 头像 -->
      <div class="content_img">
        <img src="../assets/img/mayun.jpg" alt="">
      </div>
      <div class="content_name">老马</div>
      <div class="content_name1">看图猜职业</div>
      <div class="content_img1">
        <img src="../assets/img/120.png" alt="">
      </div>
      <div class="content1">
        <!-- 点赞 -->
        <div @click="zan()" class="content_zan">
          <img src="../assets/img/thumbs-up.png" alt="">
        </div>
        <!-- 评论 -->
        <div v-show="show" class="content_ping">{{n}}</div>
      </div>
    </div>
    <!-- 发表朋友圈结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 轮播图
      ok: true,
      //评论
      show: false,
      n: "❤马化腾",
    };
  },
  methods: {
    zan() {
      // 如果是false点击变为true
      if (this.show == false) {
        this.show = true;
        // 如果是true点击变为false
      } else if (this.show == true) {
        this.show = false;
      }
    },
    // 更换轮播图
    geng() {
      this.ok = !this.ok;
    },
    //
    xiang() {
      this.$messagebox("该功能暂不支持，请静心等待❤");
    },
  },
};
</script>
<style scoped>
/* 轮播图 */
.mint-swipe {
  width: 100%;
  height: 200px;
}
/* 设置每张图片的宽度 */
.c1 {
  width: 100%;
}
.geng {
  z-index: 8888;
  position: absolute;
  right: 0px;
  top: 45px;
}
.geng1 {
  position: absolute;
  top: 200px;
  right: 15px;
  z-index: 999;
}
/* 发表朋友圈开始 */
.content {
  width: 96%;
  height: 320px;
  margin: 0 auto;
  margin-top: 50px;
}
/* 头像 */
.content_img > img {
  border-radius: 10px;
}
.content_img,
.content_name,
.content_name1 {
  float: left;
}
.content_name {
  padding: 5px 10px;
  color: rgb(75, 113, 219);
}
.content_name1 {
  font-size: 13px;
  margin-left: -43px;
  margin-top: 27px;
}
.content_img1 > img {
  display: block;
  clear: both;
  margin: 47px 44px;
}
.content1 {
  width: 92%;
  height: 40px;
  margin: 0 auto;
}
/* 评论 */
.content_ping {
  width: 100%;
  height: 20px;
  clear: both;
  margin: 0 auto;
  background-color: #dbe4f3;
}
/* 点赞 */
.content_zan {
  float: right;
  width: 15px;
  height: 15px;
}
</style>