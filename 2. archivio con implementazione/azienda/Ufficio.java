//classe ufficio
public class Ufficio {
    //attributi (prima quelli di lunghezza fissa, poi quelli di lunghezza variabile)
    private int id;
    private int numeroPostazioni;
    private String nomeUfficio;
    private String piano;
    private String sigla;
    private String nomeResponsabile;

    //costruttore di default
    public Ufficio() {
        //inizializzazione attributi
        this.id = -1;
        this.numeroPostazioni = 0;
        this.nomeUfficio = "";
        this.piano = "";
        this.sigla = "";
        this.nomeResponsabile = "";
    }

    //costruttore parametrico
    public Ufficio(int id, int numeroPostazioni, String nomeUfficio, String piano, String sigla, String nomeResponsabile) {
        //assegnazione dei vari parametri a tutti gli attributi
        this.id = id;
        this.numeroPostazioni = numeroPostazioni;
        this.nomeUfficio = nomeUfficio;
        this.piano = piano;
        this.sigla = sigla;
        this.nomeResponsabile = nomeResponsabile;
    }

    //metodi getter e setter per ogni attributo
    //id
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    //numeroPostazioni
    public int getNumeroPostazioni() {
        return numeroPostazioni;
    }
    public void setNumeroPostazioni(int numeroPostazioni) {
        this.numeroPostazioni = numeroPostazioni;
    }
    //nomeUfficio
    public String getNomeUfficio() {
        return nomeUfficio;
    }
    public void setNomeUfficio(String nomeUfficio) {
        this.nomeUfficio = nomeUfficio;
    }
    //piano
    public String getPiano() {
        return piano;
    }
    public void setPiano(String piano) {
        this.piano = piano;
    }
    //sigla
    public String getSigla() {
        return sigla;
    }
    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
    //nomeResponsabile
    public String getNomeResponsabile() {
        return nomeResponsabile;
    }
    public void setNomeResponsabile(String nomeResponsabile) {
        this.nomeResponsabile = nomeResponsabile;
    }

    //conversione a stringa dell'intero oggetto
    @Override
    public String toString() {
        return "Ufficio [id=" + id + ", numeroPostazioni=" + ", nomeUfficio=" + nomeUfficio + ", piano=" + piano + ", sigla=" + sigla + numeroPostazioni + ", nomeResponsabile=" + nomeResponsabile + "]";
    }
}
