import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  allJobs: any[] = [];

  getData() {
    this.userService.viewAllJobs().subscribe(
      (res) => {
        console.log(res);
        this.allJobs = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  constructor(private userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  deleteJob(id: string) {
    this.userService.deletejob(id).subscribe((res) => {
      this.getData();
    });
  }

  viewJob(id: string) {
    localStorage.setItem('view_job', id);
    this.router.navigateByUrl('viewjob');
  }
}
