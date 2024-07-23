import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(private authService:AuthService){
  }

  close(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }
}
