import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'selector', pure: true })
export class SelectorPipe implements PipeTransform {

  transform(node, index: number) {
    return formatSelector(node, index);
  }
}

export function formatSelector(node: any, i: number) {
  return `${node.name}:nth-child(${i + 1})`;
}