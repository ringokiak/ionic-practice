/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-26 10:52:01
 * @Description: ez pz lemon squezzy
 */
import { Component } from '@angular/core';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public service: Tab1Service) {}
  ngOnInit(): void {
    this.service.getList();
  }
}
