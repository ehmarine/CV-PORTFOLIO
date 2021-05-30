import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      subject: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  get name() {return this.contactForm.get('name') as FormControl}
  get email() {return this.contactForm.get('email') as FormControl}
  get message() {return this.contactForm.get('message') as FormControl}
  get subject() {return this.contactForm.get('subject') as FormControl}


  onSub() {

    

    // console.log(this.contactForm.controls.name.status)
    // console.log(this.name.status)
    // console.log(this.email.status)
    // console.log(this.subject.status)


    if(this.contactForm.controls.name.status === 'VALID' && this.contactForm.controls.email.status === 'VALID' && this.contactForm.controls.subject.status === 'VALID' )
      console.log('YOOO bro this is a valid form submit congrats')
      else
      console.log('Every Field Needs An MOTHAF**** Input Noob')
  }

}
