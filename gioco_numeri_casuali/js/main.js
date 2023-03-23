const { createApp } = Vue

createApp({
  data() {
    return {
      numeroComputer: '',
      numeroUtente: '',
      vincitore: ''
    }
  },
  methods: {
    determinaVincitore() {
      if (this.numeroComputer > this.numeroUtente) {
        this.vincitore = 'computer';
      } else if ( this.numeroUtente > this.numeroComputer) {
        this.vincitore = 'utente';
      } else {
        this.vincitore = 'pareggio';
      }
    }
  },
  mounted() {
    console.log('Ciao mondo!');

    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then( (response) => {
            this.numeroComputer = response.data.response;
            this.determinaVincitore();
        }
    );

    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then( (response) => {
            this.numeroUtente = response.data.response;
            this.determinaVincitore();
        }
    );

  }
}).mount('#app')