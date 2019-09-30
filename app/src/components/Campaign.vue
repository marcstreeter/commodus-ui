<template>
  <div class="campaign md-elevation-1" @click="changeView()">
      <div class="summary">
        <div class="date">{{date}}</div>
        <div class="title">{{title}}</div>
        <div class="template">{{template}}</div>
        <div class="interactions">{{interactions.length}}</div>
      </div>
      <div class="interactions"
           v-if="expanded">
           <interactions :interactions="interactions" />
      </div>
  </div>
</template>


<script>
    import Interactions from "./Interactions.vue";
    export default {
        props: ['title','template','date', 'interactions'],
        data(){
            return {
                expanded: false,
            }
        },
        components:{
            'interactions': Interactions,
        },
        methods: {
            changeView(){
                this.expanded = !this.expanded;
                console.log(`expanded is now: ${this.expanded}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .campaign{
        display:flex;
        flex-direction: column;
        border: solid 1px grey;
        padding: 12px;
        margin: 10px;
        background-color: yellow;

        .summary{
            display: flex;
            color: pink;

            div{
                margin-right: 10px;
            }
        }
    }
    .title{
        color: red;
        font-weight: 800;
    }
    .template{
        color: blue;
        background-color: cyan;
    }
</style>


