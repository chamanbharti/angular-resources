import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRequestComponent } from './post/post-request/post-request.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostRequestComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PostRequestComponent]
})
export class UdemyHttpModule { }
