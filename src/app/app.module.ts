import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Navbar1Component } from './component/navbar1/navbar1.component';
import { Navbar2Component } from './component/navbar2/navbar2.component';
import { FooterComponent } from './component/footer/footer.component';
import { Footer2Component } from './component/footer2/footer2.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SettingComponent } from './component/setting/setting.component';
import { MoreComponent } from './component/more/more.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { TournamentsComponent } from './component/tournaments/tournaments.component';
import { VideosComponent } from './component/videos/videos.component';
import { FixturesComponent } from './component/fixtures/fixtures.component';
import { LiveMatchesComponent } from './component/live-matches/live-matches.component';
import { UpcomingMatchesComponent } from './component/upcoming-matches/upcoming-matches.component';
import { FinishedMatchesComponent } from './component/finished-matches/finished-matches.component';
import { AboutComponent } from './component/about/about.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { TermsConditionComponent } from './component/terms-condition/terms-condition.component';
import { SponsorsComponent } from './component/sponsors/sponsors.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component,
    FooterComponent,
    Footer2Component,
    ProfileComponent,
    SettingComponent,
    MoreComponent,
    HomeComponent,
    NewsComponent,
    TournamentsComponent,
    VideosComponent,
    FixturesComponent,
    LiveMatchesComponent,
    UpcomingMatchesComponent,
    FinishedMatchesComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    ContactsComponent,
    TermsConditionComponent,
    SponsorsComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
