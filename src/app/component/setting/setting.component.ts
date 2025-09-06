import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  changePassword() {
    console.log("Change Password clicked!");
 
  }

  notificationPreferences() {
    console.log("Notification Preferences clicked!");
  
  }

  privacySettings() {
    console.log("Privacy Settings clicked!");
    
  }

  themeToggle() {
    console.log("Theme Toggle clicked!");
    
  }
}
