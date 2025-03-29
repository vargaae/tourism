import { MediaMatcher } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer | undefined;
  http = inject(HttpClient);
  auth = inject(AuthService);

  userLoggedIn: boolean = false;

  // TODO: Implement NavLinks -> Navbar with interface:
  protected readonly navLinks = [
    { title: 'Home', linkRoute: '/hotel-list' },
    { title: 'Dashboard', linkRoute: '/dashboard' },
    { title: 'EndPage - 1st Hotel', linkRoute: '/hotel-detail/1' },
    { title: 'Registration', linkRoute: '/registration' },
    { title: 'Login', linkRoute: '/login' },
  ];

  protected readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 810px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.auth.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
        this.userLoggedIn = true;
      } else {
        this.auth.currentUserSig.set(null);
        this.userLoggedIn = false;
      }
    });
  }
  ngAfterViewInit() {
    this.sidenavContainer?.scrollable.elementScrolled().subscribe(() => {}/* react to scrolling */);
  }
  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
