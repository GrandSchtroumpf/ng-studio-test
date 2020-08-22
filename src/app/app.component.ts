import { Component } from '@angular/core';
import { SandboxClient } from './sandbox/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private selected;
  loaded = false;
  node$ = this.client.node$;
  ast$ = this.client.ast$;

  constructor(
    private client: SandboxClient
  ) {}

  removeNode() {
    this.client.call('template', 'remove', this.selected.id);
  }

  addNode() {
    this.client.call('template', 'add', this.selected);
  }
}
