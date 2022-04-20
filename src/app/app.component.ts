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

  get login() {
    return this.form.get('login')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  get terms() {
    return this.form.get('terms')!;
  }

  sendForm() {
    alert('Form was sent');
  }
}
