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