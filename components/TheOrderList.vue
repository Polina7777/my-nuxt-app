<script lang="ts">
import TheCard from "@/components/TheCard.vue";

export default {
  props: {
    titleProps: String,
    itemList: Array,
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
  beforeUpdate() {
    this.text = this.titleProps
      ? `${this.$t('showAll')} ${this.titleProps?.toLowerCase()}`
      : null;
  },
  data() {
    return {
      text: this.titleProps
        ? `${this.$t('showAll')} ${this.titleProps?.toLowerCase()}`
        : null,
      router: useRouter(),
      currentLocale:this.$i18n.locale,
    };
  },
  methods: {
    navigateTo(link: any) {
      if (link === "Новинки") {
        this.$router.push("/new");
      } else if (link === "Акции") {
        this.$router.push("/sale");
      }
    },
  },
  components: { TheCard },
};
</script>
<template>
  <div class="list_wrapper" :key="currentLocale">
    <p class="title">{{ titleProps }}</p>
    <ul v-if="itemList?.length"
      :class="
        router.currentRoute.path === '/new' ||
        router.currentRoute.path === '/sale'
          ? 'no-scroll'
          : null
      "
    >
      <li v-for="(item, index) in itemList" :key="index" class="li_item">
        <TheCard :card="item" />
      </li>
    </ul>
    <p v-show="!itemList?.length" class="no-result">No result!</p>
  </div>
</template>

<style scoped>
/*DarkMode*/

.dark-mode .title, .dark-mode .show_more, .dark-mode .no-result{
  /* color: #b49696; */
  color: rgb(121, 119, 119);
}
.dark-mode li{
background-color: transparent;
border: 1.7px solid  rgb(149, 147, 147);
color: #959393;
}

/*DarkMode*/
.list_wrapper {
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  margin: auto;
}
.title {
  text-align: center;
}
.show_more {
  text-align: end;
  padding: 0 10px;
}
ul {
  display: flex;
  flex-direction: row;
  padding: 0;
}
li {
  display: flex;
flex-direction: column;
justify-content: center;
width: 210px;
height: 210px;
  text-align: center;
  border: 1.7px solid #dadedf;
  border-radius: 10px;
}
/* .dark-mode li {
  display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
width: 210px;
height: 210px;
  text-align: center;
  border: 1.7px solid #dadedf;
  border-radius: 10px;
} */
.no-result {
  text-align: center;
  font-size: 27px;
  color: #b49696;
  margin: auto;
}

@media (max-width: 610px) {
  .list_wrapper {
    padding: 21px;
    width: 95%;
  }
  ul {
    flex-wrap: nowrap;
    overflow: scroll;
    justify-content: flex-start;
  }

  .no-scroll {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
