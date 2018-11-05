import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: SandboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
