import { Component } from '@angular/core';
import { LanguageService } from './language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phasmophobia-Journal';
  language: string = '';

  constructor(private languageService: LanguageService, private router: Router) {
  }
  changeLanguage(event: any) {
    const language = event.target.value;
    this.language = language;
    this.languageService.setCurrentLanguage(language);
  }
  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}


