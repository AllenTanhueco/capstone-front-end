import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { DelayedRegistrationOfBirthComponent } from './delayed-registration-of-birth/delayed-registration-of-birth.component';
import { DelayedRegistrationOfDeathComponent } from './delayed-registration-of-death/delayed-registration-of-death.component';
import { DelayedRegistrationOfMarriageComponent } from './delayed-registration-of-marriage/delayed-registration-of-marriage.component';
import { IssuanceOfCertifiedCopyOfBirthOthersComponent } from './issuance-of-certified-copy-of-birth-others/issuance-of-certified-copy-of-birth-others.component';
import { IssuanceOfMarriedLicenseComponent } from './issuance-of-married-license/issuance-of-married-license.component';
import { RegistrationOfBirthOnTimeComponent } from './registration-of-birth-on-time/registration-of-birth-on-time.component';
import { RegistrationOfDeathOnTimeComponent } from './registration-of-death-on-time/registration-of-death-on-time.component';
import { RegistrationOfMarriageOnTimeComponent } from './registration-of-marriage-on-time/registration-of-marriage-on-time.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'documents', component: DocumentsComponent }, 
  { path: 'profile', component: ProfileComponent },  
  { path: 'admin', component: AdminComponent },  
  { path: 'mainadmin', component: MainadminComponent},
  { path: 'delayed-registration-of-birth', component: DelayedRegistrationOfBirthComponent },
  { path: 'delayed-registration-of-death', component: DelayedRegistrationOfDeathComponent },
  { path: 'delayed-registration-of-marriage', component: DelayedRegistrationOfMarriageComponent },
  { path: 'issuance-of-certified-copy-of-birth-others', component: IssuanceOfCertifiedCopyOfBirthOthersComponent },
  { path: 'issuance-of-married-license', component: IssuanceOfMarriedLicenseComponent },
  { path: 'registration-of-birth-on-time', component: RegistrationOfBirthOnTimeComponent },
  { path: 'registration-of-death-on-time', component: RegistrationOfDeathOnTimeComponent },
  { path: 'registration-of-marriage-on-time', component: RegistrationOfMarriageOnTimeComponent },
  { path: '**', redirectTo: '' }
];
