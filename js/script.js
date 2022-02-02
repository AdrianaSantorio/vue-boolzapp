console.log('VUE OK',Vue);

Vue.config.devtools = true;

const root = new Vue ({
    el: '#root',
    data: {
        user: {
          name: 'Nome Utente',
          avatar: '_io',
        },
        newMessage: '',
        searchString:'',
        currentIndex: 0,
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ],
      },
    methods: {
        selectContact(index) {
            this.currentIndex = index;
        },
        sendMessage() {
          this.addMessage(this.newMessage, 'sent')

          this.newMessage= '';

          setTimeout(() => {
            this.addMessage('ok', 'received');
          }, 3000)
        },
        addMessage(text,status) {
          const newMessage = {
            text,
            status,
            date:'',
          }

          if (text) {
            this.contacts[this.currentIndex].messages.push(newMessage);
          }
        },
        // filterContacts() {
        //   const searchString = this.searchString.split('');
        //   console.log(searchString);

        //   for (let z=0; z < this.contacts.length; z++) {
        //     const nameArray = this.contacts[z].name.toLowerCase().split('');
        //     console.log(nameArray);
        //     this.contacts[z].visible = false;
        //     for (let i=0; i < searchString.length; i++) {
        //       if (nameArray.includes(searchString[i])) {
        //         this.contacts[z].visible = true;
        //       }
        //     }
        //  }
        // },
        toShow(contact) {
          if (!this.searchString) {
            return true;
          } else {
            return contact.name.toLowerCase().includes(this.searchString.toLowerCase());
          }
        }
        
    },

});
