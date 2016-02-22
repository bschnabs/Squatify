import { Component } from 'angular2/core';
import { View } from 'angular2/core';

@Component({
   selector: 'hello-world'
})

@View({
  templateUrl: '/app/helloComponent/helloComponent.html'
})

export class HelloComponent {
   constructor() {
   }
}
