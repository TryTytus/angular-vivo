import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthControllerService,
  AuthenticationRequest,
  AuthResponse,
  Configuration,
} from '../api';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  called = false;

  public token: string | undefined;

  constructor(private http: HttpClient) {}

  isLoggedIn() {
    return localStorage.getItem('authKey') || undefined;
  }

  async login(usr: string, pass: string): Promise<AuthResponse> {
    localStorage.setItem('logged', `${true}`);

    const login_cred: AuthenticationRequest = {
      username: usr,
      password: pass,
    };

    return await firstValueFrom(
      this.http.post('http://localhost:8080/auth/login', login_cred)
    );
  }

  getCred(): string | undefined {
    return localStorage.getItem('authKey') || undefined;
  }
}
