import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox-cources',
  templateUrl: './checkbox-cources.component.html',
  styleUrls: ['./checkbox-cources.component.scss'],
})
export class CheckboxCourcesComponent {
  constructor(private _formBuilder: FormBuilder) {}

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
