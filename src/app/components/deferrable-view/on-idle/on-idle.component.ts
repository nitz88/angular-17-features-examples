import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TodoComponent } from "../todo/todo.component";

@Component({
    selector: 'feature-1-on-idle',
    standalone: true,
    template: `
    <!-- With on idle or without its the same, we can skip it. -->
    @defer{
    <!-- @defer (on idle) { -->
      In Defer block
    } @placeholder (minimum 2s) {
        <p>This will go away in 2 seconds</p>
    }
    <div>Scroll down...</div>
    <div class="space"></div>
    
    <div #todoSection>Here we are loading the todo component when view port on this section.</div>
    
    @defer (on viewport(todoSection)) {
    <!-- We can give on viewport so angular, will load the part in defer block when we reach same viewport -->
    <!-- @defer (on viewport){ -->
      <feature-1-todo></feature-1-todo>
    }
  `,
    styles: `
    .space {
      height: 1000px;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TodoComponent]
})
export class OnIdleComponent {}
