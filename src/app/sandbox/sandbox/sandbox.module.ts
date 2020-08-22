import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { NodeNamePipe } from '../directive-node.pipe';



@NgModule({
  declarations: [SandboxComponent, NodeNamePipe],
  exports: [SandboxComponent, NodeNamePipe],
  imports: [
    CommonModule
  ]
})
export class SandboxModule { }
