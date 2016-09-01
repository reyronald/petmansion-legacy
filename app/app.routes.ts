import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent}     from './app.component';
import {HomeComponent}    from './home.component';
import {AboutComponent}   from './about.component';
import {BookingComponent} from './booking.component';
import {ContactComponent} from './contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  }, 
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);