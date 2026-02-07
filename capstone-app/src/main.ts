import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { LandingComponent } from './app/landing/landing.component';
import { DocumentsComponent } from './app/documents/documents.component';
import { ProfileComponent } from './app/profile/profile.component';
import { AdminComponent } from './app/admin/admin.component';
import { MainadminComponent } from './app/mainadmin/mainadmin.component';
import { DelayedRegistrationOfBirthComponent } from './app/delayed-registration-of-birth/delayed-registration-of-birth.component';
import { DelayedRegistrationOfDeathComponent } from './app/delayed-registration-of-death/delayed-registration-of-death.component';
import { DelayedRegistrationOfMarriageComponent } from './app/delayed-registration-of-marriage/delayed-registration-of-marriage.component';
import { IssuanceOfCertifiedCopyOfBirthOthersComponent } from './app/issuance-of-certified-copy-of-birth-others/issuance-of-certified-copy-of-birth-others.component';
import { IssuanceOfMarriedLicenseComponent } from './app/issuance-of-married-license/issuance-of-married-license.component';
import { RegistrationOfBirthOnTimeComponent } from './app/registration-of-birth-on-time/registration-of-birth-on-time.component';
import { RegistrationOfDeathOnTimeComponent } from './app/registration-of-death-on-time/registration-of-death-on-time.component';
import { RegistrationOfMarriageOnTimeComponent } from './app/registration-of-marriage-on-time/registration-of-marriage-on-time.component';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
