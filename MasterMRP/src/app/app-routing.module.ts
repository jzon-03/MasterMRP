import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './home/account/account.component';
import { HomeComponent } from './home/home.component';
import { MailComponent } from './home/mail/mail.component';
import { SettingsComponent } from './home/settings/settings.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:'home',
    component:HomeComponent,
    children:[
      {path:'account',component:AccountComponent},
      {path:'mail',component:MailComponent},
      {path:'settings',component:SettingsComponent}
    ]
  },
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
