<script lang="ts">
import { productsApi } from "../api-requests/products-api";
import { productsEnApi } from "../api-requests/products-api-en";
export default {
  props:{
    searchString:String,
  },
  created() {
    this.getSaleProducts();
    this.getNewProducts();
    this.getBestsellerProducts();
    // console.log(this.currentLocale)
  },
  // beforeUpdate(){
  //   this.getSaleProducts();
  //   this.getNewProducts();
  //   this.getBestsellerProducts();
  // },
beforeUpdate(){
  this.currentLocale =  this.$i18n.locale
},
  data() {
    return {
        productsListSale:[],
        productsListNew:[],
        productsListBestseller:[],
        currentLocale: this.$i18n.locale, // Сохраняем текущий язык в data компонента
  
    };
  },
  methods: {
    async getSaleProducts() {
    const saleProducts = await productsApi.getAllSaleProducts(this.searchString as string,this.$i18n.locale );
      this.productsListSale = saleProducts;
    },
    async getNewProducts() {
        const newProducts = await productsApi.getAllNewProducts(
          this.searchString as string,
          this.$i18n.locale 
        );
        this.productsListNew = newProducts;
    },
    async getBestsellerProducts() {
        const bestsellerProducts = await productsApi.getAllBestsellerProducts(this.searchString as string,this.$i18n.locale );
      this.productsListBestseller = bestsellerProducts;
    },
    handleLocaleChange() {
      // Вызывайте здесь вашу логику, которую вы хотите выполнить при изменении локализации.
      // Например, перерисовка компонента или обновление данных.
      // this.currentLocale = newLocale;
      this.getSaleProducts();
    this.getNewProducts();
    this.getBestsellerProducts(); // Пример: загрузка данных заново
    },
  },
  watch: {
    currentLocale: async function(){
      this.getSaleProducts();
    this.getNewProducts();
    this.getBestsellerProducts();
    }, 

  
  },

};
</script>

<template>
  <div>
    <TheList :titleProps="$t('listsTitle1')" :itemList="productsListSale" />
    <TheList :titleProps="$t('listsTitle2')" :itemList="productsListNew" />
    <TheList :titleProps="$t('listsTitle3')" :itemList="productsListBestseller" />
  </div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap:10px;
}
</style>
