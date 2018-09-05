import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-FadeIn',
  templateUrl: './FadeIn.component.html',
  styleUrls: ['./FadeIn.component.css'],
  animations: [
    trigger('animateState', [
      state('inactive', style({
        backgroundColor: '#004025'
      })),
      state('active',   style({
        backgroundColor: '#64BD98'
      })),
      transition('inactive <=> active', animate('300ms ease-in')),
      transition('active <=> inactive', animate('300ms ease-out'))
    ])
  ]
})
export class FadeInComponent implements OnInit {
  
  public state = 'inactive'

  constructor() { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

}
