import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from  '@ionic/storage-angular';
import { User } from  './user';
import { AuthResponse } from  './auth-response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly authServerAddress = 'http://localhost:3000';
  private readonly authSubject = new BehaviorSubject(false);
  private readonly storageReady: Promise<void>;

  constructor(private httpClient: HttpClient, private storage: Storage) {
    this.storageReady = this.storage.create().then(async () => {
      this.authSubject.next(Boolean(await this.storage.get('ACCESS_TOKEN')));
    });
  }

  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.authServerAddress}/register`, user).pipe(
      tap(response => void this.saveSession(response))
    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.authServerAddress}/login`, user).pipe(
      tap(response => void this.saveSession(response))
    );
  }

  async logout(): Promise<void> {
    await this.storageReady;
    await this.storage.remove('ACCESS_TOKEN');
    await this.storage.remove('EXPIRES_IN');
    this.authSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  private async saveSession(response: AuthResponse): Promise<void> {
    await this.storageReady;
    await this.storage.set('ACCESS_TOKEN', response.access_token);
    await this.storage.set('EXPIRES_IN', response.expires_in);
    this.authSubject.next(true);
  }
}
