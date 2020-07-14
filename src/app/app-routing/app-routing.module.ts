import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule, Router} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { ContatoComponent } from '../contato/contato.component';

const routes: Routes =[
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contato', component: ContatoComponent}
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


