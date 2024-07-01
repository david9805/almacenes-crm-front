import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  usuario:FormControl = new FormControl('');
  password:FormControl = new FormControl('');

  recoverForm = new FormGroup({
    usuario : this.usuario,
    password:this.password
  })

  constructor(private matDialogRef: MatDialogRef<RecoverPasswordComponent>,
              private authService:AuthService,
              private snackbarService:SnackbarService,
              private router:Router
  ){

  }

  recover(){
    this.authService.recover(this.recoverForm.value).subscribe((data:any)=>{
      this.snackbarService.show('Contraseña actualizada','success');
      this.matDialogRef.close();
    },
    error=>{
      this.snackbarService.show(error.error.message,'error')
    })
  }
  close(){
    this.matDialogRef.close();
  }
}
