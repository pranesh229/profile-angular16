import { Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentMode = 'light';
  document = inject(DOCUMENT);
  router = inject(Router);
  ngOnInit(): void {
    this.document.body.classList.toggle('light');
    // this.document.body.classList.toggle(Mode.DARK);

  }
  toggleTheme() {
    this.document.body.classList.toggle('dark');
    this.document.body.classList.toggle('light');
    if (this.currentMode === 'light') {
      this.currentMode = 'dark';
    } else {
      this.currentMode = 'light';

    }

  }
  goHome(): void {
    this.router.navigateByUrl('/');
  }
}
