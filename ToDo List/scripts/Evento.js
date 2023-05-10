//classe singolo evento
class Evento{
    //costruttore con parametri
    constructor(data, descrizione){
        //evento completato(true = si; false = no)
        this.completamento=false;
        //data di scedenza
        this.data=data;
        //descrizione evento
        this.descrizione=descrizione;
    }

    //visualizzazione attributi evento mediante alert
    visualizza(){
        alert("Descrizione evento: " + this.descrizione + ", scadenza: " + this.data + ",completamento: " + this.completamento);
    }
    //completamento/rimozione completamento evento
    setCompletamento(){
        this.completamento=!this.completamento;
    }
}