import { Component, OnInit } from '@angular/core';

import { StacheDemoComponentService } from './demo-component.service';
import { StacheDemoComponent } from './demo-component';
import { StacheNavLink } from '../shared/stache/modules/nav/nav-link';

@Component({
  selector: 'stache-demo-components',
  templateUrl: './demo-components.component.html'
})
export class StacheDemoComponentsComponent implements OnInit {
  public components: StacheDemoComponent[];
  public routes: StacheNavLink[] = [{
    name: 'Overview',
    path: '/components',
    icon: 'cog',
    summary: 'Lorem and stuff.'
  },
  {
    name: 'Hero',
    path: '/components/hero',
    icon: 'picture-o',
    summary: 'Add a banner image with header information to your Stache pages.'
  }];

  public constructor(private componentService: StacheDemoComponentService) { }

  public ngOnInit(): void {
    this.components = this.componentService.getAll();
    this.components.forEach((component) => {
      this.routes.push({
        path: [component.route],
        name: component.name,
        icon: component.icon,
        summary: component.summary
      });
    });
  }
}
