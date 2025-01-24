import {Movie} from "./movie.model";

// sve sam kucao da li tako treba?


export class MovieService{
    private movies : Movie [] = [] // api ovde?
    private recommended: Movie [] = [] // preporuke, msm da ne treba za projekat
    private soon: Movie []=[] // uskoro, msm da ne treba za projekat


    getMovies(): Movie[]{
        return this.movies
    }

    // get soon i recomended
    
    getFilteredMovies(search:string): Movie[]{
        return this.movies.filter( movie => movie.ime.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    }

    getUniqueGenres(): string[] {
        const genres: string [] = [];
        this.movies.forEach( movie => {
            if(!genres.includes(movie.zanr)){
                genres.push(movie.zanr);
            }
        })
        return genres;
    }

    getFilterMovieByGenre(genre: string ): Movie[]{
        return this.movies.filter( movie => movie.zanr === genre);
    }

    getUniqueDirectors(): string []{ // vrv ne treba
        const directors: string []=[];
        this.movies.forEach(movie => {
            if(!directors.includes(movie.reziser)){
                directors.push(movie.reziser);
            }
        })
        return directors;
    }

    getFilterDirector(director: string): Movie[]{
        return this.movies.filter(movie => movie.reziser === director);
    }

    getUniqueActors(): string []{ // vrv ne treba
        const actors: string []=[];
        this.movies.forEach(movie => {
            movie.glumci.forEach((actor : string) => {
                if(!actors.includes(actor)){
                    actors.push(actor);
            }
            
            })
        })
        return Array.from(actors);
    }

    getFilterActor(actor: string): Movie[]{
        return this.movies.filter(movie => movie.glumci.includes(actor));
    }

    sortByPriceAsc (movies: Movie []): Movie [] {
        return movies.slice().sort((a, b) => a.cenaKarte - b.cenaKarte)
    
      }
      sortByPriceDesc (movies: Movie []): Movie [] {
        return movies.slice().sort((a, b) => b.cenaKarte - a.cenaKarte)
    
    }
    sortByTimeAsc (movies: Movie []): Movie [] {
      return movies.slice().sort((a, b) => a.trajanje - b.trajanje)
      }

    sortByTimeDesc (movies: Movie []): Movie [] {
        return movies.slice().sort((a, b) => b.trajanje- a.trajanje)
        }

    sortByRateAsc (movies: Movie []): Movie [] {
          return movies.slice().sort((a, b) => a.recenzijeKorisnika - b.recenzijeKorisnika)
    
     }

     sortByRateDesc (movies: Movie []): Movie [] {
      return movies.slice().sort((a, b) => b.recenzijeKorisnika - a.recenzijeKorisnika)
    
    }

    sortByDateAsc (movies: Movie []): Movie [] {
      return movies.slice().sort((a, b) => a.datumIzlaska - b.datumIzlaska)
    
    }
    
    sortByDateDesc (movies: Movie []): Movie [] {
      return movies.slice().sort((a, b) => b.datumIzlaska - a.datumIzlaska)
    
    }

}


