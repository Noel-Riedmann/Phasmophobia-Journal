import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translateService: TranslateService, private languageService: LanguageService) {
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


