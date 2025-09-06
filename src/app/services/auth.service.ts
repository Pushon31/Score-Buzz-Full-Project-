import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Making fake users database
  private users = [
    {email : "syednooresams@gmail.com" , password : "12345678" },
    {email : "robiulhossain@gmail.com" , password : "abcdefg" },
    {email : "monishatamima@gmail.com" , password : "12345678" },
    {email : "rakibmridha@gmail.com" , password : "12345678" },
  ]

  //taking a login variable

  private isLoggedIn = false;

  constructor() { }

   // Register method
  register(email: string, password: string): { success: boolean, message: string } {
    const userExists = this.users.find(u => u.email === email);
    if (userExists) {
      return { success: false, message: 'Email already registered!' };
    }

    // Add new user
    this.users.push({ email, password });
    return { success: true, message: 'Registration successful!' };
  }

  // Login method
  login(email: string, password: string): { success: boolean, message: string } {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.isLoggedIn = true;
      localStorage.setItem('authUser', JSON.stringify(user)); // fake persistence
      return { success: true, message: 'Login successful!' };
    }

    return { success: false, message: 'Invalid email or password!' };
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('authUser');
  }

 isAuthenticated(): boolean {
  this.isLoggedIn = !!localStorage.getItem('authUser');
  return this.isLoggedIn;
}

deleteUser(email: string) {
  this.users = this.users.filter(u => u.email !== email);
}


// AuthService এর মধ্যে
getCurrentUser() {
  const user = localStorage.getItem('authUser');
  return user ? JSON.parse(user) : null;
}

}
  

