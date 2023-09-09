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
  console.log(this.currentLocale)
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
      if(this.$i18n.locale === 'ru'){
    console.log(this.$i18n.locale)
    const saleProducts = await productsApi.getAllSaleProducts(this.searchString as string);
      this.productsListSale = saleProducts;
  }else{
    console.log(this.$i18n.locale)
    const saleProducts = await productsEnApi.getAllSaleProductsEn(this.searchString as string);
      this.productsListSale = saleProducts;
  }
      // const saleProducts = await productsApi.getAllSaleProducts(this.searchString as string);
      // this.productsListSale = saleProducts
    },
    async getNewProducts() {
      if (this.$i18n.locale === "ru") {
        const newProducts = await productsApi.getAllNewProducts(
          this.searchString as string
        );
        console.log(newProducts)
        this.productsListNew = newProducts;
      } else {
        console.log(this.$i18n.locale);
        const newProducts = await productsEnApi.getAllNewProductsEn(
          this.searchString as string
        );
        console.log(newProducts)
        this.productsListNew = newProducts;
      }
      // const newProducts = await productsApi.getAllNewProducts(this.searchString as string);
      // this.productsListNew = newProducts;
    },
    async getBestsellerProducts() {
      if (this.$i18n.locale === "ru") {
        const bestsellerProducts = await productsApi.getAllBestsellerProducts(this.searchString as string);
      this.productsListBestseller = bestsellerProducts;
      } else {
        console.log(this.$i18n.locale);
        const bestsellerProducts = await productsEnApi.getAllBestsellerProductsEn(this.searchString as string);
      this.productsListBestseller = bestsellerProducts;
      }
      // const bestsellerProducts = await productsApi.getAllBestsellerProducts(this.searchString as string);
      // this.productsListBestseller = bestsellerProducts;
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
      console.log(this.currentLocale)
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
    <!-- <TheList titleProps="Акции" :itemList="productsListSale" />
    <TheList titleProps="Новинки" :itemList="productsListNew" />
    <TheList titleProps="Хиты продаж" :itemList="productsListBestseller" /> -->
  </div>
</template>
<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap:10px;
}
</style>
