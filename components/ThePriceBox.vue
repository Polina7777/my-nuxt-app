<script>
export default {
  props: {
    amount:Number|String
  },
};
</script>
<template>
  <div class="amount_box">
    <p class="title">{{ $t('basketTitle')}}</p>
    <div>
      <p>{{ `${$t('basketString1')} ${amount} p.` }}</p>
      <p>{{ `${$t('basketString2')}    0 p.` }}</p>
      <p>{{ `${$t('basketString3')} ${amount} p.` }}</p>
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