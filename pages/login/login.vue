<template name="login.vue">
  <view class="login-container">
    <view class="logo-wrapper">
      <image style="border-radius: 50%;" width="100px" height="100px" src="/static/logo.svg" />
      <view class="app-title">才人库劳务管理系统</view>
    </view>
    
    <!-- 手机号密码登录 -->
    <view class="form-wrapper">
      <uni-forms>
        <uni-forms-item label="手机号" required>
          <uni-easyinput v-model="phone" placeholder="请输入手机号" clearable />
        </uni-forms-item>
        <uni-forms-item label="密码" required>
          <uni-easyinput v-model="password" type="password" placeholder="请输入密码" clearable />
        </uni-forms-item>
      </uni-forms>
    </view>
    
    <view class="button-wrapper">
      <button type="primary" style="width: 100%; border-radius: 100px;" @click="handleLogin">手机号登录</button>
    </view>
    
    <!-- 分割线 -->
    <view class="divider">
        <text class="divider-text">或</text>
    </view>

    <!-- 微信一键登录 -->
    <view class="button-wrapper wechat-login-wrapper">
        <button 
            type="primary" 
            style="width: 100%; border-radius: 100px; background-color: #07c160; border: none;" 
            open-type="getPhoneNumber" 
            @getphonenumber="handleWechatLogin"
        >
            <text class="iconfont icon-wechat" style="margin-right: 8px;"></text>微信一键登录
        </button>
    </view>
    
    <view class="extra-links">
      <text class="link" @click="goToRegister">没有账号？立即注册</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: ''
    };
  },
  methods: {
    // 手机号密码登录
    async handleLogin() {
      if (!this.phone || !this.password) {
        uni.showToast({ title: '手机号和密码不能为空', icon: 'none' });
        return;
      }
      uni.showLoading({ title: '登录中...' });
      
      try {
        // TODO: 调用后端手机号密码登录接口
        console.log('Phone login attempt:', this.phone);
        
        // 模拟API调用
        setTimeout(() => {
          uni.hideLoading();
          uni.showToast({ title: '登录成功', icon: 'success' });
          uni.reLaunch({ url: '/pages/index/index' });
        }, 1000);

      } catch (error) {
        uni.hideLoading();
        uni.showToast({ title: '登录失败，请重试', icon: 'none' });
        console.error('Phone login failed:', error);
      }
    },

    // 微信一键登录
    async handleWechatLogin(e) {
      // 用户拒绝授权
      if (e.detail.errMsg !== 'getPhoneNumber:ok') {
        uni.showToast({ title: '授权失败', icon: 'none' });
        return;
      }

      uni.showLoading({ title: '微信登录中...' });

      try {
        // 1. 获取登录凭证 code
        const loginRes = await uni.login({ provider: 'weixin' });
        if (!loginRes.code) {
            uni.showToast({ title: '获取登录凭证失败', icon: 'none' });
            uni.hideLoading();
            return;
        }
        const code = loginRes.code;

        // 2. 将 code 和手机号的加密数据发送到后端
        const wechatLoginData = {
          code: code,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        };

        console.log('Sending to backend:', wechatLoginData);
        // TODO: 调用后端微信登录接口, 后端通过 code 获取 openid 和 session_key,
        // 然后用 session_key 和 iv 解密 encryptedData 获得手机号，完成登录或注册流程
        // const res = await apiWechatLogin(wechatLoginData);
        // uni.setStorageSync('token', res.token);
        // uni.setStorageSync('userInfo', res.userInfo);

        // 模拟成功
        setTimeout(() => {
          uni.hideLoading();
          uni.showToast({ title: '登录成功', icon: 'success' });
          uni.reLaunch({ url: '/pages/index/index' });
        }, 1000);

      } catch (error) {
        uni.hideLoading();
        uni.showToast({ title: '微信登录失败', icon: 'none' });
        console.error('WeChat login failed:', error);
      }
    },

    // 跳转注册
    goToRegister() {
        uni.showToast({ title: '注册功能开发中...', icon: 'none'});
    }
  }
};
</script>

<style>
.login-container { display: flex; flex-direction: column; align-items: center; padding: 40px 20px; background-color: #f7f8fa; height: 100vh; box-sizing: border-box; }
.logo-wrapper { margin-bottom: 40px; text-align: center; }
.app-title { margin-top: 15px; font-size: 20px; color: #333; font-weight: bold; }
.form-wrapper { width: 100%; margin-bottom: 20px; }
.button-wrapper { width: 100%; padding: 0 16px; box-sizing: border-box; }
.extra-links { width: 100%; display: flex; justify-content: center; margin-top: 40px; padding: 0 20px; font-size: 14px; color: #888; }
.link { cursor: pointer; }

/* 分割线样式 */
.divider {
  width: 80%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  text-align: center;
  color: #969799;
}
.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #ebedf0;
}
.divider-text {
  padding: 0 15px;
  font-size: 14px;
}

/* 微信登录按钮包装器 */
.wechat-login-wrapper {
  margin-top: 0;
}
</style>