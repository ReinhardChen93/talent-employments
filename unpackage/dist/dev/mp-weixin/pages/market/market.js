"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeTab: 0,
      talentList: []
    };
  },
  onLoad() {
    this.fetchTalentList();
  },
  methods: {
    onTabChange(event) {
      this.activeTab = event.detail.index;
      this.fetchTalentList();
    },
    // 获取人才列表
    async fetchTalentList() {
      common_vendor.index.showLoading({ title: "加载中..." });
      setTimeout(() => {
        this.talentList = [
          { id: 1, name: "张师傅", rate: "500", description: "10年电工经验，持证上岗", avatar: "https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像", skills: ["强电", "弱电"] },
          { id: 2, name: "李师傅", rate: "550", description: "精通各种焊接技术，效率高", avatar: "https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像", skills: ["氩弧焊", "气割"] },
          { id: 3, name: "王木匠", rate: "600", description: "家具定制，经验丰富", avatar: "https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像", skills: ["家具", "装修"] },
          { id: 4, name: "赵司机", rate: "450", description: "A1驾照，安全第一", avatar: "https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像", skills: ["货运", "长途"] }
        ];
        common_vendor.index.hideLoading();
      }, 500);
    },
    viewTalentDetail(id) {
      common_vendor.index.showToast({ title: `查看ID为 ${id} 的人才详情`, icon: "none" });
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_segmented_control2 + _easycom_uni_tag2 + _easycom_uni_card2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_tag + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onTabChange),
    b: common_vendor.p({
      current: $data.activeTab,
      values: ["综合排序", "最新发布", "价格最高"]
    }),
    c: common_vendor.f($data.talentList, (p, k0, i0) => {
      return {
        a: common_vendor.f(p.skills, (skill, k1, i1) => {
          return {
            a: skill,
            b: "5c491890-2-" + i0 + "-" + i1 + "," + ("5c491890-1-" + i0)
          };
        }),
        b: p.id,
        c: common_vendor.o(($event) => $options.viewTalentDetail(p.id), p.id),
        d: "5c491890-1-" + i0,
        e: common_vendor.p({
          title: p.name,
          ["sub-title"]: p.description,
          extra: p.rate + "/天",
          thumbnail: p.avatar
        })
      };
    }),
    d: common_vendor.p({
      text: "{{ skill }}",
      type: "error",
      inverted: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/market/market.js.map
