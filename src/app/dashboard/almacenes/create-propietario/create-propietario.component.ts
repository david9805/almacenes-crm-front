import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-create-propietario',
  templateUrl: './create-propietario.component.html',
  styleUrls: ['./create-propietario.component.css']
})
export class CreatePropietarioComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef:MatDialogRef<CreatePropietarioComponent>,
    private snackbarService:SnackbarService,
    private variables:VariablesService
  ){
    this.propietarioForm.markAllAsTouched();

    if(data.element){
      this.dataPropietario = data.element
    }    

    if (data.indice){
      this.indice = data.indice
    }
  }

  dataPropietario:any;
  indice=0;  
  nombres:FormControl = new FormControl(null,[Validators.required]);
  apellidos:FormControl = new FormControl(null,[Validators.required]);
  cargo:FormControl = new FormControl(null,[Validators.required]);
  email:FormControl = new FormControl(null,[Validators.required,Validators.email]);
  telefono:FormControl = new FormControl(null,[Validators.required]);
  celular:FormControl = new FormControl(null,[Validators.required]);
  idPropietario:FormControl = new FormControl(0);
  usuarioCrea:FormControl = new FormControl(this.variables.nombreCompleto);
  propietarioForm = new FormGroup({
    idPropietario:this.idPropietario,
    nombres:this.nombres,
    apellidos:this.apellidos,
    cargo:this.cargo,
    email:this.email,
    telefono:this.telefono,
    celular:this.celular,
    usuarioCrea:this.usuarioCrea
  });

  ngOnInit(): void {
    this.loadData();
    
  }

  save(){  
    console.log(this.propietarioForm.value);
    if (this.propietarioForm.invalid) {
      this.snackbarService.show('Debe digitar todos los campos','error');
      return;
    }

    this.dialogRef.close({
      data:this.propietarioForm.value
    })
  }

  close(){
    this.dialogRef.close();
  }

  loadData(){
    if (this.dataPropietario){
      this.idPropietario.setValue(this.dataPropietario.idPropietario);
      this.nombres.setValue(this.dataPropietario.nombres || '');
      this.apellidos.setValue(this.dataPropietario.apellidos || '');
      this.cargo.setValue(this.dataPropietario.cargo|| '');
      this.email.setValue(this.dataPropietario.email || '');
      this.telefono.setValue(this.dataPropietario.telefono || '');
       this.celular.setValue(this.dataPropietario.celular || '')
    }
    else{
      this.idPropietario.setValue(this.indice + 1);
    }
  }
}
