<script>
import { favoritesApi } from "../api-requests/favorites-api";
import { userApi } from "../api-requests/user-api";
export default {
  created() {
    this.getUser();

        // this.getFav()

  },
  data() {
    return {
      favoritesList: [],
      // title: "Favorites",
      title:this.$t('fav'),
      userData: null,
    };
  },
  methods: {
    async getFav(id) {
      const favs = await favoritesApi.getFavorites(id);
      this.favoritesList = favs;
    },
    async getUser() {
      this.userInfo = JSON.parse(localStorage.getItem("userData"));
      if(this.userInfo){
        const user = await userApi.getUsersById(this.userInfo.id);
      this.userData = user;
      this.getFav(this.userData.favorite.id)
      }

    },
  },
};
</script>
<template>
  <div>
<TheHeader/>
    <TheList :title-props="title" :itemList="favoritesList" />
  </div>
</template>
