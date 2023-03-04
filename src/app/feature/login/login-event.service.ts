import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginEventService {
  @Output() courseCreateEvent = new EventEmitter<string>();
  constructor() {}

  sendLoginEvent() {
    this.courseCreateEvent.emit();
  }
}
