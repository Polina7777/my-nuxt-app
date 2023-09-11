
<script >

export default{
  props:{
    currentLoc:String,
  },
  updated() {
  this.currentLocale = this.$i18n.locale
},
data(){
  return{
    currentLocale:this.$i18n.locale
  }
},
watch: {
    currentLocale: async function(){
      console.log(this.currentLocale)
     this.navScheme1=[
    {
      title: this.$t('navScheme1Title1'),
      navigate: "/paymethods",
    },
    {
      title: this.$t('navScheme1Title2'),
      navigate: "/questions",
    },
    {
      title: this.$t('navScheme1Title3'),
      navigate: "/contacts",
    },
  ]
 this.navScheme2=[
    {
      title: this.$t('navScheme2Title1'),
      navigate: "/",
      image: plus,
    },
    {
      title: this.$t('navScheme2Title2'),
      navigate: "/new",
      image: null,
    },
    {
      title: this.$t('navScheme2Title3'),
      navigate: "/sale",
      image: null,
    },
    {
      title: this.$t('navScheme2Title4'),
      navigate: "/giftcard",
      image: null,
    },
  ]
    }
  },
}
</script>
<template>
  <div >
    <slot />
  </div>
  <TheFooter :currentLoc="currentLoc"/>
</template>
<style>
* {
  box-sizing: border-box;
}
header{
  align-items: center;
}
p {
  font-size: 17px;
  margin: 0;
}
header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.header-wrapper{
  width: 87%;
}

.wrapper,
.contacts_wrapper,
.input_wrapper,
.popup_wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.popup_wrapper {
  position: absolute;
  left: 11%;
  top: 28%;
  gap: 0;
  z-index: 100;
  border: 1px solid rgb(191, 188, 188);
  border-top-right-radius:10px ;
  border-bottom-right-radius:10px ;
}
.close {
  padding: 5px 8px;
  position: absolute;
  left: 40.7%;
  top: 28%;
  background: transparent;
  color: gray;
  z-index: 100;
}
.search_img{
  position: absolute;
  left: 75%;
}
.popup_item {
  font-size: 15px;
  margin: 0;
}

#popup_list_one {
  font-size: 20px;
  min-height: 350px;
  gap: 20px;
}

#popup_list_one_item {
  font-size: 20px;
}
#popup_list_two_item {
  font-size: 11px;
}

#popup_list_two {
  background: white;
  text-align: start;
  max-height: 350px;
  padding: 0 20px;
}

.wrapper {
  justify-content: space-between;
}
.logo-header {
  width: 30%;
  min-width: 200px;
  height: 83px;
}
img {
  width: 21px;
  height: 21px;
}
.input_wrapper {
  width: 50%;
  position: relative;
}
.search_input, input{
  background:#efe1e1;
  padding: 7px;
  border-radius: 10px;
  border-color: transparent;
  width: 71%;
  min-width: 250px;

}
.popup_list {
  display: flex;
  flex-direction: column;
  background: #efe1e1;
  text-align: start;
  gap: 10px;
  font-size: 15px;
  padding: 20px;
  margin: 0;
  min-height: 350px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  text-decoration: none;
  gap: 20px;
  align-items: center;
  padding: 0 10px;
}
li{
  text-align: center;
}
li:hover, a:hover{
  color: #b49696;
}

a {
  text-decoration: none;
  color: var(--text-color);
}
button,
.popup_button {
  padding: 15px 40px;
  font-size: 17px;
  border-radius: 20px;
  border: none;
}
.button {
  background-color: white;
}
.popup_button {
  background-color: #efe1e1;
  color: white;
  padding-right: 60px;
}
button:active,
.popup_button {
  background-color: #b49696;
}
.plus_button {
  position: relative;
}
.plus {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 115px;
  top: 15px;
}
.show_more {
  font-size: 14px;
}
.title {
  font-size: 27px;
}
@media (max-width: 800px) {
  .wrapper{
    flex-wrap: wrap;
    justify-content: center;
  }  
}
@media (max-width:610px) {
  p,a {
  font-size: 14px;
}
.title{
  font-size: 21px;
}
.navigation{
  flex-wrap: nowrap;
justify-content: flex-start;
gap: 0;
overflow: scroll;
width: 90%;
}

  
}

</style>