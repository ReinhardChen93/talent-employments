<template name="market.vue">
  <view class="market-container">
    <uni-segmented-control :current="activeTab" :values="['综合排序','最新发布','价格最高']" @clickItem="onTabChange" />
    <view class="talent-list-full">
        <uni-card
          v-for="p in talentList"
          :key="p.id"
          :title="p.name"
          :sub-title="p.description"
          :extra="p.rate + '/天'"
          :thumbnail="p.avatar"
          @click="viewTalentDetail(p.id)"
        >
          <view slot="footer">
            <uni-tag v-for="skill in p.skills" :key="skill" text="{{ skill }}" type="error" inverted style="margin-right: 6px;" />
          </view>
        </uni-card>
    </view>
  </view>
</template>

<script>
export default {
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
      uni.showLoading({ title: '加载中...' });
      // TODO: 调用后端API，根据 activeTab 发送不同排序参数
      // const res = await getTalentList({ sort: this.activeTab });
      // this.talentList = res.data;
      
      // 模拟数据
      setTimeout(() => {
        this.talentList = [
            { id: 1, name: '张师傅', rate: '500', description: '10年电工经验，持证上岗', avatar: 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像', skills: ['强电', '弱电'] },
            { id: 2, name: '李师傅', rate: '550', description: '精通各种焊接技术，效率高', avatar: 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像', skills: ['氩弧焊', '气割'] },
            { id: 3, name: '王木匠', rate: '600', description: '家具定制，经验丰富', avatar: 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像', skills: ['家具', '装修'] },
            { id: 4, name: '赵司机', rate: '450', description: 'A1驾照，安全第一', avatar: 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像', skills: ['货运', '长途'] },
        ];
        uni.hideLoading();
      }, 500);
    },
    viewTalentDetail(id) {
        uni.showToast({ title: `查看ID为 ${id} 的人才详情`, icon: 'none' });
        // uni.navigateTo({ url: `/pages/talentDetail/talentDetail?id=${id}` });
    }
  }
};
</script>

<style>
.talent-list-full {
  padding-top: 10px;
}
</style>