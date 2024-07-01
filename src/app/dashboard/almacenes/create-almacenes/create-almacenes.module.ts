import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAlmacenesComponent } from './create-almacenes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes:Routes = [
  {
    path:'',
    component:CreateAlmacenesComponent
  },
  {
    path:':id',
    component:CreateAlmacenesComponent
  }
]

@NgModule({
  declarations: [
    CreateAlmacenesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class CreateAlmacenesModule { }
