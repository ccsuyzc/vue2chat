<template>
  <div class="chat">
   <list></list>
   <gpt></gpt>
  </div>
</template>

<script>
import list from "./components/list/list.vue"
import gpt from "./components/gpt/gpt.vue"
export default {
    name:'Chat',
    components:{
        list,
        gpt
    }
}
</script>

<style scoped>
.chat{
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: stretch; */
}
</style>