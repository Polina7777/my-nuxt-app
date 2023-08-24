<script lang="ts">
import TheCard from "@/components/TheCard.vue";

export default {
  props: {
    titleProps: String,
    itemList: Array,
  },
  data() {
    return {
      title: this.titleProps,
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
    <p class="title">{{ title }}</p>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">
        <TheCard :card="item" />
      </li>
    </ul>
    <p v-if="(router.currentRoute.path !== '/new') && !(router.currentRoute.path === '/sale')" class="show_more" @click="navigateTo(title)">{{ text }}</p>
  </div>
</template>

<style scoped>
.list_wrapper {
  display: flex;
  flex-direction: column;
}
.title{
    text-align: center;
}
.show_more{
    text-align: end;
    padding: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
li{
    text-align: center;
    padding: 10px;
    border: 1.7px solid #DADEDF;
    border-radius: 10px;

}
</style>
