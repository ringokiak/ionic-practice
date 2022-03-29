/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 14:55:23
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
  title: string;
  // 获取当前的 tab
  tabChange(e: Tabs): void {
    this.tabNow = e.tab;
    if (this.tabNow == 'tab2') {
      this.title = 'Contacts';
    } else if (this.tabNow == 'tab3') {
      this.title = 'Discover';
    } else {
      this.title = 'BroChat';
    }
  }
}

interface Tabs {
  tab: string;
}
