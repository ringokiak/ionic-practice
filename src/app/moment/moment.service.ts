/*
 * @Author: r1ngo
 * @Date: 2022-03-30 10:55:40
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-30 15:21:04
 * @Description: ez pz lemon squezzy
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  momentList: ResultData[] = [];
  constructor(private http: HttpClient) {}

  getList(): void {
    this.http
      .get('http://127.0.0.1:4523/mock/762788/momentList')
      .subscribe((res: Result) => {
        this.momentList = this.momentList.concat(res.data);
      });
  }
}

interface Result {
  code: number;
  data: ResultData[];
  message: string;
}

interface ResultData {
  avatar: string;
  name: string;
  content: string;
  pics: string[];
  time: number;
}
