import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  updateform: any;
  randomNumber: any;
  age: any = [];
  dage: any = [];
  obj: any;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {
    this.updateform = this.fb.group({
      name: ['', Validators.required],
      cname: [''],
      sex: ['', Validators.required],
      dob: ['', Validators.required],
      sdob: [''],
      status: ['', Validators.required],
      age: ['', Validators.required],
      sage: [''],
      occupation: ['', Validators.required],
      surname: ['', Validators.required],
      marital: ['', Validators.required],
      village: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    })

    this.updateform.get('status')?.valueChanges.subscribe((status: string) => {
      this.onBaptisedStatusChange(status);
    });
  }

  ngOnInit() {

    const ddlPassport = document.getElementById('TravelPurpos') as HTMLSelectElement;
    const color = document.getElementById('sdobb') as HTMLInputElement;

    ddlPassport.addEventListener('change', () => {
      if (ddlPassport.value === 'Baptised') {
        color.disabled = false;
      } else {
        color.disabled = true;
      }
    });
    const dlPassport = document.getElementById('TravelPurpos') as HTMLSelectElement;
    const colors = document.getElementById('sdob') as HTMLInputElement;

    dlPassport.addEventListener('change', () => {
      if (dlPassport.value === 'Baptised') {
        colors.disabled = false;
      } else {
        colors.disabled = true;
      }
    });
    const dlPassports = document.getElementById('TravelPurpos') as HTMLSelectElement;
    const colorss = document.getElementById('sage') as HTMLInputElement;

    dlPassports.addEventListener('change', () => {
      if (dlPassports.value === 'Baptised') {
        colorss.disabled = false;
      } else {
        colorss.disabled = true;
      }
    });

  }


  onsubmit() {
    if (this.updateform.invalid) {
      this.updateform.markAllAsTouched();
      return;
    }
    const x = {
      "name": this.updateform.value.name,
      "surname": this.updateform.value.surname,
      "sex": this.updateform.value.sex,
      "dob": this.updateform.value.dob,
      "age": this.updateform.value.age,
      "occupation": this.updateform.value.occupation,
      "marital": this.updateform.value.marital,
      "village": this.updateform.value.village,
      "city": this.updateform.value.city,
      "email": this.updateform.value.email,
      "baptizedStatus": this.updateform.get('status')?.value,
      "Cname":this.updateform.value.cname,
      "baptizedDate": this.updateform.value.sdob,
      "Sage": this.updateform.value.sage,
      "phoneNumber": this.updateform.value.phone
    }
    this.obj = x;
    this.router.navigate(['/confirm'], { queryParams: x });


    // this.auth.register(obj).subscribe((data:any)=>{
    //    // // console.log(data)
    //   //alert(data.message)
    //   this.toastr.success(data.message)
    //   window.location.href='#/thanks';

    // })

  }
  calculateAge(dateString: string) {
    // // console.log(dateString)
    const dob = new Date(dateString);
    const today = new Date();
    const age = Math.floor((today.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    if (isNaN(age)) {
      // Set age to 0 when value is NaN
      this.age = 0;
    } else {
      this.age = age;
    }
  }
  dobage(dateStringg: string) {
    // // console.log(dateStringg)
    const dob = new Date(dateStringg);
    const today = new Date();
    const age = Math.floor((today.getTime() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    if (isNaN(age)) {
      // Set age to 0 when value is NaN
      this.dage = 0;
    } else {
      this.dage = age;
    }



  }

  onBaptisedStatusChange(status: string): void {
    const cname = this.updateform.get('cname');
    const sdob = this.updateform.get('sdob');
    const sage = this.updateform.get('sage');

    if (status === 'Baptised') {
      cname?.setValidators([Validators.required]);
      sdob?.setValidators([Validators.required]);
      sage?.setValidators([Validators.required]);
    } else {
      this.updateform.patchValue({
        cname: '',
        sdob: '',
        sage: ''
      });
      cname?.clearValidators();
      sdob?.clearValidators();
      sage?.clearValidators();
    }
    cname?.updateValueAndValidity();
    sdob?.updateValueAndValidity();
    sage?.updateValueAndValidity();
  }

}
