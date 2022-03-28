/*
 * @Author: r1ngo
 * @Date: 2022-03-28 16:20:13
 * @LastEditors: r1ngo
 * @LastEditTime: 2022-03-28 18:07:28
 * @Description: ez pz lemon squezzy
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Tab2Service {
  constructor(private http: HttpClient) {}
  originList: ResultData[] = [];
  contactsList: NewData[] = [];
  getList(): void {
    this.http
      .get('http://127.0.0.1:4523/mock/762788/contactList')
      .subscribe((res: Result) => {
        this.originList = res.data;
        this.reBuild();
      });
  }
  reBuild(): void {
    const arr: string[] = [];
    this.originList.map((val: ResultData) => {
      let cap = val.name.substring(0, 1);
      if (!arr.includes(cap)) arr.push(cap);
    });
    arr.sort();
    arr.map((val: string) => {
      this.contactsList.push({
        capital: val,
        list: [],
      });
    });
    this.originList.map((val: ResultData) => {
      let cap = val.name.substring(0, 1);
      arr.map((ano: string, idx: number) => {
        if (cap == ano) {
          this.contactsList[idx].list.push({
            name: val.name,
            avatar: val.avatar,
          });
        }
      });
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
}

interface NewData {
  capital: string;
  list: ResultData[];
}
