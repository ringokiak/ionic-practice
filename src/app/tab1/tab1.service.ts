/*
 * @Author: r1ngo
 * @Date: 2022-03-25 17:42:22
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-25 17:55:46
 * @Description: ez pz lemon squezzy
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tab1Service {
  constructor(private http: HttpClient) {}
  chatList: Chat[];
  getList(): void {
    this.http.post('http://127.0.0.1:4523/mock/762788/messageList', {
      page: 1,
      size: 10,
    });
  }
}

interface Chat {
  avatar: string;
  name: string;
  content: string;
  time: number;
  banned: boolean;
}
