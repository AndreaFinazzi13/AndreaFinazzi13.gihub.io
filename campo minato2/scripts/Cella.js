//classe cella
class Cella {
	//costruttore di default
	constructor() {
		this.mina = false;		    //cella corrente è una mina
		this.aperta = false;	//cella corrente è stata cliccata
		this.cont = 0;			    //numero mine vicine alla corrente
	}
}