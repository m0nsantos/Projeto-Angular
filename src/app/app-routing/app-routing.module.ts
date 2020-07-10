import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes =[
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)], 
    exports: [
      RouterModule
  ],
})


export class AppRoutingModule { 

}


