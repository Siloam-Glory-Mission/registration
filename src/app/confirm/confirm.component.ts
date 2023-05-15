import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {
  updateform: any;
  data: any;

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
      email:['',Validators.required]
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
    let code=this.data.code;

      var obj={
      "code":this.data.code,
      "name":this.data.name,
      "cname":this.data.cname,
      "sex":this.data.sex,
      "dob":this.data.dob,
      "sdob":this.data.sdob,
      "status":this.data.status,
      "age":this.data.age,
      "sage":this.data.sage,
      "occupation":this.data.occupation,
      "surname":this.data.surname,
      "marital":this.data.marital,
      "dno":this.data.dno,
      "parish":this.data.parish,
      "village":this.data.village,
      "city":this.data.city,
      "phone":this.data.phone,
      "email":this.data.email

    }
    // console.log(obj)

    
    this.auth.register(obj).subscribe((data:any)=>{
       // // console.log(data)
      //alert(data.message)
      this.toastr.success(data.message)
      window.location.href='#/thanks';

    })

   }
   backtoedit(){
    window.location.href='#/register';
   }

}
