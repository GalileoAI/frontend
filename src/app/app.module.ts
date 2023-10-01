import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HavePlanComponent } from './components/have-plan/have-plan.component';
import { HavePlanFormComponent } from './view/have-plan-form/have-plan-form.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { HavePlanResultComponent } from './view/have-plan-result/have-plan-result.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faFacebook, faLinkedin, faStackOverflow, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {LandingComponent} from "./components/landing/landing.component";
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { DeklaracjaDostepnosciComponent } from './components/deklaracja-dostepnosci/deklaracja-dostepnosci.component';
import { PolitykaPrywatnosciComponent } from './components/polityka-prywatnosci/polityka-prywatnosci.component';
import { WarunkiKorzystaniaComponent } from './components/warunki-korzystania/warunki-korzystania.component';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [
    AppComponent,
    HavePlanComponent,
    HavePlanFormComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    HavePlanResultComponent,
    SurpriseMeComponent,
    DeklaracjaDostepnosciComponent,
    PolitykaPrywatnosciComponent,
    WarunkiKorzystaniaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {constructor(library: FaIconLibrary) {
  library.addIcons(
    faStackOverflow,
    faFacebook,
    faTwitter,
    faLinkedin,
    faYoutube,
    faArrowLeft
  );
} }
