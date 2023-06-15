import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { MarkdownModule } from 'ngx-markdown';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule, MatDividerModule, MarkdownModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  router = inject(Router);
  appService = inject(AppService);
  shortExperienceContent: any;
  ngOnInit(): void {
    this.appService.getShortExperienceContent().subscribe((result) => {
      console.log(result);
      this.shortExperienceContent = result;
    })
  }
  selectedExperience(): void {
    console.log('selected Experience');
    this.router.navigateByUrl('experience');
  }
}
