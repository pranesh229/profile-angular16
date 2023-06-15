import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownModule } from 'ngx-markdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reach-out',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MarkdownModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './reach-out.component.html',
  styleUrls: ['./reach-out.component.scss']
})
export class ReachOutComponent {
  router = inject(Router);
  goBack() {
    this.router.navigateByUrl('');
  }
}
