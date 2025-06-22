<template name="my.vue">
  <view class="my-container">
    <!-- 用户信息 -->
    <view class="user-info-card">
      <image style="border-radius: 50%;" width="64px" height="64px" :src="userInfo.avatar"/>
      <view class="info-text">
        <view class="nickname">{{ userInfo.nickname }}</view>
        <view class="phone">{{ userInfo.phone }}</view>
      </view>
      <uni-icons type="arrow-right" class="arrow-icon" size="22" color="#999" />
    </view>

    <!-- 菜单列表 -->
    <uni-list>
      <uni-list-item title="我的合同" showArrow link leftIcon="orders" />
      <uni-list-item title="我的收藏" showArrow link leftIcon="star" />
      <uni-list-item title="实名认证" showArrow link leftIcon="auth" rightText="未认证" />
    </uni-list>

    <uni-list style="margin-top: 10px;">
      <uni-list-item title="联系客服" showArrow link leftIcon="service" />
      <uni-list-item title="设置" showArrow link leftIcon="settings" />
    </uni-list>
    
    <view class="logout-btn-wrapper">
       <button type="warn" style="width:100%;border-radius:100px;" @click="handleLogout">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        nickname: '默认用户',
        phone: '138****8888',
        avatar: 'https://placehold.co/128x128/3498DB/FFFFFF&text=头像'
      }
    };
  },
  onShow() {
    // 每次进入页面，尝试从缓存获取用户信息
    // const user = uni.getStorageSync('userInfo');
    // if (user) {
    //   this.userInfo = user;
    // }
  },
  methods: {
    handleLogout() {
      uni.showModal({
        title: '提示',
        content: '确定要退出登录吗？',
        success: (res) => {
          if (res.confirm) {
            // uni.clearStorageSync();
            uni.reLaunch({
              url: '/pages/login/login'
            });
          }
        }
      });
    }
  }
};
</script>

<style>
.my-container {
  background-color: #f7f8fa;
  min-height: 100vh;
}
.user-info-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  margin: 15px;
  border-radius: 8px;
}
.info-text {
  flex: 1;
  margin-left: 15px;
}
.nickname {
  font-size: 18px;
  font-weight: bold;
}
.phone {
  font-size: 14px;
  color: #999;
  margin-top: 5px;
}
.arrow-icon {
  color: #999;
}
.logout-btn-wrapper {
    margin: 30px 15px;
}
</style>