import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

=======
>>>>>>> f29ed219d43a14a82d271b3802d843c35485e92d

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

<<<<<<< HEAD
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
    

=======
>>>>>>> f29ed219d43a14a82d271b3802d843c35485e92d
}
