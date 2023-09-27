<template>
  <div>
    <el-dialog
      title="添加自定义角色"
      :visible.sync="IsShow"
      :before-close="CloseAddShow"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="角色名称">
          <el-input v-model="form.name"></el-input>
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
          <el-select v-model="form.model" placeholder="请选择AI模型">
            <el-option label="chatGPT3.5" value="0"></el-option>
            <el-option label="chatGPT4.0" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="API秘钥">
          <el-radio-group v-model="form.key">
            <el-radio label="1">公钥</el-radio>
            <el-radio label="2">私人秘钥</el-radio>
          </el-radio-group>
          <el-input
            placeholder="请输入私人秘钥"
            v-model="form.PrivateKey"
            show-password
            v-show="form.key == 2"
          ></el-input>
        </el-form-item>
        <el-form-item label="自定义描述">
          <el-input type="textarea" v-model="form.describe"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="CloseAddShow">取 消</el-button>
        <el-button type="primary" @click="CloseAddShow2">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data() {
    return {
      //   收集到的表单数据
      form: {
        name: "",
        imageUrl: "", //角色头像
        model: "", // 模型选择
        key: "", //私人秘钥还是公有秘钥,1为公,2为私
        PrivateKey: "", //保存私人秘钥
        describe: "", //自定义描述
        data: [],
        
      },
    
    };
  },
  mounted(){

  },
  methods: {
    // 通知父组件关闭
    CloseAddShow() {

      this.$emit("CloseAddShow");
    },
    // 确定
    CloseAddShow2() {
      this.addRole();
      this.$emit("CloseAddShow");
      this.$store.dispatch('getNewData')
    },

    // 保存角色到浏览器,然后提醒vuex读取
    addRole() {
      // 判断是否有自定义列表,没有就创建
      if (localStorage.getItem("userDefined")) {
        // 读取
        let userDefined = JSON.parse(localStorage.getItem("userDefined"));
 
        // 添加新的
        userDefined.push({...this.form,id:uuidv4()})

        localStorage.setItem("userDefined", JSON.stringify(userDefined));


      } else {
        localStorage.setItem("userDefined", JSON.stringify([{...this.form,id:uuidv4()}]));
      }
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
  props: ["IsShow"],
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