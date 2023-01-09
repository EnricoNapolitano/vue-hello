/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log('ok', Vue);

const app = Vue.createApp({
    data(){
        return {
            title : {
                text : 'That\'s a classy picture...',
                font : 'font-family: \'Playfair Display\', serif'
            },
            pic : {
                img : 'https://picsum.photos/1920/1080',
                alt : 'picture from lorem picsum'
            }  
        }
    },
});

app.mount('#root');