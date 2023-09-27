<template>
  <div class="box2">
    <div class="box12">
      <input type="text" name="search" class="search" />
    </div>
    <div class="box22">
      <!-- 设置默认 -->
      <div
        class="role"
        v-for="item in defaultRole1 || defaultRole"
        :key="item.id"
        @click="clickTo1(item)"
      >
        <div class="rolePicture"></div>
        <div class="roleName">{{ item.name }}</div>
      </div>
      <!-- 自定义 -->
      <div
        class="role"
        v-for="item in userDefined1 || userDefined"
        :key="item.id"
        @click="clickTo2(item)"
        style="position: relative"
      >
        <div class="rolePicture"></div>
        <div class="roleName">{{ item.name }}</div>
        <div
          style="position: absolute; right: 20%; width: 15px; height: 15px"
          @click.stop="setRote(item)"
        >
          <svg
            t="1695255540139"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4030"
            width="200"
            height="200"
          >
            <path
              d="M940 596l-76-57.6c0.8-8 1.6-16.8 1.6-26.4s-0.8-18.4-1.6-26.4l76-57.6c20.8-16 26.4-44 12.8-68l-84.8-143.2c-9.6-16.8-28-27.2-47.2-27.2-6.4 0-12 0.8-18.4 3.2L712 228c-15.2-10.4-31.2-19.2-47.2-26.4l-13.6-92c-4-26.4-26.4-45.6-53.6-45.6H426.4c-27.2 0-49.6 19.2-53.6 44.8L360 201.6c-16 7.2-31.2 16-47.2 26.4l-90.4-35.2c-6.4-2.4-12.8-3.2-19.2-3.2-19.2 0-37.6 9.6-46.4 26.4L71.2 360c-13.6 22.4-8 52 12.8 68l76 57.6c-0.8 9.6-1.6 18.4-1.6 26.4s0 16.8 1.6 26.4l-76 57.6c-20.8 16-26.4 44-12.8 68l84.8 143.2c9.6 16.8 28 27.2 47.2 27.2 6.4 0 12-0.8 18.4-3.2L312 796c15.2 10.4 31.2 19.2 47.2 26.4l13.6 92c3.2 25.6 26.4 45.6 53.6 45.6h171.2c27.2 0 49.6-19.2 53.6-44.8l13.6-92.8c16-7.2 31.2-16 47.2-26.4l90.4 35.2c6.4 2.4 12.8 3.2 19.2 3.2 19.2 0 37.6-9.6 46.4-26.4l85.6-144.8c12.8-23.2 7.2-51.2-13.6-67.2zM704 512c0 105.6-86.4 192-192 192S320 617.6 320 512s86.4-192 192-192 192 86.4 192 192z"
              p-id="4031"
            ></path>
          </svg>
        </div>
        <div
          style="position: absolute; right: 8%; width: 15px; height: 15px"
          @click.stop="removeUserDefine(item)"
        >
          <svg
            t="1695830999346"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4014"
            width="200"
            height="200"
          >
            <path
              d="M909.050991 169.476903l-217.554898 0 0-31.346939c0-39.5866-32.205493-71.792093-71.793116-71.792093L408.15591 66.337871c-39.5866 0-71.792093 32.205493-71.792093 71.792093l0 31.346939L113.349581 169.476903c-11.013845 0-19.942191 8.940626-19.942191 19.954471s8.928347 19.954471 19.942191 19.954471l84.264149 0 0 640.687918c0 60.479443 49.203632 109.683075 109.683075 109.683075l416.474366 0c60.479443 0 109.683075-49.203632 109.683075-109.683075L833.454246 209.385844l75.595722 0c11.012821 0 19.942191-8.940626 19.942191-19.954471S920.063813 169.476903 909.050991 169.476903zM376.2482 138.130987c0-17.593703 14.314007-31.907711 31.907711-31.907711l211.547067 0c17.593703 0 31.907711 14.314007 31.907711 31.907711l0 31.346939L376.2482 169.477926 376.2482 138.130987zM793.569864 850.074785c0 38.486546-31.312146 69.798692-69.798692 69.798692L307.297828 919.873478c-38.486546 0-69.798692-31.312146-69.798692-69.798692L237.499136 211.042577l556.070728 0L793.569864 850.074785z"
              fill="#272636"
              p-id="4015"
            ></path>
            <path
              d="M510.662539 861.276918c11.012821 0 19.954471-8.92937 19.954471-19.942191L530.61701 294.912753c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191L490.708068 841.334727C490.708068 852.347548 499.649717 861.276918 510.662539 861.276918z"
              fill="#272636"
              p-id="4016"
            ></path>
            <path
              d="M374.562814 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L394.517285 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C354.608344 792.519951 363.549993 801.449321 374.562814 801.449321z"
              fill="#272636"
              p-id="4017"
            ></path>
            <path
              d="M649.832182 801.449321c11.012821 0 19.954471-8.92937 19.954471-19.942191L669.786653 354.74035c0-11.013845-8.94165-19.942191-19.954471-19.942191s-19.954471 8.928347-19.954471 19.942191l0 426.76678C629.877711 792.519951 638.81936 801.449321 649.832182 801.449321z"
              fill="#272636"
              p-id="4018"
            ></path>
          </svg>
        </div>
      </div>
      <button class="addbtn" @click="isAddShow">添加</button>

      <!-- 添加角色模块 -->
      <AddRoleVue
        :IsShow="AddRoleVueIsShow"
        @CloseAddShow="CloseAddShow"
      ></AddRoleVue>

      <!-- 修改角色模块 -->
      <SetRoleVue
        :IsShow="SetRoleVueIsShow"
        :setData="setData"
        @CloseSetShow="CloseSetShow"
      ></SetRoleVue>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AddRoleVue from "./components/AddRole.vue";
