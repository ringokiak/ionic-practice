/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 09:57:47
 * @Description: ez pz lemon squezzy
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
