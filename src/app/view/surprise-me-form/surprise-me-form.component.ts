import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-surprise-me-form',
  templateUrl: './surprise-me-form.component.html',
  styleUrls: ['./surprise-me-form.component.scss']
})
export class SurpriseMeFormComponent {
  constructor(private apiService: ApiService) {
  }

}
