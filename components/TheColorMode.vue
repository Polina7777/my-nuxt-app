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
  /* color: rgba(0, 0, 0, 0.8); */
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
  /* background-color:  rgb(85, 85, 85); */
  /* background-color: rgb(0, 0, 0); */
  background-color: rgb(19, 19, 19);
  /* color: rgb(98, 98, 98); */
  color: rgb(181, 173, 173);
  font-weight: 600;
}

.mode {
  padding: 7.7px 33px;
align-items: center;
  background-color: #efe1e1;
}

.mode:active,
.mode:hover {
  background-color: rgb(131, 110, 107);
  padding: 7.7px 33px;
}
/*DarkMode*/
.dark-mode .mode {
  align-items: center;
  /* background-color: rgb(6, 89, 89); */
  /* background-color: rgb(168, 138, 134);
  color: #ffffff; */
  background-color: transparent;
    border: 1.7px solid  #2d2a2a;
    color: rgb(98, 98, 98);
  padding: 7.7px 33px;
}
.dark-mode .mode:hover,
.dark-mode .mode:active {
  align-items: center;
  /* background-color: rgb(13, 121, 121); */
  /* background-color: rgba(254, 190, 190, 0.42); */
  /* background-color: rgb(131, 110, 107); */
  background-color: rgb(131, 110, 107);
  color: #ffffff;
  padding: 7.7px 33px;
}
/*DarkMode*/

</style>
