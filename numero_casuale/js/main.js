const { createApp } = Vue

createApp({
  data() {
    return {
      randomNumber: ''
    }
  },
  mounted() {
    console.log('Ciao mondo!');

    axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then( (response) => {
            this.randomNumber = response.data.response;
        }
    )

  }
}).mount('#app')