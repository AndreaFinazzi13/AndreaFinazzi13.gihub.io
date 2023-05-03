//classe campo
class Campo {
    //costruttore con parametri
    constructor(grand, min) {
        this.grandezza = grand;                 //grandezza campo
        this.mine = min;                        //numero mine
        this.vettoreCampo = [];                 //inizializzazione campo
        this.contatoreCelleAperte = 0;          //numero celle aperte
        this.partitaInCorso = true;             //partita in corso
    }

    //reset campo
    reset(){
        //reset
        location.reload();
    }

    //inizializzazione campo
    inizializzazioneCampo() {
        //testo numero mine nell'intestazione della tabella
        $('#contatoreMine').text("Numero mine: " + this.mine);
        //creazione tabella
        $('#campo').css("height", $('#campo').width() + "px");

        //scorrimento righe tabella
        for (let r = 0; r < this.grandezza; r++) {
            //inizializzazione
            this.vettoreCampo[r] = [];
            //scorrimento colonne
            for (let c = 0; c < this.grandezza; c++) {
                //inizializzazione cella
                this.vettoreCampo[r][c] = new Cella();
                //inserimento nella tabella
                $('#campo').append('<div class="cella" data-row="' + r + '" data-col="' + c + '">&nbsp;</div>');
            }
        }
    }

    //posizionamento casuale delle mine nel campo
    posizionamentoCasualeMine() {
        //contatore mine
        let m = 0;
        //scorrimento numero mine
        while (m < this.mine) {
            //generazione di due numeri casuali (riga e colonna)
            let pr = Math.round((this.grandezza - 1) * Math.random());
            let pc = Math.round((this.grandezza - 1) * Math.random());
            //controlla che nella posizione generata casualmente non ci sia già una mina
            if (!this.vettoreCampo[pr][pc].mina) {
                //cella generata è una mina
                this.vettoreCampo[pr][pc].mina = true;
                //cicli per comprendere che numero mettere all'interno della cella (in base al numero di mine vicine)
                for (let i = -1; i <= 1; i++)
                    for (let j = -1; j <= 1; j++) {
                        let dr = pr + i;
                        let dc = pc + j;
                        if (dr >= 0 && dc >= 0 && dr < this.grandezza && dc < this.grandezza) {
                            //aumento contatore (numerino cella)
                            this.vettoreCampo[dr][dc].cont++;
                        }
                    }
                //aumento numero mine
                m++;
            }
        }
    }

    //click di una cella (controllo se è una mina o se ce ne sono in posizioni vicine)
    controlloSeMina(r, c) {
        //se la cella cliccata era già stata cliccata non succede nulla
        if (this.vettoreCampo[r][c].aperta)
            //non mina
            return true;

        //apertura cella cliccata
        this.vettoreCampo[r][c].aperta = true;
        //incremento contatatore celle aperte
        this.contatoreCelleAperte++;

        $('.cella[data-row=' + r + '][data-col=' + c + ']').html(this.vettoreCampo[r][c].cont ? this.vettoreCampo[r][c].cont : "&nbsp;");
        $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("cellaAperta");
        
        //se qualla cliccata non è né una mina né una cella vicina ad una mina
        if (!this.vettoreCampo[r][c].mina && !this.vettoreCampo[r][c].cont) {

            //controllo le celle vicine
            for(var dr=r-1;dr<=r+1;dr++)
            for(var dc=c-1;dc<=c+1;dc++)
                if(dc >= 0 && dr >= 0 && dc < this.grandezza && dr < this.grandezza)
                    this.controlloSeMina(dr,dc);
            //altrimenti se la cella corrente è una mina
        } else if (this.vettoreCampo[r][c].mina) {
            
            //posizionamento mina
            $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
            $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
            //mina
            return false;
        }

        //non mina
        return true;

    }
    //visualizzazione di tutte le mine quando se ne clicca una
    vediMine() {
        //scorrimento campo
        //righe
        for (let r = 0; r < this.grandezza; r++)
        //colonne
            for (let c = 0; c < this.grandezza; c++)
                //se la cella corrente è una mina
                if (this.vettoreCampo[r][c].mina) {
                    //apertura cella
                    this.vettoreCampo[r][c].aperta = true;
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
                }
    }
}