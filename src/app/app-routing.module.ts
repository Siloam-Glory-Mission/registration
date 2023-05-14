import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { IntroComponent } from './intro/intro.component';
import { ThanksComponent } from './thanks/thanks.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { NotComponent } from './not/not.component';


const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:IntroComponent
  },
  {
    path:'thanks',
    component:ThanksComponent
  },
  {
    path:'intro',
    component:Intro2Component
  },
  {
    path:'intros',
    component:Intro3Component
  },
  {
    path:'not',
    component:NotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
