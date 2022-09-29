import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';


@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.scss']
})
export class CandidateRegisterComponent implements OnInit {

  SuccessMessage = ''
  adminData: any
  registerForm!:FormGroup

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(){
    this.registerForm = new FormGroup({
      Candidate_Name: new FormControl(""),
      Email : new FormControl(""),
      Password: new FormControl(""),
      Phone: new FormControl(""),
      Qualification: new FormControl(""),
      Experience: new FormControl(""),
      Expected_Salary:new FormControl(""),
      Current_Salary:new FormControl(""),
      Current_Company_Name: new FormControl(""),
      Resume: new FormControl("")
     })
  }
  getdata(){
    const payload = {
     candidate_name: this.registerForm.value.Candidate_Name,
      email: this.registerForm.value.Email,
      password: this.registerForm.value.Password,
      phone: this.registerForm.value.Phone,
      qualification: this.registerForm.value.Qualification,
      experience: this.registerForm.value.Experience,
      expected_salary: this.registerForm.value.Expected_Salary,
      current_salary: this.registerForm.value.Current_Salary,
      current_company_name: this.registerForm.value.Current_Company_Name,
      resume: this.registerForm.value.Resume
    }  
     this.userService.candidateRegister(payload).subscribe((res) => {
      console.log(res)
     })
  }

routeTo(){
  this.router.navigateByUrl('candidate-login')
}
}
