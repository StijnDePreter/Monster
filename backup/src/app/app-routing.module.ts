import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './security/auth.guard';
import { SecurityComponent } from './security/security/security.component';
import { AllVacanciesComponent } from './vacancies/all-vacancies/all-vacancies.component';
import { VacancyDetailComponent } from './vacancies/vacancy-detail/vacancy-detail.component';
import { ApplicationFormComponent } from './applications/application-form/application-form.component';
import { MyCompaniesComponent } from './company/my-companies/my-companies.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vacancies', component: AllVacanciesComponent },
  { path: 'vacancy/:id', component: VacancyDetailComponent },
  { path: 'applyforvacancy/:id', component: ApplicationFormComponent },
  { path: 'mycompanies', component: MyCompaniesComponent},
  { path: 'company/:id', component: CompanyDetailComponent},
  { path: 'companyform', component: CompanyFormComponent},
  
  { path: 'login', component: SecurityComponent},
  { path: 'register', component: SecurityComponent},
  { path: 'logout', component: SecurityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }