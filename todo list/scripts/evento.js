//classe evento
class evento{
    //costruttore con parametri
    constructor(giorno, descrizione){
        //data evento
        this.data=giorno;
        //descrizione evento
        this.descrizione=descrizione;
        //fase di completamento(si/no)
        this.fatto=false;
    }

    //visualizzazione attributi della data
    convertToAlert(){
      alert(this.data+";"+this.descrizione+";"+this.fatto);
    }

    //metodi get e set
    //restituzione del contenuto dell'attributo data
    getData(){
        return this.data;
    }
    //restituzione del contenuto dell'attributo evento
    getDescrizione(){
        return this.descrizione;
    }
    //restituzione del contenuto dell'attributo di completamento
    getFatto(){
        return this.fatto;
    }
    //setting dell'attributo completamento
    setCompletamento(){
       this.fatto=!this.fatto;
    }
}