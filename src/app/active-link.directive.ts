import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective implements OnInit {
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      const linkUrl = this.el.nativeElement.getAttribute('routerLink');

      if (currentUrl === linkUrl) {
        this.renderer.addClass(this.el.nativeElement, 'active');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'active');
      }
    });
  }
}
