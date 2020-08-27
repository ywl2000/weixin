<template>
  <div id="app_information">
    <!-- 顶部开始 -->
    <div class="camera_section">
      <!-- 相机图片 camera-->
      <div class="camera" @click="ji()">
        <img src="../assets/img/camera.png" />
      </div>

      <div class="person_information" @click="information">
        <!-- 头像图片portrait -->
        <div class="portrait">
          <img :src="img" />
        </div>
        <div class="nick_name">
          <h3>马化腾</h3>
          <span style="font-size:12px;color:gray">微信号:{{this.$store.state.username}}</span>
        </div>
        <!-- 右 -->
        <div class="qrcode">
          <span ref="qrCodeDiv"></span>
          <div>
            <img src="../assets/img/youjiantou.png" />
          </div>
        </div>
      </div>

    </div>
    <!-- 顶部结束  -->
    <!-- 面板开始 -->
    <div class="function_list">
      <!-- 支付 -->
      <div class="list_eample" @click="money()">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/zhifu.png" />
          </div>
          <div class="list_text">支付</div>
        </div>
      </div>

      <div class="beijing"></div>

      <!-- 收藏 -->
      <div class="list_eample">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/shoucang.png" />
          </div>
          <div class="list_text">收藏</div>
        </div>
      </div>
      <!-- 相册 -->
      <div class="list_eample">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/xiangce.png" />
          </div>
          <div class="list_text">相册</div>
        </div>
      </div>
      <!--卡包 -->
      <div class="list_eample">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/qianbao.png" />
          </div>
          <div class="list_text">卡包</div>
        </div>
      </div>
      <!-- 表情 -->
      <div class="list_eample">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/biaoqing.png" />
          </div>
          <div class="list_text">表情</div>
        </div>
      </div>

      <div class="beijing"></div>

      <!-- 设置 -->
      <div class="list_eample">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/shezhi.png" />
          </div>
          <div class="list_text">设置</div>
        </div>
      </div>
      <!-- 退出 -->
      <div class="list_eample" @click="sign_out">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/zhifu.png" />
          </div>
          <div class="list_text">退出</div>
        </div>
      </div>
      <!-- 注销 -->
      <div class="list_eample" @click="sign_out">
        <div class="list_common">
          <div class="list_icon">
            <img src="../assets/img/zhifu.png" />
          </div>
          <div class="list_text">注销</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      img: require("../assets/img/" + this.$store.state.avatar),
    };
  },
  methods: {
    // 相机
    ji(){
      this.$messagebox('该功能暂不支持，请静心等待❤')
    },
    // 支付
    money(){
      this.$router.push("/pay")
    },

    sign_out() {
      // this.$store.commit("login_mutation",{isLogin:false});
      //  sessionStorage
      // localStorage.setItem('kk','wechat');
      this.$router.push("/");
    },
    information(){
      this.$router.push("/details")
    }

  },
  mounted() {
    // if (!this.$store.state) {
    //   this.$router.push("/");
    // }
    new QRCode(this.$refs.qrCodeDiv, {
      text: "http://www.baidu.com",
      width: 35,
      height: 35,
      colorDark: "#333333", //二维码颜色
      colorLight: "#ffffff", //二维码背景色
      correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
    });
  },
};
</script>
<style scoped>
/* 个人信息 */
#app_information .camera_section {
  width: 100%;
}
/* 相机图片 */
#app_information .camera {
  width: 90%;
  display: flex;
  margin: 0 auto;
  height: 36px;
  align-items: center;
  justify-content: flex-end;
}
#app_information .person_information {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
/* 头像图片 */
#app_information .portrait {
  width: 18%;
}
#app_information .portrait img {
  border-radius: 5px;
}
#app_information .nick_name {
  width: 57%;
}
#app_information .nick_name h3 {
  margin-bottom: 14px;
}
/*二维码部分 */
#app_information .qrcode {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* 列表部分支付 收藏 */
#app_information .function_list {
  margin-top: 10px;
}
#app_information .list_eample {
  width: 100%;
  border-bottom: 1px solid gainsboro;
}
#app_information .list_common {
  display: flex;
  width: 96%;
  margin: 0 auto;
  height: 50px;
  align-items: center;
}
#app_information .list_icon {
  width: 8%;
}
#app_information .list_text {
  width: 92%;
}


/* 背景 */
.beijing{
  height: 10px;
  width: 100%;
}
.list_eample{
  background-color: #EFEFF4;
}
 .camera_section{
    background-color: #EFEFF4;
    height: 100px;
 }
</style>