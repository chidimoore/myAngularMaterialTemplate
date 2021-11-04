import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-taxpayer-form',
  templateUrl: './taxpayer-form.component.html',
  styleUrls: ['./taxpayer-form.component.css']
})
export class TaxpayerFormComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
  }

}
