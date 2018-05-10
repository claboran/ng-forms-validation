import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'frvl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frvl';
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFrorm();
  }


  private createFrorm(): void {
    this.formGroup = this.fb.group({
      name: new FormControl('',
        Validators.required),
      email: new FormControl('',
        Validators.email)
    });
  }
}
