import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../cart/cart.service';
import { MovieService } from '../movie.service'; // los  import?

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatCardModule,MatIconModule,CommonModule,MatButtonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [MovieService, CartService ]
})
export class MoviesComponent  implements OnInit{
   
  movies: any[]=[]

  constructor(private movieService: MovieService, private cartService: CartService){}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies()
  }
  reserveMovie(movie:any){
    this.cartService.addToCart(movie);
    alert(`${movie.ime} je dodat u korpu!`);
  }

}
