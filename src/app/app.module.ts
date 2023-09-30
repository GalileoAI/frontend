import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './view/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultComponent } from './view/result/result.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faFacebook, faLinkedin, faStackOverflow, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent
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
    faYoutube
  );
} }
