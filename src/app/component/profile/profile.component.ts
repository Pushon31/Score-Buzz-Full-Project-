import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

interface User {
  email: string;
  password?: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Load current user from localStorage
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  // Upload profile picture
  uploadProfile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.currentUser) {
          this.currentUser.photoUrl = reader.result as string;
          localStorage.setItem('authUser', JSON.stringify(this.currentUser));
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Logout function
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Delete account
  deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      // Remove from fake database in AuthService
      if (this.currentUser) {
        this.authService.deleteUser(this.currentUser.email);
      }
      this.authService.logout();
      this.router.navigate(['/register']);
    }
  }

  // Optional: Edit Profile (update email)
  editProfile() {
    const newEmail = prompt('Enter new email:', this.currentUser?.email);
    if (newEmail && this.currentUser) {
      this.currentUser.email = newEmail;
      localStorage.setItem('authUser', JSON.stringify(this.currentUser));
    }
  }
}
