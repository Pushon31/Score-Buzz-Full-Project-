import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TermsConditionComponent } from './component/terms-condition/terms-condition.component';
import { SponsorsComponent } from './component/sponsors/sponsors.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
   {path:'',component:HomeComponent},
 { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
,
  {path:'setting',component:SettingComponent},
  {path:'more',component:MoreComponent},
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'tournaments',component:TournamentsComponent},
  {path:'videos',component:VideosComponent},
  {path:'fixture',component:FixturesComponent},
  {path:'live',component:LiveMatchesComponent},
  {path:'upcoming',component:UpcomingMatchesComponent},
  {path:'finished',component:FinishedMatchesComponent},
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivacyPolicyComponent},
  {path:'terms',component:TermsConditionComponent},
  {path:'sponsor',component:SponsorsComponent},
  {path:'contact',component:ContactsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
