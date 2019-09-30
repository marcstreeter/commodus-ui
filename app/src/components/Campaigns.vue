<template>
  <div>
      <campaign v-for="c in campaigns" 
        :key="c.id"
        :title="c.title" 
        :date="c.date"
        :template="c.template"
        :interactions="c.interactions"></campaign>
  </div>
</template>

<script>
    import Campaign from './Campaign.vue';
    export default {
        data(){
            return {
                campaigns: [
                    {
                        id:'1',
                        title:'read a scripture ',
                        template:`hello :name how are you?`,
                        date:`2008-09-15T15:53:00`,
                        interactions: [
                            {id: "1", tel:`5125551234`, sent:`2008-09-15T15:53:00`, received: true, responded: true, accepted: null},
                            {id: "2", tel:`5125660215`, sent:`2008-09-15T15:54:00`, received: false, responded: false, accepted: null},
                            {id: "3", tel:`5125357436`, sent:`2008-09-15T15:55:00`, received: true, responded: false, accepted: null},
                            {id: "4", tel:`5125771557`, sent:`2008-09-15T15:56:00`, received: true, responded: true, accepted: false},
                            {id: "5", tel:`5125000238`, sent:`2008-09-15T15:57:00`, received: true, responded: true, accepted: true},
                        ]
                    },
                    {
                        id:'2',
                        title:'bring snack',
                        template:`hello :receiver how are you? This is :sender, would you bring :assignment for :time`,
                        date:`2008-09-15T15:53:00`,
                        interactions: [
                            {id: "6", tel:`5125551234`, sent:`2008-10-05T10:31:00`, received: true, responded: true, accepted: true},
                            {id: "7", tel:`5125660215`, sent:`2008-10-05T10:31:10`, received: true, responded: false, accepted: null},
                        ]
                    }
                ]
            }
        },
        components: {
            'campaign': Campaign
        }
    }
</script>



<style lang="scss" scoped>

</style>


