<template>
 
   
        <div class="main">
          <div class="left">
            <div class="show">
              <div class="showbox">
                <!-- <img src="./00-56-3573bae6-6783-4427-93cb-fd02733e8d3c8791eb5a-574c-44d6-a461-069eb4d1eb2f.jpg"/> -->
              </div>
            </div>
            <div class="showlist">
              <!-- <div class="showlistbox"><img src="./00-56-3573bae6-6783-4427-93cb-fd02733e8d3c9691ecfd-70b8-4a5f-bd4d-4967cf5b73f4.jpg" alt="1"/></div> -->
            </div>
            <div class="textinput">
              <input type="text" class="input" v-model="inputValue" @keydown.enter="send" />

              <!-- 发送按钮 -->
              <div class="btn" @click="send">
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
            <div class="right-son1">
                 
            </div>
            <div class="right-son2">

            </div>
          </div>
        </div>
    
 
</template>

<script>
export default {
  name: "Drawing",
  data() {
    return {
      inputValue:''
    }
  },
  methods: {
     send(){
      alert(this.inputValue)
      this.inputValue = ""
     }
  },
};
</script>

<style scoped>

svg {
  width: 100%;
  height: 100%;
}



.main {
  width: 100%;
  flex: 1;
  display: flex;
  background-color: rgb(245, 246, 247);
}


.left {
  width: 79%;
  background-color:  rgb(245, 246, 247);
  position: relative;
}
.right {
  width: 20%;
  background-color: rgb(245, 246, 247);
}

/*  历史记录 */
.right .right-son1 {
  width: 100%;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color:  rgb(245, 246, 247);
}

/* 参数配置 */
.right .right-son2 {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.left .show {
  width: 100%;
  height: 90%;
  background-color:  rgb(245, 246, 247);
}
.left .showlist {
  width: 12%;
  position: absolute;
  top: 0;
  right: 0;
  height: 90%;
  background-color:  rgb(245, 246, 247);
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left .showlist .showlistbox {
  width: 90px;
  height: 90px;
  margin: 10px;
  background-color:  rgb(245, 246, 247);
}

.textinput {
  margin-left: 23%;
  margin-top: 5px;
  width: 60%;
  height: 50px;
  background-color:  rgb(245, 246, 247);
  align-items: center;
  display: flex;
}

/* 输入框 */
.textinput .input {
  flex: 1;
  background-color:  rgb(245, 246, 247);
  height: 100%;
  font-size: 20px;
  caret-color:  black;
}
.textinput .btn {
  margin-top: 0px;
  width: 55px;
  height: 50px;
  background-color:  rgb(245, 246, 247);
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