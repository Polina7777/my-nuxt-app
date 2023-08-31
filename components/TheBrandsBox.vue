
<script lang="ts">
import brand1 from '../static/images/brand1.svg';
import brand2 from '../static/images/brand2.svg';
import brand3 from '../static/images/brand3.svg';
import brand4 from '../static/images/brand4.svg';
import brand5 from '../static/images/brand5.svg';
import brand6 from '../static/images/brand6.svg';
export default {
  data() {
    return {
    title:'Представленные бренды',
    text:'Показать все бренды',
     brand1:brand1,
     brand2:brand2,
     brand3:brand3,
     brand4:brand4,
     brand5:brand5,
     brand6:brand6,
    brands:[ brand1,brand2,brand3,brand4,brand5,brand6],
    };
  },
  methods:{
    navigateTo(link:any){
        this.$router.push(link)
    }
  }
};
</script>

<template>
  <div>
    <p class="title">{{ title }}</p>
    <ul>
    <li v-for="(item,index) in brands" :key="index">
        <img :src="item" alt="brand-image"/>
    </li>
  </ul>
    <p class="show_more">{{ text }}</p>
</div>
</template>
<style scoped>
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
img{
  width: 200px;
  height: 200px;
}
p{
  text-align: center;
}
.show_more {
  text-align: end;
  padding: 20px;
}
@media (max-width: 610px) {
  ul {
    flex-wrap: nowrap;
overflow-y: scroll;
justify-content: flex-start;
}
}

</style>