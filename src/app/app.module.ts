import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ArNLPComponent} from './components/ar-nlp/ar-nlp.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { NewTemplateComponent } from './components/asag/new-template/new-template.component';
import { LoadTemplateComponent } from './components/asag/load-template/load-template.component';
import { DefaultTemplateComponent } from './components/asag/default-template/default-template.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'process' , component: ArNLPComponent },
  { path: 'addtemplate' , component: NewTemplateComponent },
  { path: 'gettemplate/:prof_name/:template_name' , component: LoadTemplateComponent },
  { path: '' ,   redirectTo: 'home', pathMatch: 'full'  },
  { path: '**' ,   redirectTo: 'home', pathMatch: 'full'  },
];

@NgModule({
  declarations: [
    AppComponent,
    ArNLPComponent,
    NavBarComponent,
    NewTemplateComponent,
    LoadTemplateComponent,
    DefaultTemplateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
