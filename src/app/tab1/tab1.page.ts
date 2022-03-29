/*
 * @Author: r1ngo
 * @Date: 2022-03-25 16:17:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 10:18:48
 * @Description: ez pz lemon squezzy
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public service: Tab1Service, private router: Router) {}
  toChat(item: ChatInfo): void {
    const newItem: string = JSON.stringify(item);
    this.router.navigate(['chat'], {
      queryParams: {
        chatInfo: newItem,
      },
    });
  }
  ngOnInit(): void {
    this.service.getList();
  }
}

interface ChatInfo {
  avatar: string;
  banned: boolean;
  content: string;
  name: string;
  time: number;
}
