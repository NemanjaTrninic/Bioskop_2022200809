import { Component } from '@angular/core';
import { UserService } from '../service&model/user.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { Router,RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf, 
    FormsModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    RouterLink, 
    MatCardModule, 
    MatToolbarModule, 
    MatIconModule
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent {

  errorExists = false
  errorText = ""

  constructor(private router: Router, private userService: UserService){}

  onSubmit(form: NgForm){
    var email = form.value.email
    var password = form.value.password;
    var user = this.userService.getUser(email);

    if(!user){
      this.errorExists= true
      this.errorText = "Ne postoji ovaj email"
      return
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email,password)
    if(!isPasswordValid){
      this.errorExists=true
      this.errorText = "Losa Lozinka"
      return
    }

    this.errorExists = false;
    this.router.navigate(['/home']);

  }

}
