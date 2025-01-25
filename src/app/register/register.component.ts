import { Component,NgModule } from '@angular/core';
import { UserService } from '../service&model/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    FormsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatCheckboxModule, 
    MatNativeDateModule, 
    NgIf,
    MatToolbarModule,
    MatIconModule,
    RouterLink, 
    MatCardModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [UserService]
})
export class RegisterComponent {

    errorExists= false
    errorText=""

    constructor(private router: Router, private userService: UserService){}

    onSubmit(form: NgForm){
      if(!this.userService.getUser(form.value.email)){
       this.errorExists = false;
       var newUser = this.userService.registerUser(
        form.value.ime, 
        form.value.prezime, 
        form.value.email, 
        form.value.password, 
        form.value.address, 
        form.value.contact, 
        form.value.dateBirth);

       this.router.navigate(['/login']);
     } else {
       this.errorExists = true;
       this.errorText = "Korisnik sa datom mejl adresom vec postoji";
     }
   }

}
