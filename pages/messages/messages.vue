<template name="messages.vue">
  <view class="message-container">
    <uni-list>
      <uni-list-item 
        v-for="msg in messageList" 
        :key="msg.id" 
        :title="msg.from" 
        :rightText="msg.time" 
        :note="msg.content" 
        link
        center
      >
        <template v-slot:icon>
          <image
            style="border-radius:50%;width:40px;height:40px;margin-right:10px;"
            :src="msg.avatar"
          />
        </template>
      </uni-list-item>
    </uni-list>
  </view>
</template>

<script>
export default {
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
        // 模拟数据
        this.messageList = [
            { id: 1, from: '系统通知', content: '您有一份新合同待签署。', time: '昨天', avatar: 'https://placehold.co/80x80/2ECC71/FFFFFF&text=SYS' },
            { id: 2, from: '张师傅', content: '明天可以开工吗？', time: '14:35', avatar: 'https://placehold.co/100x100/EFEFEF/AAAAAA&text=头像' },
            { id: 3, from: '客服小美', content: '您好，有什么可以帮您？', time: '10:12', avatar: 'https://placehold.co/80x80/3498DB/FFFFFF&text=客服' }
        ];
    }
  }
};
</script>

<style>
.message-container {
  margin-top: 10px;
}
</style>