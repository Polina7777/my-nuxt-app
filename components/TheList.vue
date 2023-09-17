<script lang="ts">
import TheCard from "@/components/TheCard.vue";

export default {
  props: {
    titleProps: String,
    itemList: Array,
  },
  updated() {
  this.currentLocale = this.$i18n.locale
  this.theme = localStorage.getItem('theme') as string
},
mounted() {
  this.theme = localStorage.getItem('theme') as string
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
      theme:'light',
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
  <div :class="`list_wrapper ${theme}`" :key="currentLocale">
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
    <p
      v-if="
        router.currentRoute.path !== '/new' &&
        !(router.currentRoute.path === '/sale') &&
        itemList?.length
      "
      class="show_more"
      @click="navigateTo(title)"
    >
      {{ text }}
    </p>
    <p v-show="!itemList?.length" class="no-result">No result!</p>
  </div>
</template>

<style scoped>
.list_wrapper {
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  margin: auto;
  width: 100%;
}
.dark-mode .title, .dark-mode .show_more, .dark-mode .no-result{
  color: #b49696;
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
}
li {
  text-align: center;
  padding: 10px;
  border: 1.7px solid  #b49696;
  border-radius: 10px;
  background-color: white;
}
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
