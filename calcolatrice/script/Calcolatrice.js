class Calcolatrice{
    //costruttore di default
    constructor(){
        this.num1=0;
        this.operazione='';
        this.num2=0;
        this.testo="";
    }
    //eliminazione del testo dal display
    cancellaTutto(){
        //azzeramento contenuto display
        document.getElementById("display").innerHTML = "";
        //azzeramento attributo in cui è contenuto il testo digitato per ora
        this.testo="";
    }
    //eliminazione dal display dell'ultimo carattere inserito
    cancellaUnita(){
        //salvataggio nell'attributo del contenuto del display
        this.testo = document.getElementById("display").innerHTML;
        //scrittura sul display del testo escluso l'ultimo char
        document.getElementById("display").innerHTML = this.testo.substring(0, this.testo.length - 1);
        //salvataggio del testo aggiornato nell'apposita variabile
        this.testo=document.getElementById("display").innerHTML;
    }
    //aggiunta del carattere cliccato nella calcolatrice
    scrivi(carattere){
        //aggiornamento variabile contenente il testo
        this.testo+=carattere;
        //inserimento testo aggiornato nel display
        document.getElementById("display").innerHTML=this.testo;
    }
    //inversione del segno del numero selezionato
    invertiSegno(){
        //da negativo a positivo
        if(this.testo.substring(0,1) == "-"){
            //aggiornamento variabile
            this.testo=this.testo.substring(1, this.testo.length);
            //visualizzazione sul display
            document.getElementById("display").innerHTML=this.testo;
        }
        //da positivo a negativo
        else{
            //aggiornamento variabile
            this.testo="-"+this.testo;
            //visualizzazione sul display
            document.getElementById("display").innerHTML=this.testo;
        }
    }
    //calcolo dell'operazione inserita
    calcola(){
        //variabile in cui salvare la posizione in cui si trova il segno dell'operazione
        let posOperazione=-1;
        let contaOperazioni=0;
        let risultato=0;
        //controllo se è presente un segno
        //scorrimento variabile apposita contenente il testo del display
        for(let i=0; i<this.testo.length;i++){
            //cerco operazione
            if((this.testo.charAt(i) == "+")||(this.testo.charAt(i) == "-")||(this.testo.charAt(i) == "*")||(this.testo.charAt(i) == "/")){
                this.operazione=this.testo.charAt(i);   //salvataggio operazione da svolgere in apposita variabile
                posOperazione=i;                         //salvataggio della posizione in cui si trova l'operatore in apposita variabile
                contaOperazioni++;                      //conteggio del numero di operazioni da svolgere
            }
        }
        //si chiede di svolgere un'operazione alla volta
        if(contaOperazioni>1){
            //alert
            alert("svolgere una operazione alla volta");
            //caso errato
            document.getElementById("display").innerHTML="ERRORE";
            this.testo="ERRORE";
        }
        //l'operatore non si può trovare al primo o all'ultimo posto o essere mancante
        else if((posOperazione==-1)||(posOperazione==0)||(posOperazione==this.testo.length-1)){
            //caso errato
            document.getElementById("display").innerHTML="ERRORE";
            this.testo="ERRORE";
        }
        //altrimenti il calcolo può essere svolto
        else{
            //salvataggio primo operatore in apposita variabile
            this.num1=this.testo.substring(0, posOperazione);
            //salvataggio secondo operatore in apposuta variabile
            this.num2=this.testo.substring(posOperazione+1, this.testo.length);
            //suddivisione in 4 casi (4 operazioni)
            //somma
            if(this.operazione=="+"){
                //calcolo risultato
                risultato=parseFloat(this.num1) + parseFloat(this.num2);
                //aggiornamento variabile
                this.testo=risultato;
                //aggiornamento display
                document.getElementById("display").innerHTML=this.testo;
            }
            //moltiplicazione
            else if(this.operazione=="*"){
                //calcolo risultato
                risultato=parseFloat(this.num1) * parseFloat(this.num2);
                //aggiornamento variabile
                this.testo=risultato;
                //aggiornamento display
                document.getElementById("display").innerHTML=this.testo;
            }
            //divisione
            else if(this.operazione=="/"){
                //calcolo risultato
                risultato=parseFloat(this.num1) / parseFloat(this.num2);
                //aggiornamento variabile
                this.testo=risultato;
                //aggiornamento display
                document.getElementById("display").innerHTML=this.testo;
            }
            //sottrazione
            else if(this.operazione=="-"){
                //calcolo risultato
                risultato=parseFloat(this.num1) - parseFloat(this.num2);
                //aggiornamento variabile
                this.testo=risultato;
                //aggiornamento display
                document.getElementById("display").innerHTML=this.testo;
            }
        }
    } 
}