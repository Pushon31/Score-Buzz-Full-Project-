import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = "";
  password = "";
  errorMessage="";

  constructor(private authService : AuthService , private router:Router){
  
  }

 onLogin() {
  const response = this.authService.login(this.email, this.password);

  if (response.success) {
    // Logged in successfully → redirect to profile/home
    this.router.navigate(['/profile']);
  } else {
    // Show error message in UI
    this.errorMessage = response.message;
  }
}
    

}
