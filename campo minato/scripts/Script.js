//creazione campo da 10 righe e 10 colonne
const campo = new Campo(10, 10);
//partita in corso
let gioco = true;

$(document).ready(function () {
    //inizializzazione campo
    campo.inizializzazioneCampo();
    //caratteristiche grafiche celle
    $('.cella').css("line-height", $('.cella').width() + "px");
    $('.cella').css("font-size", (32 / 50) * $('.cella').width() + "px");
    //posizionamento mine
    campo.posizionamentoCasualeMine();

    //click di una cella
    $('.cella').click(function () {
        //se la partita è in corso
        if (gioco) {
            //ottenimento riga e colonna della cella cliccata
            //riga
            let r = parseInt($(this).attr("data-row"));
            //colonna
            let c = parseInt($(this).attr("data-col"));
            //controllo la cella cliccata è una mina
            if (!campo.controlloSeMina(r, c)) {
                //sconfitta
                gioco = false;
                //set scritta risultato (sconfitta)
                $('#risultato').html("SCONFITTA");
                //se tutte le celle che non sono mine sono state aperte
            } else if (campo.n * campo.n - campo.cAperte <= campo.mine) {
                //vittoria
                gioco = false;
                //set scritta risultato (vittoria)
                $('#risultato').html("VITTORIA!");
            }
            //se la partita è terminata
            if (!gioco)
                //visione di tutte le mine
                campo.vediMine();  
        } 
    });
});
