<template>
  <div>
    <el-drawer
      title="用户设置"
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        size="medium "
        style="width: 80%"
      >
        <el-form-item label="用户头像">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址">
          <el-input
            v-model="form.Email"
            placeholder="请输入邮箱地址"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.region" placeholder="请选择性别">
            <el-option label="男" value="nan"></el-option>
            <el-option label="女" value="nv"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="个性签名">
          <div style="margin: 20px 0"></div>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="form.textarea"
            maxlength="30"
            show-word-limit
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",

      form: {
        name: "",
        imageUrl: '',
        region: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        Email: "",
        password: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleClose() {
      this.close();
    },

    // 保存按钮
    onSubmit() {
      console.log("submit!");
    },

    // 头像处理
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  props: ["isShow"],
};
</script>
  
  <style scoped>
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>