import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { Member } from '../../../types/member';
import { filter } from 'rxjs';
import { AgePipe } from '../../../core/pipes/age-pipe';
import { MemberService } from '../../../core/services/member-service';
import { AccountService } from '../../../core/services/account-service';
import { PresenceService } from '../../../core/services/presence-service';
import { LikesService } from '../../../core/services/likes-service';

@Component({
  selector: 'app-member-detailed',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AgePipe],
  templateUrl: './member-detailed.html',
  styleUrl: './member-detailed.css',
})
export class MemberDetailed implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accountService = inject(AccountService);
  protected memberService = inject(MemberService);
  protected presenceService = inject(PresenceService);
  protected likesService = inject(LikesService);
  protected title = signal<string | undefined>('profile');
  private routeId = signal<string | null>(null);

  protected isCurrentUser = computed(() => {
    return this.accountService.currentUser()?.id === this.routeId();
  });
  protected hasLiked = computed(() =>
    this.likesService.likeIds().includes(this.routeId()!)
  );

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.routeId.set(params.get('id'));
    });
  }

  get isPhotosRoute(): boolean {
    return this.router.url.includes('/photos');
  }

  ngOnInit(): void {
    this.title.set(this.route.firstChild?.snapshot?.title);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: () => {
          this.route.firstChild?.snapshot?.title;
        },
      });
  }
}
