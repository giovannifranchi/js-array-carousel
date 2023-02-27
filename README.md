Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.


-----------------
//Si definisce un array photos con foto
//Si definisce una variabile che selezioni il div container
//Si crea variabile active settata ad un numero a scelta compreso all'interno dell'a
//Si inizializza una variabile content
//Si fa un ciclo for partendo da 0 e arrivando alla lunghezza di array photos - 1
    //content si somma a div che contiene immagine selezionata con template e i di photos
//Si mette content dentro l'innerhtml di container
//Si crea un array elements che selezioni elementi dentro il container
//Si dichiara che elements all'indice active ha una classe show
//Si creano due costanti che selezionino gli elementi prev e next
//Si crea un event listener per next
    //Se active < elemts.lenght - 1
        //Si rimuove classe show da indice active di elements
        //Si incrementa active di 1
        //Si aggiunge classe show a indice active di elements
    //Altrimenti
        //Si rimuove classe show da indice active di elements
        //Si setta active = 0
        ////Si aggiunge classe show a indice active di elements
//Si crea un event listener per prev
    //Se active > 0
        //Si rimuove classe show da indice active di elements
        //Si decrementa active di 1
        //Si aggiunge classe show a indice active di elements
    //Altrimenti
        //Si rimuove classe show da indice active di elements
        //Si setta active = elements.length - 1
        //Si aggiunge classe show a indice active di elements

