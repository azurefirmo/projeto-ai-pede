import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Bakery {
  id: number;
  title: string;
  description: string;
  img: string;
  likes_count: number;
  comments_count: number;
  createdAt: string;
}

export interface BakeryMenuItem {
  id: number;
  product: string;
}

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  private baseURL = "https://my-json-server.typicode.com/brunoscv/bakery/";

  constructor(private http: HttpClient) { }

  public getBakeries(): Observable<Bakery[]> {
    return this.http.get<Bakery[]>(`${this.baseURL}bakeries`);
  }

  public getMenuBakeries(id: number): Observable<BakeryMenuItem[]> {
    const params = new HttpParams().set('bakeryId', id);
    return this.http.get<BakeryMenuItem[]>(`${this.baseURL}bakery_menu`, { params });
  }


}
