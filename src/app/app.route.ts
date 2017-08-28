import {Routes} from "@angular/router";
import {homeRoutes} from "./home/home.route";
import {aboutRoutes} from "./about/about.route";

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...homeRoutes,
  ...aboutRoutes
];
