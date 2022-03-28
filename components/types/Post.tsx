import { Timestamp } from "firebase/firestore";

export class Post {

    //Fields 
    categoria: String;
    titolo: String;
    descrizione: String;
    link_immagine: String;
    link_content: String;
    data: Timestamp;

    constructor(categoria: String, titolo: String, descrizione: String, link_immagine: String, link_content: String, data: Timestamp) {
        this.categoria = categoria;
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.link_immagine = link_immagine;
        this.link_content = link_content;
        this.data = data;
    }
}