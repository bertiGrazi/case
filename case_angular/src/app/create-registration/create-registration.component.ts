import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

interface Measure {
  value: string
  viewValue: string
}

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})

export class CreateRegistrationComponent implements OnInit{
  public registerForm!: FormGroup 

  measures: Measure[] = [
    {value: 'lt', viewValue: 'lt'},
    {value: 'kg', viewValue: 'kg'},
    {value: 'un', viewValue: 'un'}
  ]

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
