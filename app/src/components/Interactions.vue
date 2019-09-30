<template>
  <div class="interactions">
      <interaction 
        v-for="i in interactions"
        :key="i.id"
        :id="i.id"
        :tel="i.tel"
        :sent="i.sent"
        :received="i.received"
        :responded="i.responded"
        :accepted="i.accepted"/>
  </div>
</template>

<script>
    import Interaction from './Interaction.vue';
    export default {
        props:['interactions'],
        components:{
            'interaction': Interaction,
        }
    }
</script>

<style lang="scss" scoped>
    .interactions{
        display: flex;
        flex-direction: column;
    }
</style>

