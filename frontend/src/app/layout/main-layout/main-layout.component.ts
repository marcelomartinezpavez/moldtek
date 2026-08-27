import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, SidebarComponent],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #sidenav
        [mode]="isMobile() ? 'over' : 'side'"
        [opened]="!isMobile()"
        fixedInViewport
        class="app-sidenav">
        <app-sidebar (closeNav)="sidenav.close()" />
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header (toggleNav)="sidenav.toggle()" />
        <main class="main-content">
          <router-outlet />
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container { height: 100vh; }
    .app-sidenav { width: 260px; background: #1B5E20; }
    .main-content { min-height: calc(100vh - 64px); background: #f5f5f5; }
  `]
})
export class MainLayoutComponent {
  private breakpoint = inject(BreakpointObserver);
  readonly isMobile = toSignal(
    this.breakpoint.observe([Breakpoints.HandsetPortrait]).pipe(map(r => r.matches)),
    { initialValue: false }
  );
}
