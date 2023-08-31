<script>
export default {
  props: {
    amount:Number|String
  },
  data() {
    return {
        text: "Стоимость",
      string1: "Товары .................................. ",
      string2: "Скидка .................................. ",
      string3: "Итого ................................... ",
      
    };
  },
};
</script>
<template>
  <div class="amount_box">
    <p class="title">{{ text }}</p>
    <div>
      <p>{{ `${string1} ${amount} p.` }}</p>
      <p>{{ `${string2}    0 p.` }}</p>
      <p>{{ `${string3} ${amount} p.` }}</p>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.amount_box{
  padding: 20px;
}
p {
  padding: 10px;
  text-align: center;
}
button{
    background: #EFE1E1;
    margin: 20px;
}

.button:hover,
.button:active {
  background: #B49696;
}

</style>