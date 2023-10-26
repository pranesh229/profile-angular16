import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppService } from '../app.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MarkdownModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {


  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  appService = inject(AppService);
  markdown = toSignal(this.activatedRoute.paramMap.pipe(switchMap((params: ParamMap) => this.appService.getExperienceDetails(params.get('experienceId') as string))));

  goBack() {
    this.router.navigateByUrl('');
  }
}

