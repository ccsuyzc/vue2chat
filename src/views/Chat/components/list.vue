<template>
  <div class="box2">
    <div class="box12">
      <input type="text" name="search" class="search" />
    </div>
    <div class="box22">
      <div class="role active">
        <div class="rolePicture"></div>
        <div class="roleName">ChatGPT3.5</div>
      </div>
      <div class="role">
        <div class="rolePicture"></div>
        <div class="roleName">ChatGPT4.0</div>
      </div>
      <button class="addbtn">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
};
</script>

<style scoped>
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
}

.roleName {
  margin-left: 15px;
}
</style>