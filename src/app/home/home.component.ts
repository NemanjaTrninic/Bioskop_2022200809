import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { UserService } from '../service&model/user.service';
import { MoviesComponent } from '../movies/movies.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar, 
    MatIconModule, 
    MatTabsModule,
    MoviesComponent, 
    RouterLink, NgIf, 
    MatButtonModule, 
    MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:  [ UserService, CartService ]
})


export class HomeComponent {

  profileOpened: boolean= false;

  constructor( 
    public userService: UserService, public dialog: MatDialog, private cartService: CartService
   ){}

   openProfile(userId:number){
    this.profileOpened = true
    const profileDialog = this.dialog.open(ProfileComponent,{
      disableClose:true,
      width: "80vw",
      data:{
        user: this.userService.getUserById(userId)
      }
    })

    profileDialog.afterClosed().subscribe((result) =>{
      this.profileOpened= false
    })
   }

   reserveMovie(movie:any){
    this.cartService.addToCart(movie)
    alert(`${movie.ime} je dodat u korpu!`);
   }

}
