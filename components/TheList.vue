<script lang="ts">
import TheCard from "@/components/TheCard.vue";

export default {
  props: {
    titleProps: String,
    itemList: Array,
  },

  data() {
    return {
      text: this.titleProps?`Показать все ${this.titleProps?.toLowerCase()}`: null,
      router: useRouter()
    };
  },
  methods: {
    navigateTo(link: any) {
      if(link === 'Новинки'){
        this.$router.push('/new');
      } else if(link === 'Акции'){
        this.$router.push('/sale');
      }
    
    },
  },
  components: { TheCard },
};
</script>

<template>
  <div class="list_wrapper">
    <p class="title">{{ titleProps }}</p>
    <ul v-if="itemList?.length" :class="(router.currentRoute.path === '/new') || (router.currentRoute.path === '/sale') ? 'no-scroll': null">
      <li v-for="(item, index) in itemList" :key="index" class="li_item">
        <TheCard :card="item" />
      </li>
    </ul>
    <p v-if="(router.currentRoute.path !== '/new') && !(router.currentRoute.path === '/sale') && itemList?.length" class="show_more" @click="navigateTo(title)">{{ text }}</p>
    <p v-if="!itemList?.length" class="no-result" > No result!</p>
  </div>
</template>

<style scoped>
.list_wrapper {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}
.title{
    text-align: center;
}
.show_more{
    text-align: end;
    padding:0 10px;
}
ul {
  display: flex;
  flex-direction: row;
 /* flex-wrap: wrap; */
}
li{
    text-align: center;
    padding: 10px;
    border: 1.7px solid #DADEDF;
    border-radius: 10px;

}
.no-result{
  text-align: center;
font-size: 27px;
color: #B49696;
margin: auto;
}

@media (max-width: 610px) {
  .list_wrapper{
    padding: 21px;

  }
  ul {
    flex-wrap: nowrap;
overflow: scroll;
justify-content: flex-start;
}

.no-scroll{
 /* display: grid;
 grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /* grid-gap: 21px; */
  /* grid-auto-flow: dense;  */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
}




</style>
