import java.util.Date;
//classe dipendente
public class Dipendente {
    //attributi (prima quelli di lunghezza fissa, poi quelli di lunghezza variabile)
    private Date dataNascita;
    private Date dataAssunzione;
    private int oreLavoroSettimanali;
    private String nome;
    private String cognome;
    private String indirizzo;
    private String reparto;

    //costruttore di default
    public Dipendente() {
        //inizizalizzione attributi
        this.dataNascita = null;
        this.dataAssunzione = null;
        this.oreLavoroSettimanali = 0;
        this.nome = "";
        this.cognome = "";
        this.indirizzo = "";
        this.reparto = "";
    }

    //costruttore parametrico
    public Dipendente(Date dataNascita, Date dataAssunzione, int oreLavoroSettimanali, String nome, String cognome, String indirizzo, String reparto) {
        //assegnazione dei vari parametri a tutti gli attributi
        this.dataNascita = dataNascita;
        this.dataAssunzione = dataAssunzione;
        this.oreLavoroSettimanali = oreLavoroSettimanali;
        this.nome = nome;
        this.cognome = cognome;
        this.indirizzo = indirizzo;
        this.reparto = reparto;
    }

    //metodi getter e setter per ogni attributo
    //dataNascita
    public Date getDataNascita() {
        return dataNascita;
    }
    public void setDataNascita(Date dataNascita) {
        this.dataNascita = dataNascita;
    }
    //dataAssunzione
    public Date getDataAssunzione() {
        return dataAssunzione;
    }
    public void setDataAssunzione(Date dataAssunzione) {
        this.dataAssunzione = dataAssunzione;
    }
    //oreLavoroSettimanali
    public int getOreLavoroSettimanali() {
        return oreLavoroSettimanali;
    }
    public void setOreLavoroSettimanali(int oreLavoroSettimanali) {
        this.oreLavoroSettimanali = oreLavoroSettimanali;
    }
    //nome
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    //cognome
    public String getCognome() {
        return cognome;
    }
    public void setCognome(String cognome) {
        this.cognome = cognome;
    }
    //indirizzo
    public String getIndirizzo() {
        return indirizzo;
    }
    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }
    //reparto
    public String getReparto() {
        return reparto;
    }
    public void setReparto(String reparto) {
        this.reparto = reparto;
    }

    //conversione a stringa dell'intero oggetto
    @Override
    public String toString() {
        return "Dipendente[dataNascita= " + dataNascita + ", dataAssunzione=" + dataAssunzione + ", oreLavoroSettimanali=" + oreLavoroSettimanali + "," + "nome=" + nome + ", cognome=" + cognome + ", indirizzo=" + indirizzo + ", reparto=" + reparto + ']';

    }
}
