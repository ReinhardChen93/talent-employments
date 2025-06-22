"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messageList: []
    };
  },
  onLoad() {
    this.fetchMessages();
  },
  methods: {
    // 获取消息列表
    fetchMessages() {
      this.messageList = [
        { id: 1, from: "系统通知", content: "您有一份新合同待签署。", time: "昨天", avatar: "https://placehold.co/80x80/2ECC71/FFFFFF&text=SYS" },
        { id: 2, from: "张师傅", content: "明天可以开工吗？", time: "14:35", avatar: "https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像" },
        { id: 3, from: "客服小美", content: "您好，有什么可以帮您？", time: "10:12", avatar: "https://placehold.co/80x80/3498DB/FFFFFF&text=客服" }
      ];
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.messageList, (msg, k0, i0) => {
      return {
        a: msg.avatar,
        b: msg.id,
        c: "e1510560-1-" + i0 + ",e1510560-0",
        d: common_vendor.p({
          title: msg.from,
          rightText: msg.time,
          note: msg.content,
          link: true,
          center: true
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/messages/messages.js.map
