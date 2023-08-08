import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhostsListComponent } from './ghosts-list/ghosts-list.component';
import { GhostDetailsComponent } from './ghost-details/ghost-details.component';
import { CursedPossesionsComponent } from './cursed-possessions/cursed-possesions.component';
import { TarotCardsComponent } from './cursed-possessions/tarot-cards/tarot-cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'ghosts', pathMatch: 'full' },
  { path: 'ghosts', component: GhostsListComponent },
  { path: 'ghosts/details/:id', component: GhostDetailsComponent },
  { path: 'navigation/menu', component: NavigationMenuComponent },
  { path: 'cursed-possessions', component: CursedPossesionsComponent },
  {path: 'cursed-possessions/tarot-cards', component: TarotCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
