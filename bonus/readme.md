PROBLEMA:Rifare l'esercizio della to do list visto a lezione. Create un array di oggetti ( con proprietà text e done )che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.

SOLUZIONE:1. creo markup statico del DOM;
2. Realizzo la logica;
    2.1
    creo la struttura l'array di oggetti con atttributi TEXT E DONE;
    2.2
    Realizzo il V-FOR per visualizzare gli elementi nel DOM;
    2.3
    Implemento l'attributo DONE per distiguere le task fatte da quelle da fare;
    2.4
    Realizzo un metodo per cambiare stato ad una task:
        2.4.1
        Creo graficamente il pulsante;
        2.4.2
        Creo un metodo per cambiare lo stato del pulsante;
        2.4.3
        Eseguo il metodo al click del pulsante;
        2.4.4
        Implemento il cambio grafica del pulsante;
    2.5
    Realizzo un metodo per cancellare una task:
        2.5.1
        Realizzo il metodo in JS che accetta l'indice dell'elemento cliccato;
        2.5.2
        Con l'indice rimuovo l'elemento cliccato attraverso SPLICE;
        2.5.3
        Aggiungo l'evento CLICK al pulsante per cancellare;
    2.6
    Aggiungo un elemento all'array;
        2.6.1
        Creo metodo per prendere la variabile del data predisposta a contenere quello che scriviamo in input;
        2.6.2
        all'interno creo un oggetto che con la proprieta' text che prende il valore della variabile precedente con DONE su FALSE;
        2.6.3
        Aggiungo l'oggetto all'array e svuoto la var TEXT;
        2.6.4 
        Nel DOM aggiungo l'input con il nome della VAR;