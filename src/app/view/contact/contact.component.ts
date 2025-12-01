import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    FormsModule, // <-- Add this
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    RadioButtonModule, // <-- Required for <p-radioButton>
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    product: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
