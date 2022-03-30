/*
 * @Author: r1ngo
 * @Date: 2022-03-29 15:25:27
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-30 15:36:43
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
import { MomentService } from './moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.page.html',
  styleUrls: ['./moment.page.scss'],
})
export class MomentPage implements OnInit {
  constructor(public service: MomentService) {}

  page: number = 1;
  loadingDisabled: boolean = false;

  loadList(event): void {
    setTimeout(() => {
      this.page++;
      this.service.getList();
      event.target.complete();
      if (this.page >= 3) {
        this.loadingDisabled = true;
      }
    }, 500);
  }

  doRefresh(event): void {
    setTimeout(() => {
      this.page = 1;
      this.service.momentList = [];
      this.service.getList();
      this.loadingDisabled = false;
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.service.getList();
  }
}
