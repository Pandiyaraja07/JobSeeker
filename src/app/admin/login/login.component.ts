import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  SuccessMessage = '';
  adminData: any;
  Username: FormControl = new FormControl('');
  Password: FormControl = new FormControl('');

  getdata() {
    const payload = {
      user_name: this.Username.value,
      password: this.Password.value,
    };
    this.userservice.adminLogin(payload).subscribe((res) => {
      console.log(res);
      localStorage.setItem('admin', JSON.stringify(res.accesstoken));
      this.adminData = res;
      this.router.navigateByUrl('AllJobs');
    });
  }

  constructor(private userservice: UserService, private router: Router) {}

  routeTo() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit(): void {}
}
