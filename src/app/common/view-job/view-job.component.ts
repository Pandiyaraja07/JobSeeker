import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss'],
})
export class ViewJobComponent implements OnInit {
  job: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.viewJob();
  }

  viewJob() {
    const id = String(localStorage.getItem('view_job'));
    this.userService.viewJob(id).subscribe((res) => {
      this.job = res;
    });
  }

  goBack() {
    this.router.navigateByUrl('AllJobs');
  }
}
