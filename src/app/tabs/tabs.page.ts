/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-28 09:57:19
 * @Description: ez pz lemon squezzy
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}
  // 当前的 tab 名称
  tabNow: string;
  // 获取当前的 tab
  tabChange(e: Tabs): void {
    this.tabNow = e.tab;
  }
}

interface Tabs {
  tab: string;
}
