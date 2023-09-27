<template>
  <div>
    <el-drawer
      title=""
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    close(){
        this.$emit("close")
    },
    handleClose() {
        this.close()
    },
  },
  props:["isShow"],
};
</script>

<style>
</style>