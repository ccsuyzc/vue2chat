<template>
  <div>
    <el-dialog
      title="修改自定义角色"
      :visible.sync="IsShow"
      :before-close="CloseAddShow"
    >
      <el-form ref="form" :model="setData2" label-width="100px">
        <el-form-item label="角色名称">
          <el-input v-model="setData2.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="角色头像">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="form.imageUrl" :src="form.mageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item> -->

        <el-form-item label="AI模型">
          <el-select v-model="setData2.model" placeholder="请选择AI模型">
            <el-option label="chatGPT3.5" value="0"></el-option>
            <el-option label="chatGPT4.0" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="API秘钥">
          <el-radio-group v-model="setData2.key">
            <el-radio label="1">公钥</el-radio>
            <el-radio label="2">私人秘钥</el-radio>
          </el-radio-group>
          <el-input
            placeholder="请输入私人秘钥"
            v-model="setData2.PrivateKey"
            show-password
            v-show="form.key == 2"
          ></el-input>
        </el-form-item>
        <el-form-item label="自定义描述">
          <el-input type="textarea" v-model="setData2.describe"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="CloseAddShow">删除角色</el-button>
        <el-button @click="CloseAddShow">取 消</el-button>
        <el-button type="primary" @click="CloseAddShow2">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { nextTick } from "vue";
export default {
  data() {
    return {
      //   收集到的表单数据，没用上
      form: {
        name: "",
        imageUrl: "", //角色头像
        model: "", // 模型选择
        key: "", //私人秘钥还是公有秘钥,1为公,2为私
        PrivateKey: "", //保存私人秘钥
        describe: "", //自定义描述
      },
    };
  },
  mounted() {},
  methods: {
    // 通知父组件关闭
    CloseAddShow() {
      this.$emit("CloseSetShow");
    },
    // 确定
    CloseAddShow2() {
      this.setRole();
      this.$emit("CloseSetShow");
      //   this.$store.dispatch("getNewData");
    },

    // 保存角色到浏览器,然后提醒vuex读取
    setRole() {
      // 提醒vuex保存修改
      this.$store.dispatch('SaveChangesUserRole');
      // 提醒vuex
      this.$store.dispatch('getNewData')
    },


    // 头像
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.getBase64(file.raw, (base64Image) => {
        this.form.imageUrl = base64Image;
      });
    },
    getBase64(file, callback) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        callback(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error:", error);
      };
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  props: ["IsShow", "setData"],
  mounted() {
    this.$nextTick(() => {
      // DOM 更新后执行的回调函数
      // this.init()
      // 在这里可以进行一些基于 DOM 的操作
    });
  },
  computed: {
    ...mapState({ setData2: (state) => state.Chat.setData }),
  },
};
</script>
  
  <style scoped>
/* 头像文件添加框 */
.avatar-uploader .el-upload {
  border: 1px dashed #918f8f;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 148px;
  height: 148px;
  line-height: 148px;
  text-align: center;
}
.avatar {
  width: 148px;
  height: 148px;
  display: block;
}
</style>