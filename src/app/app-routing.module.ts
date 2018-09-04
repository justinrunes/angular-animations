import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FadeInComponent } from './FadeIn/FadeIn.component';
import { FlyInComponent } from './FlyIn/FlyIn.component';

const routes: Routes = [
  {
    path: 'fly-in',
    component: FlyInComponent
  },
  {
    path: 'fade-in',
    component: FadeInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
