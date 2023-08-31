<script>
import method1 from '../static/images/method1.svg';
import method2 from '../static/images/method2.svg';
import method3 from '../static/images/method3.svg';
import method4 from '../static/images/method4.svg';
import adresses from '../static/images/adresses.svg';
export default{
    data(){
        return{
            methods:[method1,method2,method3,method4],
            adresses:adresses,
            title:'Доставки и оплата',
            text:'Способы доставки и оплаты',
        }
    }
}
</script>

<template>
   
    <NuxtLayout name="custom">
        <TheHeader/>
    <div>
        <p>{{ title }}</p>
        <span>{{ text }}</span>
    <ul class="grid-box">
        <li v-for="(item, index) in methods" :key="index">
        <img :src="item" alt="method"/>
        </li>
    </ul>
    <img class="adresses" :src="adresses" alt="adresses"/>
</div>
    <!-- <TheFooter/> -->
    </NuxtLayout>
</template>

<style scoped>
div{
    display: flex;
flex-direction: column;
align-items: center;
padding: 30px;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 30px; */
    width: 70%;
    align-items: center;
    margin: 0 auto;
}
img{
width: 300px;
height: 300px;
}
p{
    font-size: 27px;
    padding-bottom: 47px;
}
span{
    font-size: 21px;
}
.adresses{
    width: 300px;
height: 100px;

}
@media (max-width:610px) {

.grid-box{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 17px;
  grid-auto-flow: dense;
    gap:0;
    padding: 0;
    width: 100%;
} 

div{
padding: 10px;
}
img{
width: 200px;
height: 200px;
}
p{
    font-size: 17px;
}
span{
    font-size: 15px; 
}

}
</style>