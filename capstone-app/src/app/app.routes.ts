import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CitizenCharterComponent } from './citizen-charter/citizen-charter.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CommunityComponent } from './community/community.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'citizen-charter', component: CitizenCharterComponent },
  { path: 'announcements', component: AnnouncementComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'documents', component: DocumentsComponent }, 
  { path: 'profile', component: ProfileComponent },  
  { path: 'admin', component: AdminComponent },  
  { path: '**', redirectTo: '' }
];
