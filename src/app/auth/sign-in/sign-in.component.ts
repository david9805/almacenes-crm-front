import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  user = new FormControl(null,[Validators.required]);
  password = new FormControl(null,[Validators.required]);  


 userForm = new FormGroup({
  user : this.user,
  password: this.password
 })

 
 constructor(private authService:AuthService,
              private snackBarService:SnackbarService,
              private router:Router,
              private dialog:MatDialog,
              private variables:VariablesService
 ){
  
 }

 login(){    
  // this.dataUser();
  if (this.userForm.invalid) {        
    this.userForm.markAllAsTouched();
    this.snackBarService.show('Debes ingresar usuario y contraseña.', 'error');
    return;
  }  
  this.authService.login(this.userForm.value).pipe(
    catchError(err => {
      // Manejo de errores      
      this.snackBarService.show(err.error.message, 'error');
      return throwError(err);
    })
  ).subscribe(
    (data:any) => {
      localStorage.setItem('token',data.access_token);
      localStorage.setItem('usuario',JSON.stringify(data.user));
      this.variables.convertJson(JSON.stringify(data.user));
      this.router.navigate(['/dashboard'])      
      // Manejo de la respuesta exitosa
    },
    error => {
      console.log(error);
      // Manejo adicional del error si es necesario
      this.snackBarService.show(error.error.message, 'error');
    }
  );
 }

 recoverPassword(){
  const dialogRef = this.dialog.open(RecoverPasswordComponent);
 }


}
