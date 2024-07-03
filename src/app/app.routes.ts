import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LocationListComponent } from './location-list/location-list.component';

export const routes: Routes = [
    {path: "", redirectTo: "menu", pathMatch: "full"},
    {path: "menu", component: MenuComponent,
        children: [
            {path: "location", component: LocationListComponent}
        ]
    }
];
