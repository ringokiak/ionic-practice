/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-30 10:17:50
 * @Description: ez pz lemon squezzy
 */
import { Component } from '@angular/core';
import { Tab2Service } from './tab2.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public service: Tab2Service) {}

  hrefTo(item: string): void {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  ngOnInit(): void {
    this.service.getList();
  }
}
