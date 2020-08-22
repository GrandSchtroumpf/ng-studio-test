import { Component, OnInit, Type, Input, EventEmitter, Output } from '@angular/core';
import { Observable, from } from 'rxjs';
import { components } from '../../../../components';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  cmpt: Type<any>;

  @Input() set name(name: string) {
    this.loaded.emit(false);
    if (name) {
      this.load(name);
    }
  }
  @Output() loaded = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  async load(name: string) {
    const load = components[name];
    this.cmpt = await load();
    this.loaded.emit(true);
  }

}
