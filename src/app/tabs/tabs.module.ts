import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { IONIC_COMPONENTS } from '../ionic-components';

@NgModule({
  imports: [
    ...IONIC_COMPONENTS,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
