import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  @ViewChild(FormGroupDirective, { static: true }) formDirective!: FormGroupDirective;

  form = new FormGroup({
    login: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  sendForm() {
    if (false === this.form.valid) {
      return;
    }

    alert('Form was sent');
  }

  displayError(controlName: string, error: string) {
    return this.formDirective.submitted && this.form.get(controlName)!.hasError(error);
  }
}
