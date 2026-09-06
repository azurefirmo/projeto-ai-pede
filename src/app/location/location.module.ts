import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LocationPage } from './location.page';
import { IONIC_COMPONENTS } from '../ionic-components';

const routes: Routes = [
  {
    path: '',
    component: LocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...IONIC_COMPONENTS,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
