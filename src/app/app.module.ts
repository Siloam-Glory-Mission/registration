import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeadersComponent } from './layouts/headers/headers.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { Intro2Component } from './intro2/intro2.component';
import { Intro3Component } from './intro3/intro3.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { NotComponent } from './not/not.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmsComponent } from './confirms/confirms.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeadersComponent,
    SidebarComponent,
    IntroComponent,
    Intro2Component,
    Intro3Component,
    ThanksComponent,
    SpinnerComponent,
    NotComponent,
    ConfirmComponent,
    ConfirmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
