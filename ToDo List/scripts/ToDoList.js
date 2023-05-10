//classe ToDo List
class ToDoList {
    //costruttore di default
    constructor() {
        //inizializzazione ToDo List
        this.todoList = new Array();
        //contatore numero di eventi della lista
        this.contatoreEventi = 0;
    }

    //inserimento nuvo evento nella ToDo List
    aggiungiEvento() {
        //salvataggio in variabile temporanea della descrizione dell'evento inserito dall'utente
        let descrizione = document.getElementById("descrizione");
        //salvataggio in variabile temporanea della data inserita dall'utente
        let data=document.getElementsByTagName("input")[0].value;
        //controllo che siano stati compilati i campi di input
        if(data=="" || descrizione.value=="")
            //in caso di mancanza di input richiederlo
            alert("inserire data e/o descrizione dell'evento");
        else{
            //costruzione data
            let tmpData = new Date(data);
            //costruzione evento mediante input utente
            let tmpEvento = new Evento(tmpData.getTime(), descrizione.value);
            //inserimento evento appena creato nella ToDo List
            this.todoList.push(tmpEvento);
            //incremento numero di elementi
            this.contatoreEventi++;
            //cancellazione tabella grafica
            this.svuotaListaGrafica();
            //ordinamento temporale
            this.ordinamentoTemporale();
            //scorrimento di tutti gli eventi della ToDo List
            for (let i = 0; i < this.contatoreEventi; i++) 
                //realizzazione grafica di ogni evento
                this.aggiungiEventoGrafico(this.todoList[i].descrizione, this.todoList[i].data, this.todoList[i].completamento, i);
            //svuotamento textbox in cui indicare la descrizione dell'evento
            descrizione.value="";
        }
    }
    //rappresentazione grafica di un evento
    aggiungiEventoGrafico(descrizione, data, completamento, posizione) {
        //salvataggio dell'intera ToDoList all'interno di una variabile temporanea
        let todoList = document.getElementById("lista")
        //evento completato
        if(completamento==true)
            todoList.innerHTML += "<tr class='trLista' id='" + posizione + "'><td class='Checkbox'><input type='checkbox'  checked='checked' onchange='lista.completamentoAttivita(" + posizione + ")'></td><td class='Activity'>" + descrizione + "Scadenza: " + data + "</td><td><button onclick='lista.rimozioneEvento(" + posizione + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
        //evento non completato
        else
            todoList.innerHTML += "<tr class='trLista' id='" + posizione + "'><td class='Checkbox'><input type='checkbox' onchange='lista.completamentoAttivita(" + posizione + ")'></td><td class='Activity'>" + descrizione + "Scadenza: " + data + "</td><td><button onclick='lista.rimozioneEvento(" + posizione + ")'><img class='imgDel' src='images/elimina.jpg' alt='elimina'></button></td></tr>";
    }

    //svuotamento ToDo List
    svuotaLista() {
        //scorrimento di tutti gli eventi della lista
        for (let i = 0; i < this.contatoreEventi; i++) 
            //rimozione di ogni evento
            this.todoList.pop();
        //azzeramento lunghezza lista
        this.contatoreEventi = 0;
        //cancellazione tabella grafica
        this.svuotaListaGrafica();
    }
    //svuotamento ToDo List grafica
    svuotaListaGrafica(){
        //salvataggio dell'intera ToDoList all'interno di una variabile temporanea
        let table = document.getElementById("lista")
        //svuotamento ToDo List grafica
        table.innerHTML = "";
    }
    //completamento/non completamento dell'evento
    completamentoAttivita(i) {
        //stato dell'evento che passa da "completato" a "non completato" o viceversa
        this.todoList[i].setCompletamento();
        //salvataggio in variabile temporanea dell'evento
        let tmp = document.getElementsByClassName("Activity");
        //evento completato
        if(this.todoList[i].completamento==true)
            //grafica per evento completato
            tmp[i].style.textDecoration="line-through";
        //evento non completato
        else
            //grafica per evento non completato
            tmp[i].style.textDecoration="none";  
    }

    //rimozione dalla lista dell'evento all'indice passato come parametro
    rimozioneEvento(index) {
        //eliminazione dalla ToDo List dell'evento
        this.todoList.splice(index, 1);
        //decremento lunghezza lista
        this.contatoreEventi--;
        //cancellazione tabella grafica
        this.svuotaListaGrafica();
        //scorrimento di tutti gli eventi della lista
        for (let i = 0; i < this.contatoreEventi; i++)
            //rappresentazione grafica di tutti gli eventi
            this.aggiungiEventoGrafico(this.todoList[i].descrizione, i,this.todoList[i].completamento);
    }

    //ordino gli eventi in base alla data
    ordinamentoTemporale(){
        //bubble sort
        for (let i = 0; i <this.todoList.length; i++) {
            for (let j = 0; j < (this.todoList.length- 1); j++) {
                if (this.todoList[j].data > this.todoList[j + 1].data) {
                    let temp = this.todoList[j]
                    this.todoList[j] = this.todoList[j + 1]
                    this.todoList[j + 1] = temp
                }
            }
        }     
    }

    //visualizzazione di un gruppo di eventi
    visualizzaEventi(scelta){
        //rimozione tabella grafica
        this.svuotaListaGrafica();
        //visualizzazione di tutti gli eventi completati
        if(scelta=='completati' ){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) {
                //controllo se l'evento corrente è stato completato
                if(this.todoList[i].completamento==true)
                    //se sì lo rappresento nella tabella grafica
                    this.aggiungiEventoGrafico(this.todoList[i].descrizione, i,this.todoList[i].completamento);
            }
        }
        //visualizzazione di tutti gli eventi non completati
        else if(scelta=='nonCompletati'){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) {
                //controllo se l'evento corrente non è stato completato
                if(this.todoList[i].completamento==false)
                    //se sì lo rappresento nella tabella grafica
                    this.aggiungiEventoGrafico(this.todoList[i].descrizione, i,this.todoList[i].completamento);
            }
        }
        //visualizzazione di tutti gli eventi
        else if(scelta=='tutti'){
            //scorrimento di tutti gli eventi
            for (let i = 0; i <this.todoList.length; i++) 
                //vrappresentazione nella tabella grafica
                this.aggiungiEventoGrafico(this.todoList[i].descrizione, i,this.todoList[i].completamento);
        }
        //visualizzazione di tutti gli eventi urgenti
        else if(scelta=='urgenti'){
            //cancellazione tabella grafica
            this.svuotaListaGrafica();
            //data odierna
            let d=new Date();
            //scorrimento di tutti gli eventi della tabella
            for (let i = 0; i <this.todoList.length; i++) {
                //controllo se l'evento corrente è urgente
                if(this.todoList[i].data-d.getTime() <= 259200000)
                    //rappresentazione su tabella grafica
                    this.aggiungiEventoGrafico(this.todoList[i].descrizione, i,this.todoList[i].completamento);
            }
        }
    }
}