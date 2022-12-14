import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ViewCandidatesComponent } from './admin/view-candidates/view-candidates.component';
import { CandidateLoginComponent } from './candidate/candidate-login/candidate-login.component';
import { CandidateRegisterComponent } from './candidate/candidate-register/candidate-register.component';
import { CommonComponent } from './common/common.component';
import { ViewJobComponent } from './common/view-job/view-job.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'candidate-register',
    component: CandidateRegisterComponent,
  },
  {
    path: 'candidate-login',
    component: CandidateLoginComponent,
  },
  {
    path: 'AllJobs',
    component: CommonComponent,
  },
  {
    path: 'viewCandidates',
    component: ViewCandidatesComponent,
  },
  {
    path: 'viewjob',
    component: ViewJobComponent,
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
