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
            adresses:adresses
        }
    }
}
</script>

<template>
    <TheHeader/>
    <ul>
        <li v-for="(item, index) in methods" :key="index">
        <img :src="item" alt="method"/>
        </li>
        <img class="adresses" :src="adresses" alt="adresses"/>
    </ul>

    <TheFooter/>
</template>

<style scoped>
ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 30px;
    width: 70%;
    /* margin: 0 auto; */
    /* margin: 0 auto; */
}
img{
width: 300px;
height: 300px;
}
.adresses{
    width: 300px;
height: 100px;

}
</style>