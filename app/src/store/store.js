import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const svc = {
    getContacts: () => axios({url:'http://apple.com'}),
    getMessages: () => axios({url:'http://microsoft.com'})
}

export const store = new Vuex.Store({
    state: {
        contactSelected: null,
        contactContent: {},
    },
    getters:{
        contactContent: state => {
            return state.contactContent;
        },
        contactSelected: state => state.contactSelected,
    },
    mutations:{
        updateContactContent: (state, payload) => {
            state.contactContent = payload;
        },
        updateContactSelected: (state, {contactId}) => {
            state.contactSelected = contactId;
        },
    },
    actions: {
        getContactContent: ({commit}, {contactId}) => {
            console.log(`getContactContent received: ${contactId}`);
            svc.getContacts()
            .then(function (response) {
                console.log(`PANTERA GOT: ${response}`);
            })
            .catch(function (error) {
                console.log(`PANTURA GOT: ${error}`);
            });
            
            const contactContent = {
                contact: {
                    name: "Marc Streeter",
                    tel: "6825823025",
                    id: 1
                },
                actions: [],
                messages: [
                    {
                        date: "12-12-2018T10:58:01",
                        content: "hello there",
                        read: false,
                        sender: 1,
                        receiver: 2,
                    },
                    {
                        date: "12-12-2018T10:58:02",
                        content: "hi",
                        read: false,
                        sender: 2,
                        receiver: 1,
                    },
                    {
                        date: "12-12-2018T10:58:03",
                        content: "whats up?",
                        read: false,
                        sender: 2,
                        receiver: 1,
                    },
                    {
                        date: "12-12-2018T10:58:04",
                        content: "????",
                        read: false,
                        sender: 2,
                        receiver: 1,
                    },
                    {
                        date: "12-12-2018T10:58:05",
                        content: "Oh nothin just checking in",
                        read: false,
                        sender: 1,
                        receiver: 2,
                    },
                    {
                        date: "12-12-2018T10:58:10",
                        content: "I didn't have anything else to say :D",
                        read: false,
                        sender: 1,
                        receiver: 2,
                    },
                ]
            }
            commit('updateContactContent', contactContent)
            return contactContent;
        }
    }
})