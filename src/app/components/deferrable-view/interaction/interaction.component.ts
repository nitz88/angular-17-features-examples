import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'feature-1-interaction',
  standalone: true,
  imports: [],
  template: `
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" #loadButton>Click Me</button>
    <div>
      @defer(on interaction(loadButton)) {
        Hello I am loaded after button click.
      }
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractionComponent {}
