export class Post {

    //Fields 
    categoria: String;
    titolo: String;
    descrizione: String;
    link_immagine: String;
    link_content: String;

    constructor(categoria: String, titolo: String, descrizione: String, link_immagine: String, link_content: String) {
        this.categoria = categoria;
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.link_immagine = link_immagine;
        this.link_content = link_content;
    }
}