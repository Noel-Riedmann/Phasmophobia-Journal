import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { GhostsListComponent } from './ghosts-list/ghosts-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GhostDetailsComponent } from './ghost-details/ghost-details.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, GhostsListComponent, GhostDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
