<script  lang="ts">

// const route = useRoute();
// const router = useRouter();
export default{
  props:{
    authRequiredAuthClick: Function,
  authRequiredRegClick: Function,
  },
  data(){
return{

}
  },
  methods:{
    openReg(){
      // if(this.openRegModal && this.closeModal){
      //   this.openRegModal()
      //   this.closeModal()
      // }
      if(this.authRequiredRegClick){
      this.authRequiredRegClick()
      }
    },
    openAuth(){
      // if(this.openAuthModal && this.closeModal){
      //   this.openAuthModal()
      //   this.closeModal()
      // }
      if(this.authRequiredAuthClick){
       this.authRequiredAuthClick()
      }
    }
  }
}
</script>
<template>
    <div class="form_wrapper">
        <p class="title">{{ $t('authorizationRequired')}}</p>
    <button @click="openAuth"> {{ $t('authTitle') }}</button>
    <button @click="openReg"> {{ $t('regTitle') }}</button>
    </div>
  </template>
  
<style scoped>
/*DarkMode*/

.dark-mode .title{
  color: rgb(181, 173, 173);
}

.dark-mode button{
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
.dark-mode button:active,
.dark-mode button:hover {
  background-color: rgb(131, 110, 107);
}
/*DarkMode*/
.form_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
align-items: center;
    padding: 20px 0 20px 20px;
    width: 100%;
}

.form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: -webkit-center;
}

.title{
    font-size: 27px;
}
button{
 background: #efe1e1;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 19px;
  color: white;
  align-self: center;
  padding: 15px 20px;
  }
p {
  padding: 11px;
  font-size: 21px;
}


button:hover,
button:active {
  background: #b49696;
}
@media (max-width: 350px) {
  div{
    width: 100%;
  }
  .form_wrapper{
    padding: 10px;
  }
.title{
  padding-top: 20px;
  font-size: 21px;
}

}
</style>