"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        nickname: "默认用户",
        phone: "138****8888",
        avatar: "https://placehold.co/128x128/3498DB/FFFFFF&text=头像"
      }
    };
  },
  onShow() {
  },
  methods: {
    handleLogout() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确定要退出登录吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.reLaunch({
              url: "/pages/login/login"
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_icons2 + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userInfo.avatar,
    b: common_vendor.t($data.userInfo.nickname),
    c: common_vendor.t($data.userInfo.phone),
    d: common_vendor.p({
      type: "arrow-right",
      size: "22",
      color: "#999"
    }),
    e: common_vendor.p({
      title: "我的合同",
      showArrow: true,
      link: true,
      leftIcon: "orders"
    }),
    f: common_vendor.p({
      title: "我的收藏",
      showArrow: true,
      link: true,
      leftIcon: "star"
    }),
    g: common_vendor.p({
      title: "实名认证",
      showArrow: true,
      link: true,
      leftIcon: "auth",
      rightText: "未认证"
    }),
    h: common_vendor.p({
      title: "联系客服",
      showArrow: true,
      link: true,
      leftIcon: "service"
    }),
    i: common_vendor.p({
      title: "设置",
      showArrow: true,
      link: true,
      leftIcon: "settings"
    }),
    j: common_vendor.o((...args) => $options.handleLogout && $options.handleLogout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
