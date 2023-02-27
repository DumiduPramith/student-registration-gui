import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateSignalService {
  @Output() strategySelectEvent = new EventEmitter<string>();
  constructor() {}

  SendCreateSignal() {
    // send create signal to another component
    this.strategySelectEvent.emit();
  }
}
