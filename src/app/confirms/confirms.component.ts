import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-confirms',
  templateUrl: './confirms.component.html',
  styleUrls: ['./confirms.component.css']
})
export class ConfirmsComponent {
  updateform: any;
  data: any;
  form: any;
  public isChecked = true;
  checkboxValues: { [key: string]: boolean } = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  };
  check: any;
  submitting = false;
  errorMessage: string | null = null;
  constructor(private auth:AuthService,private router:Router,private fb: FormBuilder,private toastr: ToastrService,private route:ActivatedRoute){
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
      email:['',Validators.required],
      checkbox1: new FormControl(this.checkboxValues['checkbox1']),


    })
    
  }
  

ngOnInit()
{
  this.route.queryParams.subscribe(params => {
    this.data = params;
    // console.log(this.data)
  //  // console.log(this.data);
  });  
 
}
  onsubmit(){
    if(this.submitting){
      return;
    }
    this.submitting=true;
    this.errorMessage=null;
    let code=this.data.code;

      var obj={
        "code":this.data.code,
        "name":this.data.name,
        "status":this.data.status,
        "sex":this.data.sex,
        "dob":this.data.dob,
        "age":this.data.age,
        "occupation":this.data.occupation,
        "surname":this.data.surname,
        "marital":this.data.marital,
        "dno":this.data.dno,
        "parish":this.data.parish,
        "village":this.data.village,
        "city":this.data.city,
        "phone":this.data.phone,
        "email":this.data.email,
        "verified":this.check

    }

      this.auth.notbaptised(obj).subscribe({
        next:(data:any)=>{
          this.toastr.success(data.message)
          window.location.href='#/thanks';
        },
        error:(err)=>{
          alert(err?.error?.message || (err?.status === 409 ? 'This registration already exists.' : 'Something went wrong. Please try again.'));
          this.submitting=false;
          this.errorMessage = err?.error?.message || (err?.status === 409 ? 'This registration already exists.' : 'Something went wrong. Please try again.');
          this.toastr.error(this.errorMessage as string)
        }
      })

   }
   backtoedit(){
    window.location.href='#/notbaptised';
   }
   updateCheckboxValue(checkboxName: string) {
    console.log(checkboxName);
    this.check=checkboxName;
    this.checkboxValues[checkboxName] = this.updateform.get(checkboxName)?.value || false;
  }
   

}


