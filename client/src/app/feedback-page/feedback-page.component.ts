import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialService } from '../shared/classes/material.service';
import { Feedback } from '../shared/interfaces';
import { FeedbackService } from '../shared/services/feedback.service';
declare function animItems (): any;

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private feedbackService: FeedbackService,
  ) {}

  ngOnInit(): void {
    animItems();
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.form.disable();
    const newFeedback: Feedback = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      text: this.form.value.text,
    }

    const completed = () => {
      this.form.reset({
        name: null,
        phone: null,
        text: null,
      });
      this.form.enable();
    }

    this.feedbackService.create(newFeedback).subscribe({
      next: () => {
        MaterialService.toast('Успешно отправлено');
      },
      error: (error) => MaterialService.toast(error.error.message),
      complete: completed,
    });
  }
}
