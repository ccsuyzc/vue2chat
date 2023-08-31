<template>
  <div class="box">
    <div class="box3">
      <div class="index">
        <div class="main">
          <div class="left">
            <div class="show">
              <div class="showbox">
                <!-- <img src="./00-56-3573bae6-6783-4427-93cb-fd02733e8d3c8791eb5a-574c-44d6-a461-069eb4d1eb2f.jpg"/> -->
              </div>
            </div>
            <div class="showlist">
              <!-- <div class="showlistbox"><img src="./00-56-3573bae6-6783-4427-93cb-fd02733e8d3c9691ecfd-70b8-4a5f-bd4d-4967cf5b73f4.jpg" alt="1"/></div> -->
              <!-- <div class="showlistbox"><img src="./01-03-3573bae6-6783-4427-93cb-fd02733e8d3cfa559f46-0d78-4149-9981-b3a804d5726b.jpg" alt="2"/></div> -->
              <!-- <div class="showlistbox"><img src="./01-04-3573bae6-6783-4427-93cb-fd02733e8d3c1ae1b82b-1968-4b3e-9616-9008f4629aa8.jpg" alt="3"/></div> -->
            </div>
            <div class="textinput">
              <input type="text" class="input" />

              <div class="btn">
                <svg
                  t="1693072552648"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="15006"
                  width="200"
                  height="200"
                >
                  <path
                    d="M914.6368 136.4992L97.1264 565.9648c-9.728 5.12-9.2672 19.1488 0.7168 23.6544l254.4128 114.176c10.9568 4.9152 23.8592-0.5632 27.8016-12.1856 3.4304-10.1376-2.0992-21.1456-11.8272-25.5488l-189.3376-84.992c-4.9152-2.2016-5.12-9.0624-0.3584-11.5712L808.96 238.2336c1.2288-0.6144 2.4064 0.8704 1.4848 1.8944l-406.9376 464.8448c-0.1536 0.2048-7.3728 8.2944-8.192 13.6704l-22.3232 146.2272c-1.4848 9.6768 3.6864 19.456 12.8 22.8864 12.5952 4.7104 25.6512-3.5328 27.5456-16.0256l19.3536-126.7712c1.024-6.8096 7.68-11.3152 14.3872-9.7792L751.36 819.2c6.656 1.4336 13.3632-2.4576 15.36-8.96L933.2224 152.064c3.5328-11.264-8.2432-21.0432-18.5856-15.5648z m-175.872 625.664a13.17888 13.17888 0 0 1-15.36 8.96L482.304 701.3376c-7.9872-1.8432-11.1104-11.5712-5.6832-17.7152l382.2592-436.6336c0.8192-0.9728 2.4064-0.1536 2.0992 1.0752l-122.2144 514.0992z"
                    fill="#666666"
                    p-id="15007"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-son1">历史记录</div>
            <div class="right-son2">参数设置</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Drawing",
};
</script>

<style scoped>
.box3 {
  flex: 25;
  width: 1400px;
  background-color: rgb(245, 246, 247);
  display: flex;
}

.header {
  width: 100%;
  height: 70px;
  background-color: rgb(245, 246, 247);
  position: relative;
}

.main {
  width: 100%;
  flex: 1;
  display: flex;
  background-color: rgb(245, 246, 247);
}

.box3 .index {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.left {
  width: 80%;
  background-color: antiquewhite;
  position: relative;
}
.right {
  width: 20%;
  background-color: aqua;
}
.right .right-son1 {
  width: 100%;
  height: 150px;
  background-color: antiquewhite;
}

.left .show {
  width: 100%;
  height: 90%;
  background-color: aquamarine;
}
.left .showlist {
  width: 12%;
  position: absolute;
  top: 0;
  right: 0;
  height: 90%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left .showlist .showlistbox {
  width: 90px;
  height: 90px;
  margin: 10px;
  background-color: azure;
}

.textinput {
  margin-left: 20%;
  margin-top: 5px;
  width: 60%;
  height: 50px;
  background-color: black;
  align-items: center;
  display: flex;
}

.textinput .input {
  flex: 1;
  background-color: blueviolet;
  height: 100%;
  caret-color: red;
}
.textinput .btn {
  margin-top: 0px;
  width: 55px;
  height: 50px;
  background-color: brown;
}

.left .show {
  display: flex;
  justify-content: center;
  align-items: center;
}

.showbox {
  width: 600px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.showbox img {
  width: 100%;
}
.showlistbox img {
  width: 100%;
}
</style>