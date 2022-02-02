

filterContacts() {
    const searchString = this.searchString.split('');
    console.log(searchString);

    for (let z=0; z < this.contacts.length; z++) {
       
       const campione = this.contacts[z].name
       for (let i=0; i < searchString.length; i++) {
       
       
       
        includes(searchString[i]);
       
       }
    }
     
     includes(searchString[i]);
    }
}