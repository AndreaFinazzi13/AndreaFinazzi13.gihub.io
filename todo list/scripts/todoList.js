//classe lista
class todoList {
    //costruttore di default
    constructor() {
        //inizializzazione lista
        this.todoList = new Array();
        //contatore numero elementi della lista
        this.contaEventi = 0;
    }

    //aggiunta di un evento nella lista
    aggiungiEvento() {
        //attributo descrizione inserito da utente
        let descrizione = document.getElementById("descrizione");
        //attributo data inserito da utente
        let data=document.getElementById("data")[0].value;
        //costruzione nuova data
        let date = new Date(data);
        //controllo integrità input
        if((data=="") || (descrizione.value==""))
            //comunicazione con utente
            alert("ERRORE! Inserire una data e una descrizione dell'evento per proseguire");
        //input corretto
        else{
            //svuotamento grafico della lista
            this.svuotaListaGrafica();
            //aggiunta evento all'interno della lista
            this.todoList.push(tmpEvento);
            //incremento del numero degli elementi
            this.contaEventi++;
            //costruzione evento temporaneo
            let tmpEvento = new CEvento(date.getTime(), descrizione.value);
            //ordinamento degli eventi in base alla data
            this.ordinamentoTemporale();
            //scorrimento di tutti gli elementi della lista
            for (let i = 0; i < this.contaEventi; i++) 
                //inserimento evento nella lista a livello grafico
                this.aggiungiEventoGrafico(this.todoList[i].attivita, i,this.todoList[i].completata);
        }
    }
    //ordinamento degli eventi nella lista in base alla data di scadenza
    ordinamentoTemporale(){
        //bubble sort basato sulla data
        for (let i = 0; i <this.todoList.length; i++) {
            for (let j = 0; j < (this.todoList.length - 1); j++) {
                if (this.todoList[j].data > this.todoList[j + 1].data) {
                    let tmp = this.todoList[j]
                    this.todoList[j] = this.todoList[j + 1]
                    this.todoList[j + 1] = tmp
                }
            }
        }
    }
    //cancellazione totale della lista grafica
    svuotaListaGrafica(){
        //salvataggio in variabile di supporto del contenuto della lista
        let tmp = document.getElementById("todoList");
        //svuotamento lista grafica
        tmp.innerHTML = "";
    }
    //rimozione dell'evento dalla lista e dalla lista grafica
    rimuoviAttivita(index) {
        //decremento lunghezza lista
        this.contaEventi--;
        //rimozione dalla lista dell'evento all'indice passato
        this.todoList.splice(index, 1);
        //svuotamento lista grafica
        this.svuotaListaGrafica();
        //scorrimento di tutti gli eventi
        for (let i = 0; i < this.contaEventi; i++)
            //visualizzazione di tutti gli eventi della lista aggiornata 
            this.aggiungiEventoGrafico(this.todoList[i].attivita, i,this.todoList[i].completata);
    }
    //rimozione di tutti gli eventi dalla lista e svuotamento lista grafica
    rimuoviTutto() {
        //scorrimento di tutti gli eventi
        for (let i = 0; i < this.contaEventi; i++) 
            //rimozione dalla lista
            this.todoList.pop();
        //lunghezza ora uguale a zero
        this.contaEventi = 0;
        //rimozione lista grafica
        this.svuotaListaGrafica();
    }
    //inserimento di un nuovo evento nella lista a livello grafico
    aggiungiEventoGrafico(evento, num,compl) {
        //salvataggio in variabile di supporto del contenuto della lista
        let tmp = document.getElementById("lista")
        //inserimento nella lista di evento completato
        if(compl==true)
            tmp.innerHTML += "<tr class='trLista' id='" + num + "'><td class='Checkbox'><input type='checkbox'  checked='checked' onchange='lista.segnaAttività(" + num + ")'></td><td class='Activity'>" + evento + "</td><td><button onclick='lista.rimuoviAttivita(" + num + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
        //inserimento nella lista di evento non completato
        else
            tmp.innerHTML += "<tr class='trLista' id='" + num + "'><td class='Checkbox'><input type='checkbox' onchange='lista.segnaAttività(" + num + ")'></td><td class='Activity'>" + evento + "</td><td><button onclick='lista.rimuoviAttivita(" + num + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
    }
    //contrassegno un'attività come completata
    completamentoAttivita(i) {
        //attività alla posizione passata è stat svolta
        this.todoList[i].setCompletamento();
    }
    //visualizzazione di un gruppo di eventi (completati/non completati/tutti)
    visualizzaGruppoEventi(scelta){
        //svuotamento lista grafica
        this.svuotaListaGrafica();
        //visualizzazione di tutti gli eventi completati
        if(scelta=='c' ){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) {
                //controllo se evento è stato completato
                if(this.todoList[i].completata==true)
                    //inserimento nella lista grafica
                    this.aggiungiEventoGrafico(this.todoList[i].attivita, i,this.todoList[i].completata);
            }
        //visualizzazione di tutti gli eventi non completati
        }else if(scelta=='nc'){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) {
                //controllo se evento non è stato completato
                if(this.todoList[i].completata==false)
                    //inserimento nella lista grafica
                    this.aggiungiEventoGrafico(this.todoList[i].attivita, i,this.todoList[i].completata);
            }
        }
        //visualizzazione di tutti gli eventi
        else if(scelta=='tutto'){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) 
                //inserimentonella lista grafica
                this.aggiungiEventoGrafico(this.todoList[i].attivita, i,this.todoList[i].completata);
        }
    }
}