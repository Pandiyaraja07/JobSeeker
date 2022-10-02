import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {  
  allJobs: any[] = []

  getdata(){
    this.userService.viewAllJobs().subscribe((res) => {
        console.log(res)
        this.allJobs = res
    },(error)=>{
      console.log(error)
    })
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getdata()
  }

}
