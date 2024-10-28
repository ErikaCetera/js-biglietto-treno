DATI IMPUT
-chiedere all'utente numero chilometri;
-chiedere all'utente numero età;
-prezzo al kilometro 0.21€.


ESECUZIONE LOGICA
-Se il cliente non ha inserito un valore numerico
   .scrivo il messaggio di errore
-Altrimenti
    .procedo con il calcolo;

  -Calcolo prezzo biglietto base senza sconto (numero kilometri per prezzo al kilometro);
  -Trasformo i dati stringa in numero;
  -Dichiaro variabile per la stampa del prezzo biglietto finale;

  -Verifico età utente:
     -se il numero età è minore di 18
        .applico sconto del 20%
        .prezzo finale(sottraggo sconto dal prezzo base)
     -altrimenti se il numero dell'ètà è uguale o maggiore a 65
       .applico sconto del 40%
       .prezzo finale(sottraggo sconto dal prezzo base)
     -altrimenti 
        .prezzo finale(prezzo base senza sconto);

  -Trasformo prezzo finale con massimo 2 decimali.



STAMPA OUTPUT
stampo prezzo biglietto finale.

