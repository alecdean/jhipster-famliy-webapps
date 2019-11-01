import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { AuthGuardService } from 'app/core/auth/auth-guard.service';
import { HomeComponent } from './home.component';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'Welcome, Java Hipster!'
  },
  canActivate: [UserRouteAccessService, AuthGuardService]
};
