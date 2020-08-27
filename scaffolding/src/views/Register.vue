<template>
  <div>
    <h3 id="font">注册</h3>
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
      <mt-field
        type="password"
        label="确认密码"
        :state="password2State"
        placeholder="请再次输入密码"
        :attr="{maxlength:'10',autocomplete:'off'}"
        v-model="password2"
        @blur.native.capture="checkConPassword"
      ></mt-field>
      <mt-button type="primary" size="large" @click="handel">快速注册</mt-button>
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
      //确认密码
      password2: "",
      //确认密码的状态
      password2State: "",
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
    //检测确认密码
    checkConPassword() {
      let password2 = this.password2;
      if (password2 == this.password && this.password !== "") {
        this.password2State = "success";
        return true;
      } else {
        this.password2State = "error";
        this.$toast({
          message: "两次密码不一致",
          position: "top",
          duration: 2000,
        });
        return false;
      }
    },
    //验证手机号和密码
    handel() {
      if (this.names() && this.passwords() && this.checkConPassword()) {
        this.axios
          .post(
            "/register",
            "username=" + this.username + "&password=" + this.password
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.code == 0) {
              this.$messagebox("注册提示", "对不起,用户已存在");
            } else {
              this.$router.push("/wechat");
            }
          });
      }
    },
  },
};
</script>
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
/* 快速注册reset.css的类 */
.mint-button--large {
  margin: 60px auto;
  width: 90%;
}
</style>