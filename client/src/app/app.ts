import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  http = inject(HttpClient);
  protected title = 'SociaLink';

  protected users = signal<any>([]);

  async ngOnInit() {
    this.users.set(await this.getusers());
  }

  async getusers() {
    try {
      return lastValueFrom(this.http.get('http://localhost:5182/api/users'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
