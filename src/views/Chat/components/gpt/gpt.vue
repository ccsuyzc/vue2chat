<template>
  <div class="box3">
    <div class="index">
      <div class="header">
        <div class="name">{{ name }}</div>
        <div class="set"></div>
      </div>
      <div class="main" ref="chatFrame">
        <!-- <div
          v-for="(item, index) in newList || []"
          :key="index"
          :class="item.role === 'chatgpt' ? 'left' : 'right'"
        >
          <div
            class="avatar"
            :class="item.role == 'chatgpt' ? 'robot-avatar' : 'user-avatar'"
          ></div>
          <div class="message-content">
            <div class="message-text" v-html="parseMarkdown(item.msg)"></div>
          </div>
        </div> -->
        <ChatMessage message="Hi there!" />
        <ChatMessage
          :message="item.msg"
          :isOutgoing="item.role == 'chatgpt' ? false : true"
          v-for="(item, index) in newList"
          :key="index"
          :id="item.id"
          :This="This"
        />
      </div>

      <div class="footer">
        <!-- 功能栏 -->
        <ul>
          <!-- 设置 -->
          <li>
            <div>
              <svg
                t="1693066959382"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11294"
                width="200"
                height="200"
              >
                <title>设置</title>
                <path
                  d="M512 328c-100.8 0-184 83.2-184 184S411.2 696 512 696 696 612.8 696 512 612.8 328 512 328z m0 320c-75.2 0-136-60.8-136-136s60.8-136 136-136 136 60.8 136 136-60.8 136-136 136z"
                  p-id="11295"
                ></path>
                <path
                  d="M857.6 572.8c-20.8-12.8-33.6-35.2-33.6-60.8s12.8-46.4 33.6-60.8c14.4-9.6 20.8-27.2 16-44.8-8-27.2-19.2-52.8-32-76.8-8-14.4-25.6-24-43.2-19.2-24 4.8-48-1.6-65.6-19.2-17.6-17.6-24-41.6-19.2-65.6 3.2-16-4.8-33.6-19.2-43.2-24-14.4-51.2-24-76.8-32-16-4.8-35.2 1.6-44.8 16-12.8 20.8-35.2 33.6-60.8 33.6s-46.4-12.8-60.8-33.6c-9.6-14.4-27.2-20.8-44.8-16-27.2 8-52.8 19.2-76.8 32-14.4 8-24 25.6-19.2 43.2 4.8 24-1.6 49.6-19.2 65.6-17.6 17.6-41.6 24-65.6 19.2-16-3.2-33.6 4.8-43.2 19.2-14.4 24-24 51.2-32 76.8-4.8 16 1.6 35.2 16 44.8 20.8 12.8 33.6 35.2 33.6 60.8s-12.8 46.4-33.6 60.8c-14.4 9.6-20.8 27.2-16 44.8 8 27.2 19.2 52.8 32 76.8 8 14.4 25.6 22.4 43.2 19.2 24-4.8 49.6 1.6 65.6 19.2 17.6 17.6 24 41.6 19.2 65.6-3.2 16 4.8 33.6 19.2 43.2 24 14.4 51.2 24 76.8 32 16 4.8 35.2-1.6 44.8-16 12.8-20.8 35.2-33.6 60.8-33.6s46.4 12.8 60.8 33.6c8 11.2 20.8 17.6 33.6 17.6 3.2 0 8 0 11.2-1.6 27.2-8 52.8-19.2 76.8-32 14.4-8 24-25.6 19.2-43.2-4.8-24 1.6-49.6 19.2-65.6 17.6-17.6 41.6-24 65.6-19.2 16 3.2 33.6-4.8 43.2-19.2 14.4-24 24-51.2 32-76.8 4.8-17.6-1.6-35.2-16-44.8z m-56 92.8c-38.4-6.4-76.8 6.4-104 33.6-27.2 27.2-40 65.6-33.6 104-17.6 9.6-36.8 17.6-56 24-22.4-30.4-57.6-49.6-97.6-49.6-38.4 0-73.6 17.6-97.6 49.6-19.2-6.4-38.4-14.4-56-24 6.4-38.4-6.4-76.8-33.6-104-27.2-27.2-65.6-40-104-33.6-9.6-17.6-17.6-36.8-24-56 30.4-22.4 49.6-57.6 49.6-97.6 0-38.4-17.6-73.6-49.6-97.6 6.4-19.2 14.4-38.4 24-56 38.4 6.4 76.8-6.4 104-33.6 27.2-27.2 40-65.6 33.6-104 17.6-9.6 36.8-17.6 56-24 22.4 30.4 57.6 49.6 97.6 49.6 38.4 0 73.6-17.6 97.6-49.6 19.2 6.4 38.4 14.4 56 24-6.4 38.4 6.4 76.8 33.6 104 27.2 27.2 65.6 40 104 33.6 9.6 17.6 17.6 36.8 24 56-30.4 22.4-49.6 57.6-49.6 97.6 0 38.4 17.6 73.6 49.6 97.6-6.4 19.2-14.4 38.4-24 56z"
                  p-id="11296"
                ></path>
              </svg>
            </div>
          </li>
          <!-- 输入为mkdown文档 -->
          <li @click="OutputInMarkDownFormat">
            <div>
              <svg
                t="1693066886451"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7607"
                width="200"
                height="200"
              >
                <title>输入为mkdown文档</title>
                <path
                  d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"
                  p-id="7608"
                ></path>
                <path
                  d="M429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2c1.9 4.3 6.2 7.1 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191-83.2-191z"
                  p-id="7609"
                ></path>
              </svg>
            </div>
          </li>
          <!-- 输入为图片 -->
          <li @click="OutputInPictureFormat">
            <div title="以图片格式输出">
              <svg
                t="1693066923338"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9444"
                width="200"
                height="200"
              >
                <title>以图片格式输出</title>
                <path
                  d="M841.71335 65.290005 182.285626 65.290005c-64.511269 0-116.995621 52.484352-116.995621 116.995621L65.290005 841.71335c0 64.511269 52.484352 116.995621 116.995621 116.995621l659.427724 0c64.511269 0 116.995621-52.484352 116.995621-116.995621L958.708971 182.285626C958.708971 117.774357 906.225643 65.290005 841.71335 65.290005zM182.285626 107.833961l659.427724 0c41.051975 0 74.451666 33.398668 74.451666 74.451666l0 136.557142c-150.09446 5.26184-290.370297 66.084091-396.978337 172.692131-49.960879 49.961902-89.841168 107.331517-118.694309 169.625282-83.496669-70.835302-204.372667-75.376735-292.65841-13.617136L107.833961 182.285626C107.833961 141.232628 141.232628 107.833961 182.285626 107.833961zM107.833961 841.71335 107.833961 702.627618c76.54228-74.311473 198.833511-74.234725 275.272437 0.24457-24.303522 65.298192-37.026288 135.112234-37.026288 206.91149 0 2.223644 0.343831 4.366448 0.977257 6.381337L182.285626 916.165016C141.232628 916.165016 107.833961 882.766348 107.833961 841.71335zM841.71335 916.165016 387.646807 916.165016c0.633427-2.01489 0.977257-4.157693 0.977257-6.381337 0-146.71755 57.053414-284.572244 160.647817-388.166647 98.570993-98.570993 228.166583-154.963351 366.894158-160.204725L916.166039 841.71335C916.165016 882.766348 882.766348 916.165016 841.71335 916.165016z"
                  fill="#272636"
                  p-id="9445"
                ></path>
                <path
                  d="M312.397986 413.458683c60.8376 0 110.332874-49.494251 110.332874-110.332874s-49.494251-110.332874-110.332874-110.332874-110.332874 49.494251-110.332874 110.332874S251.559363 413.458683 312.397986 413.458683zM312.397986 235.337913c37.378306 0 67.788919 30.40959 67.788919 67.788919s-30.40959 67.788919-67.788919 67.788919-67.788919-30.40959-67.788919-67.788919S275.018657 235.337913 312.397986 235.337913z"
                  fill="#272636"
                  p-id="9446"
                ></path>
              </svg>
            </div>
          </li>
          <!-- 复制文字 -->
          <li>
            <div title="复制全部内容">
              <svg
                t="1693066602671"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4875"
                width="200"
                height="200"
              >
                <title>复制全部内容</title>
                <path
                  d="M720 192h-544A80.096 80.096 0 0 0 96 272v608C96 924.128 131.904 960 176 960h544c44.128 0 80-35.872 80-80v-608C800 227.904 764.128 192 720 192z m16 688c0 8.8-7.2 16-16 16h-544a16 16 0 0 1-16-16v-608a16 16 0 0 1 16-16h544a16 16 0 0 1 16 16v608z"
                  p-id="4876"
                ></path>
                <path
                  d="M848 64h-544a32 32 0 0 0 0 64h544a16 16 0 0 1 16 16v608a32 32 0 1 0 64 0v-608C928 99.904 892.128 64 848 64z"
                  p-id="4877"
                ></path>
                <path
                  d="M608 360H288a32 32 0 0 0 0 64h320a32 32 0 1 0 0-64zM608 520H288a32 32 0 1 0 0 64h320a32 32 0 1 0 0-64zM480 678.656H288a32 32 0 1 0 0 64h192a32 32 0 1 0 0-64z"
                  p-id="4878"
                ></path>
              </svg>
            </div>
          </li>
          <!-- 删除 -->
          <li>
            <div title="删除全部记录">
              <svg
                t="1693067378085"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13181"
                width="200"
                height="200"
              >
                <title>删除全部记录</title>
                <path
                  d="M909.050991 169.476903l-217.554898 0 0-31.346939c0-39.5866-32.205493-71.792093-71.793116-71.792093L408.15591 66.337871c-39.5866 0-71.792093 32.205493-71.792093 71.792093l0 31.346939L113.349581 169.476903c-11.013845 0-19.942191 8.940626-19.942191 19.954471s8.928347 19.954471 19.942191 19.954471l84.264149 0 0 640.687918c0 60.479443 49.203632 109.683075 109.683075 109.683075l416.474366 0c60.479443 0 109.683075-49.203632 109.683075-109.683075L833.454246 209.385844l75.595722 0c11.012821 0 19.942191-8.940626 19.942191-19.954471S920.063813 169.476903 909.050991 169.476903zM376.2482 138.130987c0-17.593703 14.314007-31.907711 31.907711-31.907711l211.547067 0c17.593703 0 31.907711 14.314007 31.907711 31.907711l0 31.346939L376.2482 169.477926 376.2482 138.130987zM793.569864 850.074785c0 38.486546-31.312146 69.798692-69.798692 69.798692L307.297828 919.873478c-38.486546 0-69.798692-31.312146-69.798692-69.798692L237.499136 211.042577l556.070728 0L793.569864 850.074785z"
                  fill="#272636"
                  p-id="13182"
                ></path>
                <path
                  d="M510.662539 861.276918c11.012821 0 19.954471-8.92937 19.954471-19.942191L530.61701 294.912753c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191L490.708068 841.334727C490.708068 852.347548 499.649717 861.276918 510.662539 861.276918z"
                  fill="#272636"
                  p-id="13183"
                ></path>
                <path
                  d="M374.562814 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L394.517285 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C354.608344 792.519951 363.549993 801.449321 374.562814 801.449321z"
                  fill="#272636"
                  p-id="13184"
                ></path>
                <path
                  d="M649.832182 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L669.786653 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C629.877711 792.519951 638.81936 801.449321 649.832182 801.449321z"
                  fill="#272636"
                  p-id="13185"
                ></path>
              </svg>
            </div>
          </li>
        </ul>
        <!-- 输入框 -->
        <div>
          <textarea v-model.trim="textarea" @keydown.enter="send"></textarea>
        </div>
        <div class="send">
          <button @click="send">发送</button>
        </div>
      </div>
    </div>
    <div class="chatset"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import VueClipboard from "vue-clipboard2";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

