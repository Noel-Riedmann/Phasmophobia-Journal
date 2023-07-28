import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GhostsListComponent } from './ghosts-list/ghosts-list.component';
import { GhostDetailsComponent } from './ghost-details/ghost-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'ghosts', pathMatch: 'full' },
  { path: 'ghosts', component: GhostsListComponent },
  { path: 'ghosts/details/:id', component: GhostDetailsComponent },
  { path: 'navigation/menu', component: NavigationMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
