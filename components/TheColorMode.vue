<template>
  <div>
    <button
      v-show="color !== $colorMode.preference"
      v-for="color of colors"
      :key="color"
      @click="$colorMode.preference = color"
      class="mode"
    >
      <img   v-show="$colorMode.preference === 'light'" :src="dark" />
      <img   v-show="$colorMode.preference === 'dark'" :src="light" />
    </button>
  </div>
</template>
<script>
import dark from "../static/images/dark.svg";
import light from "../static/images/light.svg";
export default {
  data() {
    return {
      dark: dark,
      light: light,
      // colors: ['system', 'light', 'dark', 'sepia']
      colors: ["light", "dark"],
    };
  },
};
</script>
<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
img{
  width: 20px;
  height: 20px;
}
.dark-mode body {
  /* background-color: #091a28; */
  /* background-color: rgb(35, 59, 59);
  color: #000000; */
  /* font-weight: 500; */
  /* color: #ebf4f1; */
  background-color:  rgb(85, 85, 85);
}

/* .dark-mode button, */

/* .dark-mode li {
  background-color: rgb(6, 89, 89);
    color: #ffffff;
    font-size: 14px;
  padding: 10px 35px;
} */
.mode {
  padding: 7.7px 33px;
align-items: center;
  background-color: #efe1e1;
}
.dark-mode .mode {
  align-items: center;
  /* background-color: rgb(6, 89, 89); */
  background-color: rgb(168, 138, 134);

  color: #ffffff;
  padding: 7.7px 33px;
}
.dark-mode .mode:hover,
.dark-mode .mode:active {
  align-items: center;
  /* background-color: rgb(13, 121, 121); */
  /* background-color: rgba(254, 190, 190, 0.42); */
  background-color: rgb(131, 110, 107);
  color: #ffffff;
  padding: 7.7px 33px;
}
.mode:active,
.mode:hover {
  background-color: rgb(131, 110, 107);
  padding: 7.7px 33px;
}
</style>
