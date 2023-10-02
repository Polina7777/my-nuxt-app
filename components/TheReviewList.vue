<script>
import { reviewApi } from "../api-requests/reviews-api";
import { userApi } from "../api-requests/user-api";
export default {
  props: {
    productId: Number,
    card:Object,
    getCardData:Function,
  },
  data() {
    return {
      reviews: [],
      openReviewModal: false,
      openTextModal: false,
    };
  },
//   updated(){
//     this.getCardData()
//   },
  mounted() {
    // Выполните API запрос к Strapi для получения отзывов
    // this.getReviews();
  },
  computed:{
 card(){
return this.card;
  }
},

  methods: {
    async createReview(reviewText) {
      const userData = localStorage.getItem("userData");
      const data = JSON.parse(userData);
      const userJwt = localStorage.getItem("jwt");;
      if (userData) {
        const review = await reviewApi.createNewReview(
          data.username,
          reviewText
        );
        const setReview = await reviewApi.setReview(this.productId,review)
        const setReviewUser = await reviewApi.setReviewToUser(review.id,data.id,userJwt)
        // const setReviewToUser = await userApi.setReviewForUser(data.id,review.id,userJwt)
        console.log(review,setReview,setReviewUser)
        this.openReviewModal = false;
        this.openTextModal = true;
        this.getCardData()
        setTimeout(() => {
          this.openTextModal = false;
        }, 1700);
      }
    },
  },

};
</script>

<template>
  <div :key="card">
    <h2>Отзывы о продукте</h2>
    <ul v-if="card.attributes.reviews.data.length">
      <li v-for="review in card.attributes.reviews.data" :key="review.id">
        <div class="avatar">Avatar</div>
        <div class="review_wrapper">
          <p class="username">{{ review.attributes.username }}</p>
          <!-- <p>{{ review.rating }}/5 звёзд</p> -->
          <p>{{ review.attributes.review_text }}</p>
        </div>
      </li>
    </ul>
    <p v-if="!card.attributes.reviews.data.length" class="no-result">No reviews!</p>
    <button class="add" @click="openReviewModal = true">Add review</button>
  </div>
  <Teleport to="body">
    <TheReviewModal
      :openReviewModal="openReviewModal"
      :createReview="createReview"
      @close="openReviewModal = false"
    />
  </Teleport>
  <Teleport to="body">
    <TheTextModal
      :openTextModal="openTextModal"
      :message="'Your review has been registered!'"
      @close="openTextModal = false"
    />
  </Teleport>
</template>

<style scoped>
/*DarkMode*/
.dark-mode .form_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: rgb(181, 173, 173);
}
.dark-mode input {
  background-color: transparent;
  border: 2px solid rgb(163, 158, 158);
  color: rgb(181, 173, 173);
}
.dark-mode input::placeholder {
  color: rgb(181, 173, 173);
}
.dark-mode li {
  background-color: rgb(52, 49, 49);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
/* .dark-mode li:active, .dark-mode li:hover{
      background-color: rgb(131, 110, 107);
      color: rgb(181, 173, 173);
    } */
.dark-mode button:active,
.dark-mode button:hover {
  background-color: rgb(131, 110, 107);
}
.dark-mode .add {
  background-color: rgb(28, 27, 27);
  border: 1.7px solid #2d2a2a;
  color: rgb(181, 173, 173);
}
/*DarkMode*/
.review_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* .form_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   width: 300px;
   padding: 10px 0;
   margin-top: 25px;
   border-radius: 10px;
  } */
/* .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: -webkit-center;
  padding: 20px;
}
.no-result{
    font-size: 21px;
}
.field_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
}

.username {
  font-size: 21px;
  font-weight: 700;
  padding: 0;
}
.add {
  background: #efe1e1;
  border: 1px solid #b49696;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 19px;
  color: white;
  align-self: center;
  padding: 10px 31px;
}
.add:hover {
  background: #b49696;
}
.radio_inputs {
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.price {
  flex-direction: column;
  text-align: start;
  align-items: start;
}
input {
  margin: 0;
  background: #efe1e1;
  padding: 7px;
  border-radius: 10px;
  border-color: transparent;
  width: 250px;
  min-width: 210px;
  position: relative;
  border: 2px solid #b49696;
}
.radio {
  margin: 10px;
  width: 10px;
  min-width: 10px;
}
p {
  font-size: 17px;
}
ul {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  list-style: none;
  text-decoration: none;
  align-items: self-start;
  padding: 0;
  width: 100%;
  min-width: 320px;
}
li {
  display: flex;
  flex-direction: row;
  gap: 20px;
  border: 2px solid #b49696;
  background: #efe1e1;
  border-radius: 7px;
  /* width: 250px; */
  min-width: 230px;
  padding: 10px;
  color: white;
  font-size: 11px;
  width: 70%;
}
.avatar {
  background-color: #dcc1c1;
  border: 1.7px solid #8e7676;
  color: #8e7676;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
/* li:hover, */
a:hover {
  color: #8e7676;
  background: #f9ecec;
}
a {
  text-decoration: none;
  color: var(--text-color);
}

button:hover,
button:active {
  background: #b49696;
}
@media (max-width: 350px) {
  div {
    width: 100%;
  }

  .form_wrapper {
    padding: 10px;
  }
  .form {
    width: 100%;
  }
  .radio_inputs {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }
  li {
    border: 2px solid #b49696;
    background: #efe1e1;
    border-radius: 7px;
    width: 250px;
    padding: 11px;
    color: white;
    font-size: 17px;
  }
  .username {
    padding-top: 20px;
    font-size: 21px;
  }
  .input {
    min-width: 250px;
    width: 250px;
  }
}
</style>
