import { Component, HostBinding, Input, Inject, ChangeDetectionStrategy, HostListener, Output, EventEmitter, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SandboxClient } from '../client';
import { formatSelector } from '../selector.pipe';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetComponent implements OnInit, OnDestroy {
  private _selector: string;
  private sub: Subscription;
  public focus: boolean;

  @Input() node;
  @Input()
  get selector() {
    return this._selector;
  }
  set selector(selector: string) {
    this._selector = selector;
    const el = this.document.querySelector(selector);
    if (el) {
      const { top, left, height, width } = el.getBoundingClientRect();
      this.top = `${top - 2}px`;
      this.left = `${left - 2}px`;
      this.height = `${height - 1}px`;
      this.width = `${width - 1}px`;
    }
  }

  @HostBinding('class') klass: string;
  @HostBinding('style.top') top: string;
  @HostBinding('style.left') left: string;
  @HostBinding('style.height') height: string;
  @HostBinding('style.width') width: string;
  @HostBinding('style.borderColor') borderColor: string;

  @HostListener('click', ['$event'])
  select(event: MouseEvent) {
    event.stopPropagation();
    this.client.select(this.node);
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private client: SandboxClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sub = this.client.isSelected(this.node.id)
      .subscribe(isSeleted => {
        this.klass = isSeleted ? 'selected' : '';
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get depth() {
    return this.node?.id.split('-').length;
  }

  childSelector(child, i) {
    return `${this.selector} ${formatSelector(child, i)}`;
  }
}
