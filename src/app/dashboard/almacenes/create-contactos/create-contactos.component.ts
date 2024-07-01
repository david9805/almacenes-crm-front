import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-create-contactos',
  templateUrl: './create-contactos.component.html',
  styleUrls: ['./create-contactos.component.css']
})
export class CreateContactosComponent {

  constructor(private dialogRef: MatDialogRef<CreateContactosComponent>,
              @Inject(MAT_DIALOG_DATA) data:any,
              private snackBarService:SnackbarService,
              private cd:ChangeDetectorRef  ){
    if (data.indice){
      this.indice = data.indice;
    }    
    if (data.element){
      this.dataContacto = data.element;    
    }
    this.contactoForm.markAllAsTouched();
  }
  
  indice = 0;
  nombres = new FormControl(null,[Validators.required]);
  apellidos = new FormControl(null,[Validators.required]);
  cargo = new FormControl(null,[Validators.required]);
  email = new FormControl(null,[Validators.required, Validators.email]);
  telefono = new FormControl(null,[Validators.required]);
  celular = new FormControl(null,[Validators.required]);
  idContactoAlmacen = new FormControl(0);

  contactoForm = new FormGroup({
    idContactoAlmacen:this.idContactoAlmacen,
    nombres:this.nombres,
    apellidos:this.apellidos,
    cargo:this.cargo,
    email:this.email,    
    telefono:this.telefono,
    celular:this.celular
  });

  dataContacto:any;

  ngOnInit(): void {
     this.loadData();
    
  }
  

  onSubmit(): void {
  
    console.log(this.contactoForm.value);
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();      
      this.snackBarService.show('Debe Digitar Todos Los Campos', 'error');
      return;
    }
    this.dialogRef.close({ data: this.contactoForm.value });
  }

  close(){
    this.dialogRef.close();
  }


  loadData(){
    if (this.dataContacto) {
      this.idContactoAlmacen.setValue(this.dataContacto.idContactoAlmacen);
      this.nombres.setValue(this.dataContacto.nombres || '');
      this.apellidos.setValue(this.dataContacto.apellidos || '');
      this.cargo.setValue(this.dataContacto.cargo || '');
      this.email.setValue(this.dataContacto.email || '');
      this.telefono.setValue(this.dataContacto.telefono || '');
      this.celular.setValue(this.dataContacto.celular || '');
    }
    else{
      this.idContactoAlmacen.setValue(this.indice + 1);
    }
  }  
}
