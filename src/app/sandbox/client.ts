import { CompileDirectiveMetadata, CompileTemplateMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { PluginClient, connectClient } from '@remixproject/plugin';
import { WebviewConnector } from './connector';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';

export interface DirectiveContext {
  methods: string[];
  properties: string[];
  selectors: string[];
}

export interface DirectiveNode {
  context: DirectiveContext;
  metadata: CompileDirectiveMetadata;
  templateMetadata: CompileTemplateMetadata;
}


@Injectable({ providedIn: 'root' })
export class SandboxClient extends PluginClient<any, any> {

  public methods: [];

  private selected = new BehaviorSubject<any>(null);
  public selected$ = this.selected.asObservable();

  private node = new BehaviorSubject<DirectiveNode>(null);
  public node$ = this.node.asObservable();

  private ast = new BehaviorSubject<any>(null);
  public ast$ = this.ast.asObservable();

  constructor() {
    super();
    connectClient(new WebviewConnector(), this);
    this.onload(() => {
      this.on('project', 'selectDirective', (node) => this.node.next(node));
      this.on('template', 'selectAst', (ast) => this.ast.next(ast));
      this.on('template', 'selectNode', (node) => this.selected.next(node));
    });
  }

  isSelected(id: string) {
    return this.selected$.pipe(
      filter(node => !!node?.id),
      map(node => node.id === id),
      distinctUntilChanged()
    );
  }

  select(node: any) {
    this.call('template', 'selectNode', node);
  }
}
