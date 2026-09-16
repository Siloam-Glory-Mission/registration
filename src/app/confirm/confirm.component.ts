import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  updateform: any;
  data: any;
  public isChecked = true;
  checkboxValues: { [key: string]: boolean } = {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  };
  check: any;
  submitting = false;
  errorMessage: string | null = null;
  constructor(private auth:AuthService,private router:Router,private fb: FormBuilder,private toastr: ToastrService,private route:ActivatedRoute,private fm:FormsModule){
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
      var obj={
      "name": this.data.name,
      "surname": this.data.surname,
      "gender": this.data.sex,
      "dob": this.data.dob,
      "age": this.data.age,
      "occupation": this.data.occupation,
      "marital": this.data.marital,
      "village": this.data.village,
      "city": this.data.city,
      "baptizedStatus": this.data.baptizedStatus,
      "Cname":this.data.Cname,
      "baptizedDate": this.data.baptizedDate,
      "Sage": this.data.Sage,
      "phoneNumber": this.data.phoneNumber,
      "area": this.data.village,

    }
    this.auth.register(obj).subscribe({
      next:(data:any)=>{
        this.toastr.success(data.message)
        window.location.href='#/thanks';
      },
      error:(err)=>{
        this.submitting=false;
        this.errorMessage = err?.error?.message || (err?.status === 409 ? 'This registration already exists.' : 'Something went wrong. Please try again.');
        alert(this.errorMessage);
        this.toastr.error(this.errorMessage as string)
      }
    })

   }
   backtoedit(){
    window.location.href='/';
   }
   updateCheckboxValue(checkboxName: string) {
    console.log(checkboxName);
    
  }
  
  
  


}
