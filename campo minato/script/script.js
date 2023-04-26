//inizializzazione campo minato da 10 righe e 10 colonne
const campo = new Campo(10, 10);
//partita iniziata
let gioco = true;
$(document).ready(function () {
    //inizializzazione campo
    campo.inizializza();
    //visualizzazione
    $('.cella').css("line-height", $('.cella').width() + "px");
    $('.cella').css("font-size", (32 / 50) * $('.cella').width() + "px");
    //posizionamento casuale mine
    campo.posizionamentoMine();

    //click di una cella
    $('.cella').click(function () {
        //partita in corso
        if (gioco) {
            let r = parseInt($(this).attr("data-row"));
            let c = parseInt($(this).attr("data-col"));
            if (!campo.controlla(r, c)) {
                //sconfitta
                gioco = false;
                $('#stato').html("Hai perso!");
            } else if (campo.n * campo.n - campo.cAperte <= campo.mine) {
                // hai vinto
                gioco = false;
                $('#stato').html("Hai vinto!");
            }
            //fine partita
            if (!gioco)
                //visualizzazione di tutte le mine
                campo.vediMine();
        } else {
            //visualizzazione termine gioco
            alert("Gioco terminato!");
        }
    });
});