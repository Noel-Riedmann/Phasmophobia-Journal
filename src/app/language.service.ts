import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private defaultLanguage = 'en';
  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.defaultLanguage;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