import { v4 as uuidv4 } from "uuid";
import ChatMessage from "./components/ChatMessage.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "gpt",
  data() {
    return {
      name: "",
      // 用户输入的内容
      textarea: "",
      // 对话列表
      msglist: [
        {
          role: "chatgpt", // 和user
          msg: `# 您好!,这里是有什么可以帮助您的吗? `,
          flag: 0, //标记一对对话
          id: "111",
        },
      ],
      This: "",

      imageDataUrl: "",
    };
  },
  computed: {
    ...mapState({ userDefined1: (state) => state.Chat.userDefined }),
    ...mapState({ defaultRole1: (state) => state.Chat.defaultRole }),
    ...mapState({ isShowID: (state) => state.Chat.isShowID }),
    ...mapGetters({}),
    // 得到最新的数据
    newList() {
      let defaultRole = this.$store.state.Chat.defaultRole;
      let userDefined = this.$store.state.Chat.userDefined;

      if (defaultRole && userDefined && this.isShowID) {
        let i = defaultRole.filter((e) => e.id === this.isShowID);
        let i2 = userDefined.filter((e) => e.id === this.isShowID);

        if (i.length > 0) {
          this.This = "defaultRole";
          return i[0].data;
        } else if (i2.length > 0) {
          this.This = "userDefined";
          return i2[0].data;
        }
      }

      return [];
    },
  },

  methods: {
    //  发送
    send() {
      console.log(1);
      const data = {
        role: "user",
        msg: this.textarea,
        flag: 0,
        id: uuidv4(),
      };
      console.log(2, this.isShowID);

      // 更新 defaultRole 或 userDefined 数组
      if (this.isShowID) {
        let updatedList = [];
        if (this.This == "defaultRole") {
          updatedList = this.defaultRole1.map((item) => {
            if (item.id === this.isShowID) {
              return {
                ...item,
                data: [...item.data, data],
              };
            }
            return item;
          });
          this.$store.commit("UPDATEDEFAULTROLE", updatedList);
        } else if (this.userDefined1) {
          updatedList = this.userDefined1.map((item) => {
            if (item.id === this.isShowID) {
              return {
                ...item,
                data: [...item.data, data],
              };
            }
            return item;
          });
          this.$store.commit("UPDATEUSERDEFINED", updatedList);
        }
      }

      this.textarea = "";
    },

    // 滚动定位
    scrollToBottom() {
      this.$nextTick(() => {
        var element = this.$refs.chatFrame;
        element.scrollTop = element.scrollHeight;
      });
    },

    // 以MarkDown格式输出
    OutputInMarkDownFormat() {
      // 提取 "msg" 字段内容
      const msgList = this.newList.map((item) => item.msg);

      // 将提取的内容转换为 Markdown 格式
      const markdownContent = msgList.join("\n\n");

      // 复制 Markdown 内容到剪贴板
      navigator.clipboard
        .writeText(markdownContent)
        .then(() => {
          console.log("Markdown 内容已复制到剪贴板");
        })
        .catch((error) => {
          console.error("复制到剪贴板时出现错误:", error);
        });
    },
    // 以图片格式输出
    OutputInPictureFormat() {
      const msgList = this.newList.map((item) => item.msg);

      // 将提取的内容转换为 Markdown 格式
      const md = new MarkdownIt();
      const markdownContent = msgList.map((msg) => md.render(msg)).join("\n\n");

      // 创建一个 <div> 元素，并将 Markdown 内容添加到其中
      const div = document.createElement("div");
      div.innerHTML = markdownContent;

      // 使用 html-to-image 将 <div> 元素转换为图片
      htmlToImage
        .toPng(div)
        .then((dataUrl) => {
          // 将图片保存到剪贴板
          this.$copyText(dataUrl).then(() => {
            console.log("Markdown 内容已复制到剪贴板");
          });
          // 设置图片数据 URL，用于下载图片
          this.imageDataUrl = dataUrl;
        })
        .catch((error) => {
          console.error("转换为图片时出现错误:", error);
        });
    },
    // 复制全部
    CopyAll() {},
    // 删除全部
    removeAll() {},
  },
  // 在数据更新后调用滚动方法
  updated() {
    this.scrollToBottom();
  },
  components: {
    ChatMessage,
    "vue-clipboard": VueClipboard,
  },
};
</script>

