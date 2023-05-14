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
  dage: any=[];


  constructor(private auth:AuthService,private router:Router,private fb: FormBuilder,private toastr: ToastrService){
    this.updateform=this.fb.group({
      code:['',Validators.required],
      name:['',Validators.required],
      cname:[''],
      sex:['',Validators.required],
      dob:['',Validators.required],
      sdob:[''],
      status:['',Validators.required],
      age:['',Validators.required],
      sage:[''],
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
     

     onsubmit(){
      var obj={
        "code":this.updateform.value.code,
        "name":this.updateform.value.name,
        "cname":this.updateform.value.cname,
        "sex":this.updateform.value.sex,
        "dob":this.updateform.value.dob,
        "sdob":this.updateform.value.sdob,
        "status":this.updateform.value.status,
        "age":this.updateform.value.age,
        "sage":this.updateform.value.sage,
        "occupation":this.updateform.value.occupation,
        "surname":this.updateform.value.surname,
        "marital":this.updateform.value.marital,
        "dno":this.updateform.value.dno,
        "parish":this.updateform.value.parish,
        "village":this.updateform.value.village,
        "city":this.updateform.value.city,
        "phone":this.updateform.value.phone,
        "email":this.updateform.value.email
  
      }
      
      this.auth.register(obj).subscribe((data:any)=>{
         // console.log(data)
        //alert(data.message)
        this.toastr.success(data.message)
        window.location.href='#/thanks';

      })
  
     }
     calculateAge(dateString: string) {
       // console.log(dateString)
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
 // console.log(selectedValue.target.value);
  if(selectedValue.target.value=='Not-Baptised')
  {
    window.location.href='#/notbaptised'
  }

}
}
