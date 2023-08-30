import { Component, ViewChild, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { LanguageService } from '../language.service';
import { MatIcon } from '@angular/material/icon';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  language: string = '';
  logoSrc = 'assets/images/logo.png';
  isDark = false;


  constructor(private languageService: LanguageService, private cdr: ChangeDetectorRef, private renderer: Renderer2, private router: Router) {
    this.language = this.languageService.getCurrentLanguage();


    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      this.isDark = true;
      this.logoSrc = 'assets/images/logo-dark.png';
      this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
    }

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Add an event listener to listen for changes to the matches property
    darkModeMediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      // Check if the user has enabled forced dark mode
      if (event.matches) {
        // Set the data-theme attribute to 'dark' to apply your dark theme
        this.isDark = true;
        this.logoSrc = 'assets/images/logo-dark.png';
        this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
      } else {
        // Remove the data-theme attribute to apply your light theme
        this.isDark = false;
        this.logoSrc = 'assets/images/logo.png';
        this.renderer.removeAttribute(document.documentElement, 'data-theme');
      }
    });

    // Check if the user has enabled forced dark mode when the page loads
    if (darkModeMediaQuery.matches) {
      // Set the data-theme attribute to 'dark' to apply your dark theme
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

  toggleMenu() {
    if (this.router.url != '/navigation/menu') {
      this.router.navigate(['/navigation/menu'])
    }
    else if (this.router.url == '/navigation/menu') {
      window.history.back();
    }
  }
}





