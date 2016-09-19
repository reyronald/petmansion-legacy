import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BookingComponent}      from './booking.component';
import {BookingStep1Component} from './booking-step1.component';
import {BookingStep2Component} from './booking-step2.component';

const bookingRoutes: Routes = [
  {
    path: 'booking',
    component: BookingComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: BookingStep1Component },
      { path: 'step2', component: BookingStep2Component },
    ],
  },
];

export const appRoutingProviders: any[] = [
];

export const bookingRouting: ModuleWithProviders = RouterModule.forChild(bookingRoutes);