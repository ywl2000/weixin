<template>
  <div>
    <h3 id="font">登录</h3>
    <div id="d1">
      <mt-field
        type="text"
        label="账号"
        :state="successname"
        placeholder="请输入您的账号"
        v-model="username"
        @blur.native.capture="names"
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        :state="successpassword"
        placeholder="请输入密码"
        v-model="password"
        @blur.native.capture="passwords"
      ></mt-field>
      <div class="forget_section">
        <router-link to class="forget_password">忘记密码</router-link>
        <router-link to="/register" class="null_bank">还没账号</router-link>
      </div>
      <mt-button type="primary" size="large" @click="handel">快速登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //保存用户账号
      username: "",
      //保存用户密码
      password: "",
      //保存用户账号的状态
      successname: "",
      //保存密码的状态
      successpassword: "",
    };
  },
  methods: {
    //检测用户输入的账号
    names() {
      let username = this.username;
      //正则
      let namez = /^[0-9A-Za-z_]{6,12}$/;
      if (namez.test(username)) {
        this.successname = "success";
        return true;
      } else {
        this.successname = "error";
        this.$toast({
          message: "请输入合法账号",
          position: "top",
          duration: 2000,
        });
        return false;
      }
    },
    //检测密码
    passwords() {
      let password = this.password;
      //正则
      let passwordz = /^[0-9A-Za-z_]{8,20}$/;
      if (passwordz.test(password)) {
        this.successpassword = "success";
        return true;
      } else {
        this.successpassword = "error";
        this.$toast({
          message: "请输入合法密码",
          position: "top",
          duration: 2000,
        });
        return false;
      }
    },
    //验证手机号和密码
    handel() {
      if (this.names() && this.passwords()) {
        this.axios
          .post(
            "/login",
            "username=" + this.username + "&password=" + this.password
          )
          .then((res) => {
            if (res.data.code == 1) {
              console.log(res.data.results);
              //调用Vuex中Mutations来修改state中的状态
              this.$store.commit("login_mutation", res.data.results);
              //将用户登录的状态存储到WebStorage中
              //之所以要将用户登录的状态存储到webStorage中的
              //原因是：为防止用户刷新页面中,整个页面重新加载
              sessionStorage.setItem("isLogin", true);
              sessionStorage.setItem("userId", res.data.results.id);
              sessionStorage.setItem("username", res.data.results.username);
              sessionStorage.setItem("avatar", res.data.results.avatar);
              this.$router.push("/wechat");
          
            } else {
              this.$messagebox("登陆提示", "对不起,用户不存在");
            }
          });
      }
    },
  },
};
</script>
<style>
/* //全局样式 */
body {
  background-color: #fff0 !important;
}
.mint-cell-text {
  vertical-align: top !important;
}
</style>
<style scoped>
/* 登陆标题 */
#font {
  font-size: 25px;
  color: #000;
  margin-top: 100px;
  text-indent: 20px;
}
/*输入账号和密码部分 */
#d1 {
  margin-top: 60px;
}
/* 忘记密码 还没有账号 */
.forget_section {
  width: 95%;
  font-size: 4.4px;
  margin: 13px auto;
  display: flex;
  justify-content: space-between;
}
.forget_section a {
  text-decoration: none;
  color: #000;
}
.null_bank {
  color: #26a2ff !important;
}
/* 快速登陆reset.css的类 */
.mint-button--large {
  margin: 60px auto;
  width: 90%;
}
</style>