const app = Vue.createApp ({

    //template: `
    //<h1>Hola mundo</h1>
    //<p> Desde app.js </p>
   //`
    data(){
        return{
            quote: "I'm Batman",
            author: 'Buce wayne'
        }
    },

    methods: {
        changeQuote(){
            console.log("Hi")
            this.author = 'Tania'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')