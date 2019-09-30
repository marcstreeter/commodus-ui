<template>
  <div class="messages">
      <div v-if="contactSelected">
            <div class="msg" v-for="msg in contactContent.messages">
                <div class="msg" :class="originator(msg.sender)">
                    <div class="contact"><md-icon>child_care</md-icon></div>
                    <div class="content">{{ msg.content }}</div>
                </div>
            </div>
            <div class="entry">
                <input ref="msgInput" v-model="msg" placeholder="?" type="text">
                <span @click="sendMessage"><md-icon>call_made</md-icon></span>
            </div>
      </div>
  </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        data () {
            return {
                msg: "message vue hello!",
            }
        },
        computed: {
            ...mapGetters([
                'contactContent',
                'contactSelected',
            ]),
            contactContent(){
                return this.$store.getters.contactContent;
            },
        },
        methods: {
            ...mapActions([
                'getContactContent',
            ]),
            originator(sender){
                return this.contactSelected == sender ? 'sender' : 'receiver';
            },
            sendMessage(){
                console.log(`SENDING: '${this.msg}'`);
                this.msg = '';
                this.$refs.msgInput.focus();

            },
        }
    }
</script>


<style lang="scss" scoped>
    .hidden{
        width: 0;
        height: 0;
        padding: 0;
        margin: 0;
    }
    .msg{
        align-items: baseline;
        padding: 5px;
    }
    .sender{
        display: flex;
        flex-direction: row-reverse;
        background-color: yellow;
        .contact{
            margin-right: 5px;

        }
        .content{
            margin-left: 5px;
        }
    }
    .receiver{
        display: flex;
        .contact{
            margin-left: 5px;
        }
        .content{
            margin-right: 5px;
        }
    }
    .contact {
        padding-left: 5px;
        padding-right: 5px;
    }
    .entry{
        display: flex;
        justify-content: space-between;

        input[type='text']{
            width: 100px;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1px solid black;
            transition: width 0.2s linear;

            &:focus{
                width: 100%;
                outline: none;
                border-bottom: 2px solid black;
            }
        }
    }
</style>


