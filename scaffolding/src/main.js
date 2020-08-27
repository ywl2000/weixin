import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import QRCode from "qrcodejs2";
import "./assets/css/index.scss";
Vue.prototype.QRCode;
import qs from "qs";
//导入mint Ui
import MintUI from "mint-ui";
//导入mint uI 的样式表文件
import "mint-ui/lib/style.min.css";
//通过Vue.use()方法注册为插件
import { TabContainer, TabContainerItem } from "mint-ui";
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

// vue报错vue-router.esm.js?8c4f:2007 Uncaught (in promise) NavigationDuplicated
// {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
import Router from "vue-router";
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};

Vue.use(MintUI);

axios.defaults.baseURL = "http://49.234.220.36:3000";
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
