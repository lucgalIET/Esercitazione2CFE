export class Autore {
    idAutore: number;
    nome: string;
    cognome: string;
    dataNascita: string;
    nazione: string;
    listaLibri: [];
  
    constructor(
      idAutore: number,
      nome: string,
      cognome: string,
      dataNascita: string,
      nazione: string,
      listaLibri: []
    ) {
      this.idAutore = idAutore;
      this.nome = nome;
      this.cognome = cognome;
      this.dataNascita = dataNascita;
      this.nazione = nazione;
      this.listaLibri = listaLibri;
    }
  }
  