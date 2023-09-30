<script>
import logo from "../static/images/logo.svg";
import logoDark from '../static/images/logo-header.svg'
// import TheParallax4 from './TheParallax4.vue';
export default {
  props: {
    productsListBestSeller: Array,
  },
  // components: { TheParallax4 }
  data() {
    return {
      logo: logo,
      logoDark: logoDark,
    };
  },
};
// const props = defineProps(['productsListBestSeller'])
</script>

<template>
  <div class="container">
    <!-- <h1>Mountain Star Zlatibor</h1> -->
    <!-- <img :src="logo" class="logo" alt="logo" /> -->
    <h1 class="title">{{ $t("aboutBoxTitle") }}</h1>
    <!-- <p>Zlatibor is a mountain of exceptional beauty whose special geographical properties have made this mountain a real gem of western Serbia.</p> -->
    <p class="text1">{{ $t("aboutBoxText1") }}</p>
    <p class="text1">{{ $t("aboutBoxText2") }}</p>
  </div>
  <!-- <div class="blank"></div> -->

  <div class="container second">
    <h2>{{ $t("listsTitle3") }}</h2>
    <!-- <TheParallax4 :productsListBestSeller = "productsListBestSeller" /> -->

    <!-- <div class="item">
      <div class="img img-first"></div>
      <div class="card">
        <h3>Rock climbing</h3>
        <p>The goal is to reach the summit of a formation or the endpoint of a usually pre-defined route without falling</p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <div class="item">
      <div class="img img-second"></div>
      <div class="card">
        <h3>Caving</h3>
        <p>Exploring underground through networks of tunnels and passageways, which can be natural or artificial.</p>
        <a href="#">Learn more</a>
      </div>
    </div>
    <div class="item">
      <div class="img img-third"></div>
      <div class="card">
        <h3>Parachuting</h3>
        <p>Jumping from an aeroplane and falling through the air before opening your parachute.</p>
        <a href="#">Learn more</a>
      </div>
    </div> -->
    <ul>
      <li
        v-for="(item, index) in productsListBestSeller"
        :key="index"
        class="item"
      >
        <TheCard :card="item" />
      </li>
    </ul>
  </div>

  <!-- <div class="blank"></div> -->
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap");

:root {
  --color: #333;
}

body {
  font-family: "Red Hat Text", sans-serif;
}

.container {
  text-align: center;
  color: var(--color);
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url(https://images.unsplash.com/photo-1519120944692-1a8d8cfc107f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80); */
  /* background-image: url(https://i.pinimg.com/564x/46/6d/99/466d99e79593f5964bb65ca6fc7efd5c.jpg); */
  /* background-image: url(https://i.pinimg.com/564x/6b/ea/71/6bea71548af1155a1bce9ba68f671684.jpg); */
  /* background-image: url(https://images.unsplash.com/photo-1558470570-c9a5a5ade867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80); */
  background-image: url(https://images.unsplash.com/photo-1619185819360-32d8157a3721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80);
  background-size: cover;
  background-position: center;
  /*  this is where the magic happens:  */
  background-attachment: fixed;
  color: white;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
  /* text-shadow: 3px 2px 7px rgb(255, 255, 255), 0 0 1em rgb(178, 178, 184), 0 0 0.9em rgb(184, 153, 169); */
}

p {
  max-width: 57ch;
  line-height: 1.9;
  font-size: 23px;
  /* text-shadow: 3px 2px 7px rgb(255, 255, 255), 0 0 1em rgb(178, 178, 184), 0 0 0.9em rgb(184, 153, 169); */
  padding: 1em;
}

a {
  display: inline-block;
  padding: 1em 3.5em;
  background-color: var(--color);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3em;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 0.875rem;
}

/* .blank,
.other {
  width: 100%;
  min-height: 60vh;
  background-color: var(--color);
} */

.second {
  /* background-image:url(https://images.unsplash.com/photo-1514496959998-c01c40915c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80); */
  /* background-image: url(https://i.pinimg.com/originals/f8/99/fe/f899fe0c4793bc00ec70f757451db07b.jpg); */
  /* background-image: url(https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3538&q=80); */
  background-image: url(https://images.unsplash.com/photo-1464376810568-596bdd5a1897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3254&q=80);
  background-attachment: fixed;
  height: 770px;
  display: flex;
  flex-direction: column;
}

h3 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1em;
}

.card > a {
  margin-bottom: 2em;
}

.item {
  display: flex;
  max-width: 320px;
  background-color: white;
  color: #333;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5em;
  -webkit-box-shadow: 0px 29px 38px -15px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 29px 38px -15px rgba(0, 0, 0, 0.43);
  box-shadow: 0px 29px 38px -15px rgba(0, 0, 0, 0.43);
}

.logo{
  width: 300px;
  height: 300px;
}
.img {
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: 0.3em;
}

.img-first {
  background-image: url(https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80);
}

.img-second {
  background-image: url(https://images.unsplash.com/photo-1628746404106-4d3843b231b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60);
}

.img-third {
  background-image: url(https://images.unsplash.com/photo-1632853073412-782bf0279d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
}

.second {
  /* flex-direction: row; */
  gap: 1.6em;
}
</style>
