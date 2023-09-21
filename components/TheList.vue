<script lang="ts">
import TheCard from "@/components/TheCard.vue";
import sort from "../static/images/sort.svg"
import filter from "../static/images/filter.svg"
export default {
  props: {
    titleProps: String,
    itemList: Array,
    // openFiltersModal: Boolean,
  user:Function,
  filterListByFiltersForm:Function,
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
      sort:sort,
      sortAsc: false,
      filter:filter,
      openFilterModal:false,
    // productsList:this.itemList
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
    toggleSortType() {
      console.log(this.sortAsc)
      return (this.sortAsc = !this.sortAsc);

    },
    filterClick(){
      this.openFilterModal = !this.openFilterModal;
    },
    async sortCardList() {
      // this.loading = true
      // this.error = false
      try {
        let sortList
        if (this.sortAsc) {
          sortList = this.itemList?.sort(function (a: any, b: any) {
            if (a.attributes.brand < b.attributes.brand) {
              return -1
            }
            if (a.attributes.brand > a.attributes.brand) {
              return 1
            }
            return 0
          })
          return (this.productsList = sortList)
        } else {
          sortList = this.itemList?.sort(function (a: any, b: any) {
            if (b.attributes.brand < a.attributes.brand) {
              return -1
            }
            if (a.attributes.brand > a.attributes.brand) {
              return 1
            }
            return 0
          })
          return (this.productsList = sortList)
        }
      } catch (err) {
        // this.error = true
      } finally {
        // this.loading = false
      }
    },
  },
  watch:{
    sortAsc: async function sort() {
      this.sortCardList()
    },
  },

  components: { TheCard},
};
</script>
<template>
  <div class="list_wrapper" >
    <div class="title_wrapper">
    <p class="title">{{ titleProps }}</p>
    <img :src="filter" alt="filter" class="filter_img" @click="filterClick" v-show="router.currentRoute.path === '/new' ||
        router.currentRoute.path === '/sale'" />
<Teleport to="body">
      <TheFiltersModal
        :openFilterModal="openFilterModal"
        :filterListByFiltersForm="filterListByFiltersForm"
        @close="openFilterModal = false"
      />
    </Teleport>
    <img v-show="router.currentRoute.path === '/new' ||
        router.currentRoute.path === '/sale'" :src="sort" alt="sort" class="img_sort" @click="toggleSortType"/>
  </div>
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
.img_sort{
  width: 31px;
  height: 31px;
}
.filter_img{
    width: 21px;
    height: 21px;
    align-self: center;
  }
.title_wrapper{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 7px;
}
.title {
  text-align: center;
  position: relative;
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
  border: 1.7px solid  #c2c1c1;
  border-radius: 10px;
  background-color: white;
}

.no-result {
  text-align: center;
  font-size: 27px;
  color: #b49696;
  margin: auto;
}
/*DarkMode*/

.dark-mode .title, .dark-mode .show_more, .dark-mode .no-result{
  /* color: #b49696; */
  color: rgb(181, 173, 173);
}
.dark-mode li{
background-color: transparent;
border: 1.7px solid  #2d2a2a;
color: rgb(181, 173, 173);
}

/*DarkMode*/
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
