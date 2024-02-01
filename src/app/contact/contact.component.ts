import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { State } from '../types/types';
import { PortfolioActions } from '../shared/state/portfolio.action';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private store: Store<State>) {}

  contactForm = new FormGroup<any>({
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

  onSubmit() {
    this.store.dispatch(
      PortfolioActions.postContact(this.contactForm.getRawValue())
    );
    this.contactForm.reset();
  }
}
