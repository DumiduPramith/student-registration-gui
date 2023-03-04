import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateCourseSignalService {
  @Output() courseCreateEvent = new EventEmitter<string>();
  constructor() {}

  SendCourseCreateSignal() {
    // send create signal to another component
    this.courseCreateEvent.emit();
  }
}
