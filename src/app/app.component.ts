import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlyInComponent } from './FlyIn/FlyIn.component';
import { FadeInComponent } from './FadeIn/FadeIn.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
