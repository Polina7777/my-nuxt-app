<script lang="ts">
export default{
    props: {
    click: Function,
  },
    data(){
        return{

        }
    }
}
</script>

<template>
  <div class="button">
    <button class="tag_button" @click="handleClick"></button>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
