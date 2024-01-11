import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ngfor',
    title: 'ngFor',
    loadComponent: () =>
      import('./components/new-control-flow/ngFor/ngFor.component').then(
        (m) => m.NgForComponent
      ),
  },
  {
    path: 'ngif',
    title: 'ngIf',
    loadComponent: () =>
      import('./components/new-control-flow/ngIf/ngIf.component').then(
        (m) => m.NgIfComponent
      ),
  },
  {
    path: 'ngswitch',
    title: 'ngSwitch',
    loadComponent: () =>
      import('./components/new-control-flow/ngSwitch/ngSwitch.component').then(
        (m) => m.NgSwitchComponent
      ),
  },
  {
    path: 'deferrable-view/on-idle',
    title: 'DeferrableView: on-idle',
    loadComponent: () =>
      import('./components/deferrable-view/on-idle/on-idle.component').then(
        (m) => m.OnIdleComponent
      ),
  },
  {
    path: 'deferrable-view/on-interaction',
    title: 'DeferrableView: on-interaction',
    loadComponent: () =>
      import('./components/deferrable-view/interaction/interaction.component').then(
        (m) => m.InteractionComponent
      ),
  }
];
