import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentPage } from './moment.page';

const routes: Routes = [
  {
    path: '',
    component: MomentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentPageRoutingModule {}
