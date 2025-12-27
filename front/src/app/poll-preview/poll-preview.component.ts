import { Component, Input } from '@angular/core';
import { Poll } from '../model/model';

@Component({
  selector: 'app-poll-preview',
  templateUrl: './poll-preview.component.html',
})
export class PollPreviewComponent {
  @Input() poll!: Poll;
}
