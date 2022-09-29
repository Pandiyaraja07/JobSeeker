import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {
  usertype:string= "candiate";
  Email: FormControl=new FormControl('')
  Password: FormControl=new FormControl('')

  getdata(){
    const payload = {
      email: this.Email.value,
      password: this.Password.value
    }
    this.userService.candidateLogin(payload).subscribe((res) => {
        console.log(res)
    })
  }

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  routeTo(){
    this.router.navigateByUrl('candidate-register')
  }

  
  

}
