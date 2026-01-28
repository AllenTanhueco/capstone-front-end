import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { LandingComponent } from './app/landing/landing.component';
import { CitizenCharterComponent } from './app/citizen-charter/citizen-charter.component';
import { AnnouncementComponent } from './app/announcement/announcement.component';
import { CommunityComponent } from './app/community/community.component';
import { DocumentsComponent } from './app/documents/documents.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AdminComponent } from './app/admin/admin.component';
import { MainadminComponent } from './app/mainadmin/mainadmin.component';
import { ContactComponent } from './app/contact/contact.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
