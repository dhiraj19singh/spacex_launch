import { LaunchListComponent } from './launch-list/launch-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/launch-list', pathMatch: 'full' },
  { path: 'launch-list', component: LaunchListComponent },
  {
    path: '**',
    redirectTo: '/launch-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
