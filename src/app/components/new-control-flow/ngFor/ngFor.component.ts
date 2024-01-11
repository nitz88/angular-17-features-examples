import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'feature-1-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngFor.component.html',
  styleUrl: './ngFor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgForComponent {
  itemList = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ];

  trackByFun(index: number, item: any ) {
    return item.title;
  }
}
