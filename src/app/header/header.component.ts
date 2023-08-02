import { Component, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { LanguageService } from '../language.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  language: string = '';
  logoSrc = 'assets/images/logo.png';
  isDark = false;

  constructor(private languageService: LanguageService, private cdr: ChangeDetectorRef, private renderer: Renderer2) {
    this.language = this.languageService.getCurrentLanguage();


    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDark = true;
      this.logoSrc = 'assets/images/logo-dark.png';
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
    }
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


  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      localStorage.setItem('theme', 'dark');
      this.logoSrc = 'assets/images/logo-dark.png';
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
    } else {
      localStorage.removeItem('theme');
      this.logoSrc = 'assets/images/logo.png';
      this.renderer.removeAttribute(document.documentElement, 'data-theme');
    }
  }
}





