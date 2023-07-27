export class Libro{
    id: number;
    titolo: string;
    isbn: string;
    genere: string;
    bibliotecaEntity: any;
    listaAutore: []

    constructor(
        id: number,
    titolo: string,
    isbn: string,
    genere: string,
    bibliotecaEntity: any,
    listaAutore: [] ){
        this.id = id;
        this.titolo = titolo;
        this.isbn = isbn;
        this.genere = genere;
        this.bibliotecaEntity = bibliotecaEntity;
        this.listaAutore = listaAutore;
    }
}

