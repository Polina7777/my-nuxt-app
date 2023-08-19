
<script lang="ts">

export default {
    props:{
      card:Object
    },
  data() {
    return {
    addText:'В корзину',
    deleteText:'Добавлено'
    };
  },
  methods:{
    addToBacket(){
 console.log('add to basket')
    },
    deleteFromBacket(){
 console.log('delete from backet')
    }
  }
};
</script>

<template>
  <div>
    <img :src="card.image" alt="card-image"/>
    <p>{{ card.description }}</p>
    <p>{{ card.price }}</p>
    <button @click="addToBacket">{{ addText }}</button>
    <button @click="deleteFromBacket">{{ deleteText }}</button>
</div>
</template>
