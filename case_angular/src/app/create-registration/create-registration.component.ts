import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit{
  public registerForm!: FormGroup 

  constructor(private fb: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nameItem: '',
      measure: '',
      amount: '',
      price: '',
      product: '',
      validity: '',
      fabrication: '',
    })
  }

  saveForm() {
    console.log(this.registerForm.value)
  }
}
