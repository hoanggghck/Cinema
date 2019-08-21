import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { SlicetextPipe } from './slicetext.pipe';

@NgModule({
  declarations: [SafePipe, SlicetextPipe],
  imports: [
    CommonModule
  ],
  exports: [SafePipe,SlicetextPipe]
})
export class PipeModule { }