<style scoped>
/* 盒子整体 */
.box3 {
  flex: 25;
  width: 1400px;
  background-color: rgb(245, 246, 247);
  display: flex;
}

/* 头部 */
.header {
  width: 100%;
  height: 70px;
  background-color: rgb(245, 246, 247);
  position: relative;
}

/* 对话框主体 */
.main {
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: rgb(245, 246, 247);
  overflow-y: scroll;
}

.left {
  text-align: left;
  background-color: #f1f1f1;
  padding: 10px;
  margin: 10px;
}

.right {
  text-align: right;
  background-color: rgb(241, 241, 241);
  padding: 10px;
  margin: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

.robot-avatar {
  background-color: rgb(137, 170, 199);
  float: left;
}

.user-avatar {
  background-color: #58818b;
  float: right;
}

.message-content {
  display: inline-block;
}

.message-code {
  background-color: #fff;
  padding: 10px;
  margin: 5px;
  white-space: pre-wrap;
}

.message-text {
  background-color: #f8f8f8;
  padding: 10px;
  margin: 5px;
}

.footer {
  width: 100%;
  height: 150px;
  background-color: rgb(245, 246, 247);
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}

.box3 .index {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.box3 .chatset {
  width: 170px;
  background-color: beige;
  display: none;
}

.box3 .index .header .name {
  position: absolute;
  bottom: 0;
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

ul li div {
  width: 22px;
  height: 22px;
  align-items: center;
  margin-top: 8px;
  margin-right: 23px;
}

textarea {
  width: 89%;
  height: 101px;
  resize: none;
  background-color: rgb(245, 246, 247);
  border: 0px;
}

textarea:focus {
  outline: none;
}

.send {
  position: absolute;
  top: 73%;
  right: 1%;
}

.send button {
  padding: 6px 35px;
}

svg {
  width: 100%;
  height: 100%;
}
</style>