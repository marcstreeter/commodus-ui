<template>
  <div class="interaction">
      <div class="summary">
        <div class="request">
            <div class="tel">{{tel}}</div>
            <div class="sent">{{sent}}</div>
        </div>
        <div class="response" @click="showMessageHistory">
            <md-icon>{{this.responseIcon}}</md-icon>
        </div>
      </div>
  </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from 'vuex';

    export default {
        props:['id','tel','sent','received','responded','accepted'],
        computed: {
            responseIcon(){
                const accepted = this.accepted ? 'thumb_up' : 'message';
                const responded = this.responded ? accepted : 'chat_bubble';
                return this.received ? responded : 'chat_bubble_outline';
            }
        },
        methods: {
            ...mapMutations([
                'updateContactSelected',
            ]),
            ...mapActions([
                'getContactContent',
            ]),
            showMessageHistory(evt){
                evt.stopPropagation();
                evt.preventDefault();
                console.log(`showing messages for ${this.tel} of id: ${this.id}`);
                const contactId = this.id;
                console.log(this.$store.actions);
                this.updateContactSelected({contactId});
                this.$store.dispatch({
                    type:'getContactContent',
                    contactId,
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .interaction{
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        margin-bottom: 10px;
        border-bottom: 1px dashed grey;

        .summary{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            .request{
                display: flex;
            }
        }
    }
</style>
