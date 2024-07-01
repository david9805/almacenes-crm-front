import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material/material.module';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    InputComponent,    
    CustomSnackbarComponent,
  ],
  imports: [
    CommonModule,                
    MaterialModule,
  ],
  exports:[
    InputComponent,    
  ]
})
export class ComponentsModule { }
