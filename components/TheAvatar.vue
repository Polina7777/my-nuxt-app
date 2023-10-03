<script>
import { userApi } from '../api-requests/user-api';

export default {
    // props:{
    //     userId:Number,
    // },
  methods: {
    uploadAvatar(event) {
        const userData = localStorage.getItem('userData')
        const userInfo = JSON.parse(userData)
      const file = event.target.files[0];
    //   const uploadImg = userApi.changeUserData(userInfo.id,"avatar",file)
    //   console.log(uploadImg)
      // Вы можете использовать этот файл для загрузки на сервер или хранить локально.
      // Далее сохраните URL аватарки в данных пользователя.
    },
  },
};
</script>

<template>
    
      <p>Загрузить аватарку</p>
      <div class="avatar_wrapper">
      <input type="file" @change="uploadAvatar" />
    </div>
  </template>
  

<style scoped>
/*DarkMode*/
/* .dark-mode .avatar_wrapper{
    background-color: rgb(36, 35, 35);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
} */
.dark-mode input {
  background-color: transparent;
  border: 2px solid rgb(163, 158, 158);
  color: rgb(103, 101, 101);
  margin: 5px 0;
}
.dark-mode input::placeholder {
  color: rgb(135, 130, 130);
}
/*DarkMode*/
/* .avatar_wrapper{
    border: 2px solid #b49696;
  background: #efe1e1;
  border-radius: 7px;
} */
input {
  margin: 20px;
  background: #efe1e1;
  padding: 11px;
  min-width: 150px;
  width: 270px;
    /* height: 180px;
    border-radius: 50%; */
  border-color: transparent;
  position: relative;
}
p{
    font-size: 17px;
}
</style>