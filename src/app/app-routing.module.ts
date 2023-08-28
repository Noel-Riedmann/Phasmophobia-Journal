import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhostsListComponent } from './ghosts-list/ghosts-list.component';
import { GhostDetailsComponent } from './ghost-details/ghost-details.component';
import { CursedPossesionsComponent } from './cursed-possessions/cursed-possesions.component';
import { TarotCardsComponent } from './cursed-possessions/tarot-cards/tarot-cards.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HauntedMirrorComponent } from './cursed-possessions/haunted-mirror/haunted-mirror.component';
import { MonkeyPawComponent } from './cursed-possessions/monkey-paw/monkey-paw.component';
import { CursedHuntComponent } from './cursed-possessions/cursed-hunt/cursed-hunt.component';
import { MusicBoxComponent } from './cursed-possessions/music-box/music-box.component';
import { OuijaBoardComponent } from './cursed-possessions/ouija-board/ouija-board.component';
import { SummoningCircleComponent } from './cursed-possessions/summoning-circle/summoning-circle.component';
import { VoodooDollComponent } from './cursed-possessions/voodoo-doll/voodoo-doll.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'ghosts', component: GhostsListComponent },
  { path: 'ghosts/:name', component: GhostDetailsComponent },
  { path: 'ghosts/details/:name', redirectTo: 'ghosts/:name', pathMatch: 'full'  },
  { path: 'navigation/menu', component: NavigationMenuComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'cursed-possessions', component: CursedPossesionsComponent },
  { path: 'cursed-possessions/cursed-hunt', component: CursedHuntComponent },
  { path: 'cursed-possessions/haunted-mirror', component: HauntedMirrorComponent },
  { path: 'cursed-possessions/monkey-paw', component: MonkeyPawComponent },
  { path: 'cursed-possessions/tarot-cards', component: TarotCardsComponent },
  { path: 'cursed-possessions/music-box', component: MusicBoxComponent },
  { path: 'cursed-possessions/ouija-board', component: OuijaBoardComponent },
  { path: 'cursed-possessions/summoning-circle', component: SummoningCircleComponent },
  { path: 'cursed-possessions/voodoo-doll', component: VoodooDollComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
