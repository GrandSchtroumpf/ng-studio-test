import { Pipe, PipeTransform } from '@angular/core';
import { DirectiveNode } from './client';

@Pipe({ name: 'nodeName' })
export class NodeNamePipe implements PipeTransform {
  transform(node: DirectiveNode) {
    return node.metadata.type.reference.name;
  }
}
