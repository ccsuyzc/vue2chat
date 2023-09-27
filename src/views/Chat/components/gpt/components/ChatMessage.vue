<template>
  <div class="chat-message" :class="{ outgoing: isOutgoing }">
    <div class="avatar-wrapper">
      <!-- 机器人头像 -->
      <div class="avatar" :class="isOutgoing ? '' : 'user-avatar'"></div>
      <!-- 气泡 -->
      <div class="message-content">
        <p v-html="parseMarkdown(message)"></p>
        <!-- 功能模块 -->
        <div class="message-actions">
          <button class="action-button copy" @click="copyMessage">复制</button>
          <button class="action-button" @click="readMessage">朗读</button>
          <!-- 删除 -->
          <button class="action-button" @click.stop="deleteMessage">
            删除
          </button>
        </div>
      </div>
      <!-- 用户头像 -->
      <div class="avatar" :class="isOutgoing ? 'robot-avatar' : ''"></div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import Clipboard from "clipboard";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    isOutgoing: {
      type: Boolean,
      default: false,
    },
    id: String,
    This: String,
  },
  methods: {
    // 以markdown格式展示
    parseMarkdown(msg) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code, _lang) {
          return hljs.highlightAuto(code).value;
        },
        langPrefix: "hljs language-",
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartypants: false,
        xhtml: false,
      });
      const html = marked.parse(msg);
      return html;
    },

    // 通过纯js实现复制粘贴
    copyMessage() {
      const plainText = this.getPlainText();
      navigator.clipboard
        .writeText(plainText)
        .then(() => {
          console.log("消息已成功复制到剪贴板");
        })
        .catch((error) => {
          console.error("复制失败:", error);
        });
    },
    getPlainText() {
      const tempElement = document.createElement("div");
      tempElement.innerHTML = this.parseMarkdown(this.message);
      return tempElement.textContent || tempElement.innerText;
    },

    // 朗读消息
    readMessage() {},

    // 删除消息
    deleteMessage() {
      console.log(`删除${this.This}数组中id为${this.id},触发一次`);
      //   提交到vuex里面处理
      this.$store.dispatch("removeOne", { id: this.id, type: this.This });
    // this.$store.commit("REMOVEONE",{ id: this.id, type: this.This })
    },
  },
  computed: {
    // ...mapState({ userDefined1: (state) => state.Chat.userDefined }),
    // ...mapState({ defaultRole1: (state) => state.Chat.defaultRole }),
    // ...mapState({ isShowID: (state) => state.Chat.isShowID }),
  },
  mounted() {},
  beforeDestroy() {},
};
</script>
  
  <style scoped>
.chat-message {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.avatar-wrapper {
  display: flex;
  align-items: flex-start;
}

.chat-message.outgoing {
  justify-content: flex-end;
}

/* 气泡样式 */
.message-content {
  padding: 25px;
  background-color: #f2f2f2;
  border-radius: 10px;
  position: relative;
}

.chat-message.outgoing .message-content {
  background-color: #007bff;
  color: #fff;
}

/* 头像 */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  margin-right: 10px;
}

.robot-avatar {
  background-color: rgb(137, 170, 199);
}

.user-avatar {
  background-color: #58818b;
}

/* 小功能 */
.message-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px;
  margin-top: 10px;
}

.action-button {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>