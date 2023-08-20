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
      text: `Показать все ${this.titleProps?.toLowerCase()}`,
    };
  },
  methods: {
    navigateTo(link: any) {
      this.$router.push(link);
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
    <p class="show_more">{{ text }}</p>
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
    padding: 0 20px;
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
