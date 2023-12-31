import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { GhostsListComponent } from './ghosts-list/ghosts-list.component';
import { AppRoutingModule } from './app-routing.module';
import { GhostDetailsComponent } from './ghost-details/ghost-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { CursedPossesionsComponent } from './cursed-possessions/cursed-possesions.component';
import { TarotCardsComponent } from './cursed-possessions/tarot-cards/tarot-cards.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ActiveLinkDirective } from './active-link.directive';
import { HauntedMirrorComponent } from './cursed-possessions/haunted-mirror/haunted-mirror.component';
import { MonkeyPawComponent } from './cursed-possessions/monkey-paw/monkey-paw.component';
import { CursedHuntComponent } from './cursed-possessions/cursed-hunt/cursed-hunt.component';
import { MusicBoxComponent } from './cursed-possessions/music-box/music-box.component';
import { OuijaBoardComponent } from './cursed-possessions/ouija-board/ouija-board.component';
import { SummoningCircleComponent } from './cursed-possessions/summoning-circle/summoning-circle.component';
import { VoodooDollComponent } from './cursed-possessions/voodoo-doll/voodoo-doll.component';
import { IdentificationToolsComponent } from './identification-tools/identification-tools.component';
import { TimerComponent } from './timer/timer.component';
import {MatSliderModule} from '@angular/material/slider';
import { GhostBlinkingComponent } from './identification-tools/ghost-blinking/ghost-blinking.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, GhostsListComponent, GhostDetailsComponent, HeaderComponent, NavigationMenuComponent, CursedPossesionsComponent, TarotCardsComponent, HomePageComponent, AboutPageComponent, ActiveLinkDirective, HauntedMirrorComponent, MonkeyPawComponent, CursedHuntComponent, MusicBoxComponent, OuijaBoardComponent, SummoningCircleComponent, VoodooDollComponent, IdentificationToolsComponent, TimerComponent, GhostBlinkingComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
