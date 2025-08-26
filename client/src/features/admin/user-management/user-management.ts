import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { AdminService } from '../../../core/services/admin-service';
import { User } from '../../../types/user';
import { ToastService } from '../../../core/services/toast-service';

@Component({
  selector: 'app-user-management',
  imports: [],
  templateUrl: './user-management.html',
  styleUrl: './user-management.css',
})
export class UserManagement implements OnInit {
  @ViewChild('rolesModal') rolesModal!: ElementRef<HTMLDialogElement>;
  private adminService = inject(AdminService);
  private toast = inject(ToastService);

  protected users = signal<User[]>([]);
  protected availableRoles = ['Member', 'Moderator', 'Admin'];
  protected selectedUser: User | null = null;

  ngOnInit(): void {
    this.getUserWithRoles();
  }

  getUserWithRoles() {
    this.adminService.getUserWithRoles().subscribe({
      next: (users) => this.users.set(users),
      error: () => this.toast.error('Failed to load users'),
    });
  }
  openRolesModal(user: User) {
    this.selectedUser = user;
    this.rolesModal.nativeElement.showModal();
  }

  toggleRole(event: Event, role: string) {
    if (!this.selectedUser) return;

    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedUser.roles.push(role);
    } else {
      this.selectedUser.roles = this.selectedUser.roles.filter(
        (r) => r !== role
      );
    }
  }

  updateRoles() {
    if (!this.selectedUser) return;
    this.adminService
      .updateUserRoles(this.selectedUser.id, this.selectedUser.roles)
      .subscribe({
        next: (updateRoles) => {
          this.users.update((users) =>
            users.map((u) => {
              if (u.id === this.selectedUser?.id) u.roles = updateRoles;
              return u;
            })
          );
          this.toast.success('User roles updated successfully');
          this.rolesModal.nativeElement.close();
        },
        error: () => this.toast.error('You must select at least one role.'),
      });
  }
}
