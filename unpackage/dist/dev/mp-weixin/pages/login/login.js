"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    // 手机号密码登录
    async handleLogin() {
      if (!this.phone || !this.password) {
        common_vendor.index.showToast({ title: "手机号和密码不能为空", icon: "none" });
        return;
      }
      common_vendor.index.showLoading({ title: "登录中..." });
      try {
        common_vendor.index.__f__("log", "at pages/login/login.vue:66", "Phone login attempt:", this.phone);
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({ title: "登录成功", icon: "success" });
          common_vendor.index.reLaunch({ url: "/pages/index/index" });
        }, 1e3);
      } catch (error) {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "登录失败，请重试", icon: "none" });
        common_vendor.index.__f__("error", "at pages/login/login.vue:78", "Phone login failed:", error);
      }
    },
    // 微信一键登录
    async handleWechatLogin(e) {
      if (e.detail.errMsg !== "getPhoneNumber:ok") {
        common_vendor.index.showToast({ title: "授权失败", icon: "none" });
        return;
      }
      common_vendor.index.showLoading({ title: "微信登录中..." });
      try {
        const loginRes = await common_vendor.index.login({ provider: "weixin" });
        if (!loginRes.code) {
          common_vendor.index.showToast({ title: "获取登录凭证失败", icon: "none" });
          common_vendor.index.hideLoading();
          return;
        }
        const code = loginRes.code;
        const wechatLoginData = {
          code,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        };
        common_vendor.index.__f__("log", "at pages/login/login.vue:109", "Sending to backend:", wechatLoginData);
        setTimeout(() => {
          common_vendor.index.hideLoading();
          common_vendor.index.showToast({ title: "登录成功", icon: "success" });
          common_vendor.index.reLaunch({ url: "/pages/index/index" });
        }, 1e3);
      } catch (error) {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({ title: "微信登录失败", icon: "none" });
        common_vendor.index.__f__("error", "at pages/login/login.vue:126", "WeChat login failed:", error);
      }
    },
    // 跳转注册
    goToRegister() {
      common_vendor.index.showToast({ title: "注册功能开发中...", icon: "none" });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o(($event) => $data.phone = $event),
    c: common_vendor.p({
      placeholder: "请输入手机号",
      clearable: true,
      modelValue: $data.phone
    }),
    d: common_vendor.p({
      label: "手机号",
      required: true
    }),
    e: common_vendor.o(($event) => $data.password = $event),
    f: common_vendor.p({
      type: "password",
      placeholder: "请输入密码",
      clearable: true,
      modelValue: $data.password
    }),
    g: common_vendor.p({
      label: "密码",
      required: true
    }),
    h: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args)),
    i: common_vendor.o((...args) => $options.handleWechatLogin && $options.handleWechatLogin(...args)),
    j: common_vendor.o((...args) => $options.goToRegister && $options.goToRegister(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
