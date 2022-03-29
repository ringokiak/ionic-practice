/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 09:59:51
 * @Description: ez pz lemon squezzy
 */
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, Tab2PageRoutingModule],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
