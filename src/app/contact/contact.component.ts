import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../types/types';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm= new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9 ]*$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.email,
    ]),
    phone: new FormControl('', Validators.pattern('[- +()0-9]{10,16}')),
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9 ]*$/),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
      Validators.pattern(/^[a-zA-Z0-9]+[a-zA-Z0-9,.?@ ]*$/),
    ]),
  });

  constructor(private service: ServiceService){}

  onSubmit() {
    //console.log(this.contactForm.value);
    this.service.postContactEmail(this.contactForm.value as ContactForm);
  }
}
