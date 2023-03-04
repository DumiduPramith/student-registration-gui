import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourcesRefreshEventService {
  @Output() courseRegisterEvent = new EventEmitter<string>();
  constructor() {}

  SendregisterCourceEvent() {
    // send create signal to another component
    this.courseRegisterEvent.emit();
  }
}
