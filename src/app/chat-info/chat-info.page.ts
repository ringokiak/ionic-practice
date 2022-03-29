/*
 * @Author: r1ngo
 * @Date: 2022-03-29 14:16:40
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-29 14:34:53
 * @Description: ez pz lemon squezzy
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.page.html',
  styleUrls: ['./chat-info.page.scss'],
})
export class ChatInfoPage implements OnInit {
  friend: Friend;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.friend = this.route.snapshot.params as Friend;
  }
}

interface Friend {
  name: string;
  avatar: string;
}
