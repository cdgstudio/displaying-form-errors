import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
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
    const control = this.form.get(controlName)!;
    return control.hasError(error);
  }
}
