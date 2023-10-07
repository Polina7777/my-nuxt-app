<script lang="ts">
import { mediaApi } from "../api-requests/media-api";
import { userApi } from "../api-requests/user-api";

import axios from "axios";

export default {
  props: {
    userData: Object,
    avatar: Object,
  },
  mounted() {
    //   if(this.avatar){
    //  console.log(this.avatar.attributes.avatar.data.attributes.url)}
    this.getUserAvatar();
  },
  created() {
    this.getUserAvatar(); 
  },
  data() {
    return {
      userInfo:this.userData,
      avatarData: null,
      baseUrl: "http://localhost:1337/api",
    };
  },
  methods: {
    async uploadAvatar(event) {
      console.log(this.userData);
      const file = event.target.files[0];
      const token = localStorage.getItem("jwt");
      // const avatar = await mediaApi.createAvatarImage(
      //   file,
      //   token,
      //   this.userData.avatar_collection.id
      // );
      // console.log(avatar);
    },
    async getUserAvatar() {
      console.log(this.userInfo);
      if (this.userInfo) {
        console.log(this.userInfo.avatar_collection.id);
        const avatar = await mediaApi.getAvatarCollectionById(
          this.userInfo.avatar_collection.id,
          this.$i18n.locale
        );
        this.avatarData = avatar;
        console.log(this.avatarData)
      }
    },

    //   let result = await fetch("http://localhost:1337/api/upload/", {
    //     headers: {
    //       // "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer:${token}`,
    //     },
    //     method: "POST",
    //     // body:JSON.stringify(dataA)
    //     // "field":"image",
    //     //   "ref":"reviews",
    //     //   "refId": 1,
    //     //   "field":"image",
    //     //   "files":file
    //    body: formData
    //     // timeout: 30000,
    //   }).then((response) => response.json());
    //   console.log(result);
    // },
    //}
    // let result = await fetch("http://localhost:1337/api/upload", {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer:${token}`,
    //     },
    //     method: "PUT",
    //     // body:JSON.stringify(dataA)
    //     // "field":"image",
    //     //   "ref":"reviews",
    //     //   "refId": 1,
    //     //   "field":"image",
    //     //   "files":file
    //    body: formData
    //     // timeout: 30000,
    //   }).then((response) => response.json());
    //   console.log(result);
  },
};
</script>

<template>
  <!-- <ClientOnly>
    {{`${baseUrl}${avatarData?.attributes.avatar.data.attributes.formats.small.url}`}}
  <img :url="`${baseUrl}${avatarData.attributes.avatar.data.attributes.formats.small.url}`" alt="avatar"/>
</ClientOnly> -->
  <p>Загрузить аватарку</p>
  <div class="avatar_wrapper">
    <input type="file" name="files" @change="uploadAvatar" />
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
p {
  font-size: 17px;
}
</style>
