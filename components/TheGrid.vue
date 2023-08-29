<script setup>
const gridArr = new Array(11)
</script>
<template>
    <div class="archive">
<article  v-for="(item,index) in gridArr" :key="index" class="article">
    <li></li>
</article>
</div>
</template>
<style>
.archive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
}
.article{
    background: rgb(158, 231, 231);
}
/* Extra-wide grid-posts */
.article:nth-child(31n + 1) {
  grid-column: 1 / -1;
}
.article:nth-child(16n + 2) {
    background: rgba(128, 0, 64, 0.8);
  grid-column: -3 / -1;
}
.article:nth-child(16n + 10) {
  grid-column: 1 / -2;
  /* background: rgba(128, 0, 64, 0.8); */
}
.article:nth-child(8n + 2) {
  /* background: rgba(128, 0, 64, 0.8); */
  /* Other shared syling */
}

/* Single column display for phones */
@media (max-width: 459px) {
  .archive {
    display: flex;
    flex-direction: column;
  }
}
</style>