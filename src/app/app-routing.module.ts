import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[LoggedGuard]
  },
  {
    path:'',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    component:NotFoundComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
