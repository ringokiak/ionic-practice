/*
 * @Author: r1ngo
 * @Date: 2022-03-29 09:58:26
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 18:20:04
 * @Description: ez pz lemon squezzy
 */
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatInfo: ChatInfo;
  speak: boolean = true;
  message: string = null;
  messageList: Message[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  send(): void {
    this.messageList.push({
      content: this.message,
      time: new Date().getTime(),
    });
    this.message = null;
  }

  toInfo(): void {
    let obj = {
      name: this.chatInfo.name,
      avatar: this.chatInfo.avatar,
    };
    this.router.navigate(['chat-info', obj]);
  }

  back(): void {
    this.location.back();
  }

  ngOnInit() {
    if (this.route.snapshot.queryParams.chatInfo) {
      this.chatInfo = JSON.parse(this.route.snapshot.queryParams.chatInfo);
    }
  }
}

interface Message {
  content: string;
  time: number;
}

interface ChatInfo {
  avatar: string;
  banned: boolean;
  content: string;
  name: string;
  time: number;
}
