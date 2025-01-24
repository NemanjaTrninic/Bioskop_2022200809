import { Component,OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../movies/movie.model';
import { UserService } from '../auth/user.service';
import { MatInput } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    NgIf, 
    RouterLink, 
    MatFormField, 
    MatLabel, 
    MatCardModule, 
    CommonModule, 
    FormsModule, 
    MatInput, 
   MatChipsModule,
   MatDividerModule, 
   NgFor, MatInputModule, 
   MatSelectModule, 
   MatFormFieldModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [MovieService, UserService, CartService]
})
export class SearchComponent implements OnInit {
  movies: any [] = [];
  search: string = '';
  filteredMovies: Movie [] = [];
  profileOpened: boolean = false;
  getsearchGenre: string [] = [];
  selectedGenre: string = '';
  selectedDirector: string = '';
  directors: string [] = [];
  selectedActor: string =""; 
  actors: string [] = []; 
  sortMovies:  Movie []= [];
  reservations: any [] = [];

  constructor(private movieService: MovieService, public userService: UserService, private cartService: CartService, private router: Router){}

  ngOnInit(): void {
    this.filteredMovies= this.movieService.getMovies();
    this.getsearchGenre=this.movieService.getUniqueGenres();
    this.directors = this.movieService.getUniqueDirectors();
    this.actors = this.movieService.getUniqueActors();

  }

  searchChange(){
    this.filteredMovies=this.movieService.getFilteredMovies(this.search);
  }

  onGenre(genre:string){ // genre
    this.selectedGenre= genre;
    this.filteredMovies=this.movieService.getFilterMovieByGenre(this.selectedGenre);
  }

  onDirector(){
    this.filteredMovies= this.movieService.getFilterDirector(this.selectedDirector);
  }

  onActor() {
    this.filteredMovies = this.movieService.getFilterActor(this.selectedActor);
  }

  sortByPriceAsc(){
    this.filteredMovies= this.movieService.sortByPriceAsc(this.filteredMovies);
  }

  sortByPriceDesc(){
    this.filteredMovies = this.movieService.sortByPriceDesc(this.filteredMovies);
  }

  sortByTimeAsc(){
    this.filteredMovies = this.movieService.sortByTimeAsc(this.filteredMovies);
  }

  sortByTimeDesc(){
    this.filteredMovies = this.movieService.sortByTimeDesc(this.filteredMovies);
  }

  sortByDateAsc(){
    this.filteredMovies = this.movieService.sortByDateAsc(this.filteredMovies);
  }
  sortByDateDesc(){
    this.filteredMovies = this.movieService.sortByDateDesc(this.filteredMovies);
  }

  sortByRateAsc(){
    this.filteredMovies = this.movieService.sortByRateAsc(this.filteredMovies);
  }

  sortByRateDesc(){
    this.filteredMovies = this.movieService.sortByRateAsc(this.filteredMovies);
  }

  clearInput(): Movie[]{

    this.search = '';
    this.selectedGenre = '';
    this.selectedActor = '';
    this.filteredMovies = this.movieService.getMovies();
    return this.filteredMovies;

  }

  reserveMovie(movie:any){
    this.cartService.addToCart(movie);
    alert(`${movie.ime} je dodat u Korpu.`);
  }

}
