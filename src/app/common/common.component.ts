import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  // getdata(){
    
  //   this.userService.viewAllJobs.subscribe((res) => {
  //       console.log(res)
  //   })
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
