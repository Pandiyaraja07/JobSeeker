import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';



@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.scss']
})
export class ViewCandidatesComponent implements OnInit {
  AllCandidate: any[] =[]

  getdata(){
    this.userService.viewCandidates().subscribe((res)=>{
      console.log(res)
      this.AllCandidate = res
  },(error)=>{
    console.log(error)
  })
}

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getdata()
  }

}
