import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email = ""
  password = ""
  existMessage =""

  constructor(private authService:AuthService,private router:Router){}
onRegister() {
  const response = this.authService.register(this.email, this.password);

  if (response.success) {
    // Registration successful → optionally redirect to login
    this.router.navigate(['/login']);
  } else {
    // Show error message in UI
    this.existMessage = response.message;
  }
}

}
