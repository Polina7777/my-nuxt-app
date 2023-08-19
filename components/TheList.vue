
<script lang="ts">
import { TheCard } from '.nuxt/components';

export default {
    props: {
        titleProps: String,
        itemList: Array
    },
    data() {
        return {
            title: this.titleProps,
            text: `Показать все ${this.titleProps?.toLowerCase()}`,
        };
    },
    methods: {
        navigateTo(link: any) {
            this.$router.push(link);
        }
    },
    components: { TheCard }
};
</script>

<template>
  <div>
    <p class="title">{{ title }}</p>
    <ul v-for="(item,index) in itemList" :key="index">
       <TheCard :card="item"/>
    </ul>
    <p class="show_more">{{ text }}</p>
</div>
</template>
