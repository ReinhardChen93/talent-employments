"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      featuredJobs: [
        {
          id: 1,
          logo: "https://logo.clearbit.com/google.com",
          title: "Product Designer",
          company: "Google",
          tags: ["Design", "Full-Time", "Junior"],
          salary: "$160,000/year",
          location: "California, USA"
        },
        {
          id: 2,
          logo: "https://logo.clearbit.com/apple.com",
          title: "iOS Developer",
          company: "Apple",
          tags: ["Mobile", "Full-Time"],
          salary: "$150,000/year",
          location: "Cupertino, USA"
        }
      ],
      recommendedJobs: [
        {
          id: 3,
          logo: "https://logo.clearbit.com/dribbble.com",
          title: "UX Designer",
          company: "Dribbble",
          salary: "$80,000/y"
        },
        {
          id: 4,
          logo: "https://logo.clearbit.com/facebook.com",
          title: "Sr Engineer",
          company: "Facebook",
          salary: "$96,000/y"
        }
      ]
    };
  },
  methods: {
    goToMarket() {
      common_vendor.index.navigateTo({ url: "/pages/market/market" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.goToMarket && $options.goToMarket(...args)),
    c: common_vendor.f($data.featuredJobs, (job, k0, i0) => {
      return {
        a: job.logo,
        b: common_vendor.t(job.title),
        c: common_vendor.t(job.company),
        d: common_vendor.f(job.tags, (tag, k1, i1) => {
          return {
            a: common_vendor.t(tag),
            b: tag
          };
        }),
        e: common_vendor.t(job.salary),
        f: common_vendor.t(job.location),
        g: job.id
      };
    }),
    d: common_vendor.o((...args) => $options.goToMarket && $options.goToMarket(...args)),
    e: common_vendor.f($data.recommendedJobs, (job, k0, i0) => {
      return {
        a: job.logo,
        b: common_vendor.t(job.title),
        c: common_vendor.t(job.company),
        d: common_vendor.t(job.salary),
        e: job.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
