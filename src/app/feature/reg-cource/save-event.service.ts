import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SaveEventService {
  @Output() selectCourseEvent = new BehaviorSubject<number | undefined>(
    undefined
  );
  constructor() {}

  sendSaveEvent() {
    this.selectCourseEvent.next(0);
  }
}
