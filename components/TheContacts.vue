<script>
import contacts1 from '../static/images/contacts1.svg';
import contacts2 from '../static/images/contacts2.svg';

export default{
    data(){
        return{
            contacts:[contacts1,contacts2],
            title:'Контактные данные',
            text:'Остались вопросы? Напишите нам в любую социальную сеть и мы с удовольствием ответим!'

        }
    }
}
</script>

<template>
    <TheHeader/>
    <div>
    <p class="contacts_title">{{ title }}</p>
    <p class="contacts_text">{{ text }}</p>
    <ul>
        <li v-for="(item, index) in contacts" :key="index">
        <img :src="item" alt="method"/>
        </li>
    </ul>
  </div>
    <TheFooter/>
</template>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px;
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    flex-wrap: wrap;
    padding: 30px;
    margin: 0 auto;
}
img{
width: 300px;
height: 300px;
}
.contacts_title{
    font-size: 21px;
    padding: 20px;
}
.contacts_text{
    background:#EFE1E1;
    /* width: 87%; */
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 15px;

}
</style>