import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenesComponent } from './almacenes.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { CreateContactosComponent } from './create-contactos/create-contactos.component';
import { CreatePropietarioComponent } from './create-propietario/create-propietario.component';

const routes:Routes = [
  {
    path:'',
    component:AlmacenesComponent,

  },
  {
    path:'create',
    loadChildren:()=> import('./create-almacenes/create-almacenes.module').then(m => m.CreateAlmacenesModule)
  },
  {
    path:'update/:id',
    loadChildren:()=> import('./create-almacenes/create-almacenes.module').then(m => m.CreateAlmacenesModule)
  }
]

@NgModule({
  declarations: [
    AlmacenesComponent,
    CreateContactosComponent,
    CreatePropietarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class AlmacenesModule { }
