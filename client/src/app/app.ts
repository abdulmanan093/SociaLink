import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Nav } from '../layout/nav/nav';
import { Home } from '../features/home/home';
import { AccountService } from '../core/services/account-service';
import { User } from '../types/user';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private accountService = inject(AccountService);
  private http = inject(HttpClient);
  protected title = 'SociaLink';
  protected users = signal<User[]>([]);

  async ngOnInit() {
    this.users.set(await this.getusers());
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getusers() {
    try {
      return lastValueFrom(
        this.http.get<User[]>('http://localhost:5182/api/users')
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
