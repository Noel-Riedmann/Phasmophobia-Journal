import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  language: string = '';

  constructor(private languageService: LanguageService, private cdr: ChangeDetectorRef) {
    this.language = this.languageService.getCurrentLanguage();
  }

  changeLanguage(event: any) {
    const language = event.target.value;
    console.log('Selected language:', language);
    this.language = language;
    this.languageService.setCurrentLanguage(language);
  }


  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}
