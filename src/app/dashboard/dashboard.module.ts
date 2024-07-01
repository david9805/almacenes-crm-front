import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


const routes:Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'almacen',
        loadChildren: ()=> import('./almacenes/almacenes.module').then(m=>m.AlmacenesModule)
      }
    ]
  }
]
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]  
})
export class DashboardModule { }
