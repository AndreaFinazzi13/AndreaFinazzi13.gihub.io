import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Date;

public class index {
    public static void main(String[] args) throws Exception{
        //1. creazione degli oggetti che popoleranno il file di testo
        //date
        Date dataNascita = new Date(1);
        Date dataAssunzione = new Date(9);
        //costruzione di uffici e dipendenti che successivamente verranno salvati sul file
        //dipendenti
        Dipendente d1 = new Dipendente(dataNascita, dataAssunzione, 40, "Andrea", "Finazzi", "Via Leoncavallo 13", "PR22");
        Dipendente d2 = new Dipendente(dataNascita, dataAssunzione, 38, "Pietro", "Brandovarsi", "Via Rossi 16", "AA01");
        Dipendente d3 = new Dipendente(dataNascita, dataAssunzione, 40, "Riccardo", "Mognoni", "Via Depretis 113", "PR22");
        Dipendente d4 = new Dipendente(dataNascita, dataAssunzione, 42, "Luca", "Bertiato", "Via Verdi 3", "PR22");
        Dipendente d5 = new Dipendente(dataNascita, dataAssunzione, 40, "Simone", "Radice", "Via Della Liberazione 42", "AA01");
        //uffici
        Ufficio u1 = new Ufficio(1, 12, "programmazione", "1", "PR22", "Luga Sbesh");
        Ufficio u2 = new Ufficio(0, 4, "gestione azeinda", "0", "AA01", "Luca Gobbetto");

        //2. file
        //variabile in cui è salvato il nome del file
        String nomeFile = "archivio.txt";
        //creazione file
        File file = new File(nomeFile);
        //controllo se il file non esiste ancora
        if (!file.exists()) 
            //se non esiste lo creo
            file.createNewFile();
        
        //3. riempimento del file 
        try {
            //apertura del file creato in precedenza in scrittura
            FileWriter writer = new FileWriter(nomeFile, false);

            //scrittura degli uffici
            //u1
            writer.write(u1.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
            //u2
            writer.write(u2.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 

            //scrittura dei dipendenti
            //d1
            writer.write(d1.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
            //d2
            writer.write(d2.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
            //d3
            writer.write(d3.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
            //d4
            writer.write(d4.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
            //d5
            writer.write(d5.toString());
            //nuova riga
            writer.write(System.lineSeparator()); 
             
            //chiusura del file precedentemente aperto in lettura
            writer.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
