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

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
