import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { FeedBackRoutingModule } from './feed-back-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedBackRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeedBackModule { }
