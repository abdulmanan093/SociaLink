import { Component, inject } from '@angular/core';
import { Nav } from '../layout/nav/nav';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected router = inject(Router);
}
// export class App implements OnInit {
//   private accountService = inject(AccountService);
//   private http = inject(HttpClient);
//   protected title = 'SociaLink';
//   protected users = signal<User[]>([]);

//   async ngOnInit() {
//     this.users.set(await this.getusers());
//     this.setCurrentUser();
//   }

//   setCurrentUser() {
//     const userString = localStorage.getItem('user');
//     if (!userString) return;
//     const user = JSON.parse(userString);
//     this.accountService.currentUser.set(user);
//   }

//   async getusers() {
//     try {
//       return lastValueFrom(
//         this.http.get<User[]>('http://localhost:5182/api/users')
//       );
//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
// }
