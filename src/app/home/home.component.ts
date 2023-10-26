import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { MarkdownModule } from 'ngx-markdown';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule, MatDividerModule, MarkdownModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  router = inject(Router);
  appService = inject(AppService);
  shortExperienceContent = toSignal(this.appService.getShortExperienceContent());

  selectedExperience(experienceId: string): void {
    this.router.navigateByUrl(`experience/${experienceId}`);
  }
}
