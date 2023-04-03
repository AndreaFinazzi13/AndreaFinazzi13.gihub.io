class SlotMachine{
    //costruttore di default
    constructor(){
        this.num1=0;
        this.num2=0;
        this.num3=0;
        this.crediti=10;
        //vettore contenente le immagini
        this.vett=new Array;

        //scorrimento di tutte le immagini
        for(let i=0;i < 10; i++)
            //riempimento del vettore con le immagini
            this.vett[i]="immagini/" + i + ".png";
    }
    //estrazione casuale
    flip(){
        //controllo se ho dei crediti(altrimenti non si può effettuare lo spin)
        if(this.crediti>0){
            //pagamento del credito per lo spin
            this.crediti--;

            //estrazione di 3 numeri casuali
            this.num1 = Math.floor(Math.random() * 10);
            this.num2 = Math.floor(Math.random() * 10);
            this.num3 = Math.floor(Math.random() * 10);

            //flip delle 3 immagini
            document.getElementById("im1").src=this.vett[this.num1];
            document.getElementById("im2").src=this.vett[this.num2];
            document.getElementById("im3").src=this.vett[this.num3];

            //controllo eventuale vincita
            //1. tris
            if((this.num1 == this.num2) && (this.num2 == this.num3))
                //aumento crediti
                this.crediti+=(50*(this.num1+2));

            //2.coppie consecutive
            else if((this.num1 == this.num2) || (this.num2 == this.num3))
                //aumento crediti
                this.crediti+=(20*(this.num1+2));
            else if(this.num1 == this.num3)
                //aumento crediti
                this.crediti+=(5*(this.num1+2));

            document.getElementById("output").innerHTML= "Crediti rimanenti: " + this.crediti;
        }
        //caso di fine(0 crediti rimasti)
        else
            //output
            alert("Crediti mancanti. GIOCO TERMINATO!");
    }
    //incasso dei crediti maturati
    incassa(){
        //comunicazione del numero di crediti vinto
        alert("Hai guadagnato " + this.crediti + " crediti. GIOCO TERMINATO!");
        //azzeramento crediti per terminare effettivamente
        this.crediti=0;
    }
}