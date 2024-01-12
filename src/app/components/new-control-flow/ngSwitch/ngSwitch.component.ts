

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'feature-1-ng-switch',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="mx-auto w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
            >
            Age (Between 0-5)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            min="0"
            max="5"
            placeholder="age"
            [(ngModel)]="age"
            />
        </div>
      </div>
    </div>
    <div class="text-center text-gray-500 text-xs">
      <div>
        @switch (age) {
          @case (1) {
            <div>One</div>
          }
          @case (2) {
            <div>Two</div>
          }
          @case (3) {
            <div>Three</div>
          }
          @case (4) {
            <div>Four</div>
          }
          @case (5) {
            <div>Five</div>
          }
          @default {
            <div>This is Default</div>
          }
        }
      </div>
    </div>
    `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgSwitchComponent {
  age: number = 0;
}
