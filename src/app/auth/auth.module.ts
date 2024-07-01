import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';


const routes:Routes = [
  {
    path:'',
    loadChildren:()=> import('./sign-in/sign-in.module').then(m=>m.SignInModule)
  }
]

@NgModule({
  declarations: [
    AuthComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
