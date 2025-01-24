
export interface Movie {
     id: string;
    ime: string;
    trajanje: number;
    zanr: string;
    datumPrikazivanja: Date;
    slikaUrl: string;
    opis: string;
    reziser: string;
    glumci: string[];
    datumIzlaska: number;
    cenaKarte: number;
    recenzijeKorisnika: number;
 
    /* id: string;
    name: string;
    runtime: number;
    genre: string;
    date: Date;
    pictureUrl: string;
    description: string;
    director: string;
    actors: string[];
    realeseDate: number;
    ticketPrice: number;
    review: number; */
}