import SetRoleVue from "./components/SetRole.vue";

export default {
  name: "list",
  data() {
    return {
      // 用户定义的
      userDefined: [
        // {
        //   name: "user",
        // },
      ],

      // 设置默认的
      defaultRole: [
        {
          name: "chatGPT3.5",
          id: "chatGPT3.5",
          PrivateKey: "",
          imgUrl: "",
          data: [
            {
              role: "chatgpt", // 和user
              msg: `# 您好!,有什么可以帮助您的吗? `,
              flag: 0, //标记一对对话,
              id: "12fasd",
            },
            {
              role: "user",
              msg: "搞笑",
              flag: 1,
              id: "fdaefa1",
            },
          ],
        },
        {
          name: "chatGPT4.0",
          id: "chatGPT4.0",
          PrivateKey: "",
          imgUrl: "",
          data: [],
        },
      ],
      AddRoleVueIsShow: false,
      SetRoleVueIsShow: false,
      setData: "",
    };
  },
  mounted() {},
  computed: {
    ...mapState({ userDefined1: (state) => state.Chat.userDefined }),
    ...mapState({ defaultRole1: (state) => state.Chat.defaultRole }),
  },
  components: {
    AddRoleVue,
    SetRoleVue,
  },
  methods: {
    // 删除角色
    removeUserDefine(item) {
      console.log("删除角色:", item);
      this.$store.dispatch("removeRole", item);
    },
    // 修改数据
    setRote(item) {
      this.setData = item;
      this.SetRoleVueIsShow = true;
      console.log("修改数据", item);
      this.$store.dispatch("setSetdata", item);
    },
    // 点击跳转相关数据
    clickTo1(item) {
      //  console.log(item);
      this.$store.dispatch("setIsShowID", item.id);
    },
    clickTo2(item) {
      // console.log(item);
      this.$store.dispatch("setIsShowID", item.id);
    },
    // 点击添加按钮
    isAddShow() {
      this.AddRoleVueIsShow = true;
    },
    // 关闭添加面板
    CloseAddShow() {
      this.AddRoleVueIsShow = false;
    },
    // 关闭修改面板
    CloseSetShow() {
      this.SetRoleVueIsShow = false;
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
}
.box2 {
  width: 222px;
  /* flex: 3; */
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgb(248, 249, 249);

  display: flex;
  flex-direction: column;
}

.addbtn {
  width: 100%;
  height: 55px;
  border: none;
}

.search {
  width: 100%;
  border: 0;
  display: inline-block;
  height: 30px;
}

.role {
  width: 100%;
  height: 55px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}

.role:hover {
  background-color: rgb(242, 242, 242);
}

.rolePicture {
  width: 43px;
  background-color: cadetblue;
  height: 43px;
  margin-left: 15px;
  border-radius: 50%;
}

.roleName {
  margin-left: 15px;
}
</style>