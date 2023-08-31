<template>
  <div class="chat">
   <list></list>
   <gpt></gpt>
  </div>
</template>

<script>
import list from "./components/list.vue"
import gpt from "./components/gpt.vue"
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
    width: 1460px;
  height: 738px;
  display: flex;
  justify-content: stretch;
}
</style>