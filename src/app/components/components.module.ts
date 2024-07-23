import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material/material.module';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../directive/directive.module';
import { NotFoundComponent } from './not-found/not-found.component';






@NgModule({
  declarations: [
    InputComponent,    
    CustomSnackbarComponent, NotFoundComponent,
  ],
  imports: [
    CommonModule,                
    MaterialModule,
    DirectiveModule
  ],
  exports:[
    InputComponent,    
  ]
})
export class ComponentsModule { }
