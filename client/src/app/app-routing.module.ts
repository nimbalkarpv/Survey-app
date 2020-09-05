import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateComponent } from './update/update.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: PersonalInfoComponent },
      { path: 'education', component: EducationComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'form1', component: Form1Component },
      { path: 'form2', component: Form2Component },
      { path: 'form3', component: Form3Component },
    ],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
