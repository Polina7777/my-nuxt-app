<script>
import { userApi } from "../api-requests/user-api";

export default{

    data(){
        return{
            userData:JSON.parse(localStorage.getItem('userData')),
        }
    },
    methods:{
        async getUser(){
      this.userInfo = JSON.parse(localStorage.getItem('userData'))
  const user = await userApi.getUsersById(this.userInfo.id);
  this.userData = user;
  console.log(this.userData)
    },
    }
}
</script>

<template>
    <div class="profile_wrapper">
        <p class="title">{{ $t('profile.title') }}</p>
        <div class="hello_wrapper">
        <p class="hello">{{`${$t('profile.hello')}, ${userData.username} !`}}</p>
        <img class="hello_image" src="https://www.svgrepo.com/show/402888/waving-hand.svg" />
    </div>
        <div class="grid_wrapper">
        <p class="orders">{{ $t('profile.orders') }}</p>
        <p class="status">{{ $t('profile.status') }}</p>
    </div>
    </div>
</template>
<style scoped>
.profile_wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: #efe1e1;
    border-radius: 20px;
    color: white;
    width: 80%;
    padding: 20px;
    margin: auto;
}
p{
    text-align: center;
    justify-content: center;
}
.hello_wrapper {
    display: flex;
    flex-direction: row;
    gap:20px;
}

.grid_wrapper{
  /* grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense; */
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-flow: dense; 
  /* padding-top: 20px; */
  width: 100%;
  border: 1px solid white;
  border-radius: 20px;
}
/* .status {
  background-color: lime;
}

.orders {
  background-color: yellow;
} */
</style>