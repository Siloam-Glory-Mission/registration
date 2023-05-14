import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-not',
  templateUrl: './not.component.html',
  styleUrls: ['./not.component.css']
})
export class NotComponent {
  notbaptised: any;
  randomNumber: any;
  age: any = [];
  dage: any=[];

  constructor(private auth:AuthService,private router:Router,private fb: FormBuilder,private toastr: ToastrService){
    this.notbaptised=this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      sex:['',Validators.required],
      dob:['',Validators.required],
      status:['',Validators.required],
      age:['',Validators.required],
      occupation:['',Validators.required],
      surname:['',Validators.required],
      marital:['',Validators.required],
      dno:['',Validators.required],
      parish:['',Validators.required],
      village:['',Validators.required],
      city:['',Validators.required],
      phone:['',Validators.required],
      email:['',Validators.required]
    })
  }
  ngOnInit(){

    this.randomNumber = Math.floor(Math.random() * 1000000);
   

     }
     

     onsubmit(){
      const y={
        "code":this.notbaptised.value.code,
        "name":this.notbaptised.value.name,
        "sex":this.notbaptised.value.sex,
        "dob":this.notbaptised.value.dob,
        "age":this.notbaptised.value.age,
        "status":this.notbaptised.value.status,
        "occupation":this.notbaptised.value.occupation,
        "surname":this.notbaptised.value.surname,
        "marital":this.notbaptised.value.marital,
        "dno":this.notbaptised.value.dno,
        "parish":this.notbaptised.value.parish,
        "village":this.notbaptised.value.village,
        "city":this.notbaptised.value.city,
        "phone":this.notbaptised.value.phone,
        "email":this.notbaptised.value.email
  
      }
      this.router.navigate(['/confirms'], { queryParams: y });
      
    
  
     }
    
  dobage(dateStringg: string) {
     // console.log(dateStringg)
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

onChange(selectedValue:any): void {
  //console.log(selectedValue.target.value);
  if(selectedValue.target.value=='Baptised')
  {
    window.location.href='#/register'
  }

}

}
