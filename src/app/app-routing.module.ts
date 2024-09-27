import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {AuthComponent} from "./components/auth/auth.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {EditComponent} from "./components/edit/edit.component";
import {InsertComponent} from "./components/insert/insert.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'insert', component: InsertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
