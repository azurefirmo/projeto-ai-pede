import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BakeryDetailPage } from './bakery-detail.page';
import { IONIC_COMPONENTS } from '../ionic-components';

const routes: Routes = [
  {
    path: '',
    component: BakeryDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...IONIC_COMPONENTS,
    RouterModule.forChild(routes)
  ],
  declarations: [BakeryDetailPage]
})
export class BakeryDetailPageModule {}
