import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HavePlanComponent } from './components/have-plan/have-plan.component';
import { LandingComponent } from './components/landing/landing.component';
import {SurpriseMeComponent} from "./components/surprise-me/surprise-me.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'mam-plan', component: HavePlanComponent },
  { path: 'zaskocz-mnie', component: SurpriseMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
