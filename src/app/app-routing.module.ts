import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HavePlanComponent } from './components/have-plan/have-plan.component';
import { LandingComponent } from './components/landing/landing.component';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import {DeklaracjaDostepnosciComponent} from "./components/deklaracja-dostepnosci/deklaracja-dostepnosci.component";
import {WarunkiKorzystaniaComponent} from "./components/warunki-korzystania/warunki-korzystania.component";
import {PolitykaPrywatnosciComponent} from "./components/polityka-prywatnosci/polityka-prywatnosci.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'mam-plan', component: HavePlanComponent },
  { path: 'zaskocz-mnie', component: SurpriseMeComponent },
  { path: 'deklaracja-dostepnosci', component: DeklaracjaDostepnosciComponent },
  { path: 'warunki-korzystania', component: WarunkiKorzystaniaComponent },
  { path: 'polityka-prywatnosci', component: PolitykaPrywatnosciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
