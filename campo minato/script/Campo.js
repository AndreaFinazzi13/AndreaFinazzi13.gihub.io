//campo minato
class Campo {
    //costruttore con parametri
    constructor(_n, _mine) {
        //inizializzazione attributi mediante parametri
        this.n = _n;
        this.mine = _mine;
        //vettore che contiene le celle del campo
        this.campo = [];
        //inizialmente le celle sono tutte chiuse
        this.contatoreAperte = 0;
        //partita in corso
        this.partita = true;
    }

    //inizializzazione campo
    inizializza() {
        //inizializzazion testo contenente numero mine
        $('#numMine').text("mine: " + this.mine);
        //creazione tabella
        $('#griglia').css("height", $('#griglia').width() + "px");

        //scorrimento intero campo
        for (let r = 0; r < this.n; r++) {
            //inizializzazione singoli posti del vettore
            this.campo[r] = [];
            //righe e colonne
            for (let c = 0; c < this.n; c++) {
                //creazione nuova cella
                this.campo[r][c] = new Cella();
                $('#griglia').append('<div class="cella" data-row="' + r + '" data-col="' + c + '">&nbsp;</div>');
            }
        }
    }

    //posizionamento casuale delle mine
    posizionamentoMine() {
        let m = 0;
        //scorrimento numero mine
        while (m < this.mine) {
            //numeri casuali
            let pr = Math.round((this.n - 1) * Math.random());
            let pc = Math.round((this.n - 1) * Math.random());
            //controllo che la cella non contenga alcuna mina
            if (!this.campo[pr][pc].mina) {
                //mina
                this.campo[pr][pc].mina = true;
                for (let i = -1; i <= 1; i++)
                    for (let j = -1; j <= 1; j++) {
                        let dr = pr + i;
                        let dc = pc + j;
                        if (dr >= 0 && dc >= 0 && dr < this.n && dc < this.n) 
                            this.campo[dr][dc].cont++;
                    }
                //incremento contatore
                m++;
            }
        }
    }

    //controlla la presenza di mine nella casella o nelle vicine
    controlla(r, c) {
        //controllo se la cella passata è stata aperta
        if (this.campo[r][c].aperta)
            return true;

        //cella aperta
        this.campo[r][c].aperta = true;
        //aggiornamento contatore
        this.cAperte++;

        //visualizzazione
        $('.cella[data-row=' + r + '][data-col=' + c + ']').html(this.campo[r][c].cont ? this.campo[r][c].cont : "&nbsp;");
        $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("aperta");

        
        if (!this.campo[r][c].mina && !this.campo[r][c].cont) {

            //controlla le zone vicino
            for(var dr=r-1;dr<=r+1;dr++)
            for(var dc=c-1;dc<=c+1;dc++)
                if(dc >= 0 && dr >= 0 && dc < this.n && dr < this.n)
                    //controllo
                    controlla(dr,dc);
        //mina
        } else if (this.campo[r][c].mina) {
            // qui mettiamo la mina
            $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
            $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
            return false;
        }
        return true;
    }
    
    //osservazione di tutte le mine al termine della partita
    vediMine() {
        //scorrimento di tutte le celle (righe e colonne)
        for (let r = 0; r < this.n; r++)
            for (let c = 0; c < this.n; c++)
                //se mi trovo su una mina
                if (this.campo[r][c].mina) {
                    //apertura cella
                    this.campo[r][c].aperta = true;
                    //visualizzazione
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').html('<i class="fa fa-bomb"></i>');
                    $('.cella[data-row=' + r + '][data-col=' + c + ']').addClass("mina");
                }
    }
}